import { products } from "../data/products";
import type { Product } from "../types/product";

export async function getProductById(id: number): Promise<Product> {
  const product: Product | undefined = products.find((x) => x.id === id);
  if (!product) throw new Error(`Product ${id} not found`);
  return product;
}

// export async function getProductById(id: number): Promise<Product> {
//   const res = await fetch(`/api/products/${id}`);
//   if (!res.ok) throw new Error("Failed to fetch product");
//   return res.json();
// }