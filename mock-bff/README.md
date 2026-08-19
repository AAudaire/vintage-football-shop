# Mock BFF for vintage-football-shop

Simple Backend-for-Frontend mock to be used by the React app during development.

Install & run (from repo root)

```bash
cd mock-bff
npm install
npm run dev
```

Configuration

- `PORT` — port to listen on (default `4100`).
- `UPSTREAM_URL` — optional upstream API to proxy to (BFF will prefer upstream responses when set).

Endpoints

- `GET /bff/products`
- `GET /bff/products/:id`

Responses configuration

Place mock responses under `mock-bff/responses/`.

- To mock the products list: `mock-bff/responses/products.json`.
- To mock a product by id: create a folder per id, e.g. `mock-bff/responses/1/product.json` for `GET /bff/products/1` (or `GET /api/products/1`).
- The server will try the following candidates in order for `GET /bff/products/1`:
  1.  `responses/1/products.json` or `responses/1/product.json`
  2.  `responses/1/default.json`
  3.  `responses/products/1.json`
  4.  `responses/products.json`
  5.  `responses/default.json`

Examples

```bash
curl http://localhost:4100/bff/products
curl http://localhost:4100/bff/products/1
```
