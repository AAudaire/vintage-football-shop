import type { Product } from "../types/product";

const baseUrl = import.meta.env.VITE_BFF_URL;

export async function getProductById(id: number): Promise<Product> {
  const res = await fetch(`${baseUrl}/bff/product/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
