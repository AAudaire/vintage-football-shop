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

function readJsonSafe(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, "utf8"));
    }
  } catch (e) {
    console.warn("Failed to parse", filePath, e && e.message);
  }
  return null;
}

function readProductList() {
  const filePath = path.join(responsesDir, "products.json");
  return readJsonSafe(filePath) || [];
}

function readProductById(id) {
  const candidates = [
    path.join(responsesDir, String(id), "product.json"),
    path.join(responsesDir, String(id), "default.json"),
    path.join(responsesDir, "products", `${id}.json`),
  ];

  for (const filePath of candidates) {
    const data = readJsonSafe(filePath);
    if (data !== null) return data;
  }

  return null;
}

app.get("/products", (req, res) => {
  const base = `${req.protocol}://${req.get("host")}`;
  const products = readProductList();

  if (!products || products.length === 0) {
    return res.status(404).json({ message: "Products not found" });
  }

  return res.json(rewriteImagePaths(products, base));
});

app.get("/products/featured", (req, res) => {
  const base = `${req.protocol}://${req.get("host")}`;
  const featuredFile = path.join(responsesDir, "featured.json");
  const featured = readJsonSafe(featuredFile);

  if (featured) {
    return res.json(rewriteImagePaths(featured, base));
  }

  return res.status(404).json({ message: "Featured products not found" });
});

app.get("/products/:id", (req, res) => {
  const base = `${req.protocol}://${req.get("host")}`;
  const product = readProductById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.json(rewriteImagePaths(product, base));
});

const port = process.env.PORT || 4100;
app.listen(port, () =>
  console.log(`Mock BFF listening on http://localhost:${port}`),
);
