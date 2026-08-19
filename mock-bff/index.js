const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from mock-bff/public
const publicDir = path.join(__dirname, "public");
app.use(express.static(publicDir));

function rewriteImagePaths(obj, baseUrl) {
  if (obj == null) return obj;
  if (Array.isArray(obj)) return obj.map((o) => rewriteImagePaths(o, baseUrl));
  if (typeof obj === "object") {
    const out = {};
    for (const k of Object.keys(obj)) {
      const v = obj[k];
      if (k === "url" && typeof v === "string" && !/^https?:\/\//i.test(v)) {
        const p = v.replace(/\\/g, "/").replace(/^\/+/, "");
        out[k] = `${baseUrl}/${p}`;
      } else {
        out[k] = rewriteImagePaths(v, baseUrl);
      }
    }
    return out;
  }
  return obj;
}

const responsesDir = path.join(__dirname, "responses");
const productsPath = path.join(__dirname, "responses/products.json");
let products = [];
try {
  products = JSON.parse(fs.readFileSync(productsPath, "utf8"));
} catch (e) {
  // keep products empty if not present; we'll prefer explicit response files in `responses/`
}

function readJsonSafe(filePath) {
  try {
    if (fs.existsSync(filePath))
      return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (e) {
    console.warn("Failed to parse", filePath, e && e.message);
  }
  return null;
}

function findMockResponseFor(req) {
  const segs = req.path.split("/").filter(Boolean); // ['bff','products','1']
  // remove leading mount if present
  if (segs[0] === "bff") segs.shift();
  const resource = segs[0] || "root";
  const id = segs[1];

  const candidates = [];
  if (id && /^\d+$/.test(id)) {
    // prefer per-id folder: responses/{id}/{resource}.json
    candidates.push(path.join(responsesDir, id, `${resource}.json`));
    candidates.push(path.join(responsesDir, id, `default.json`));
    // also allow responses/{resource}/{id}.json
    candidates.push(path.join(responsesDir, resource, `${id}.json`));
  }

  // resource-level responses
  candidates.push(path.join(responsesDir, `${resource}.json`));
  candidates.push(path.join(responsesDir, `default.json`));

  for (const c of candidates) {
    const data = readJsonSafe(c);
    if (data !== null) return data;
  }
  return null;
}

// If UPSTREAM_URL is set, the BFF will forward requests to that URL.
const UPSTREAM = process.env.UPSTREAM_URL;

async function fetchFromUpstream(pathname) {
  if (!UPSTREAM || !global.fetch) return null;
  try {
    const res = await fetch(`${UPSTREAM.replace(/\/$/, "")}${pathname}`);
    if (!res.ok) return { status: res.status };
    const data = await res.json();
    return { status: res.status, data };
  } catch (e) {
    return { status: 502 };
  }
}

// Generic GET handler under /bff that resolves mock files from `responses/`
app.get(["/bff/*"], async (req, res) => {
  // try filesystem-based mock first
  const mock = findMockResponseFor(req);
  if (mock !== null) {
    const base = `${req.protocol}://${req.get("host")}`;
    return res.json(rewriteImagePaths(mock, base));
  }

  // fallback to upstream if configured
  if (UPSTREAM) {
    const upstream = await fetchFromUpstream(req.path);
    if (upstream && upstream.data !== undefined) {
      const base = `${req.protocol}://${req.get("host")}`;
      return res
        .status(upstream.status)
        .json(rewriteImagePaths(upstream.data, base));
    }
    if (upstream && upstream.status && upstream.status !== 200)
      return res.sendStatus(upstream.status);
  }

  // last-resort: fallback to products list or 404
  const segs = req.path.split("/").filter(Boolean);
  if (segs[0] === "bff" && segs[1] === "products" && !segs[2]) {
    return res.json(products);
  }
  return res.status(404).json({ message: "Mock response not found" });
});

const port = process.env.PORT || 4100;
app.listen(port, () =>
  console.log(`Mock BFF listening on http://localhost:${port}`),
);
