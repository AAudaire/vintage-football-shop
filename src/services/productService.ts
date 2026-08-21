import type { FeaturedProducts } from "../types/featuredProducts";
import type { Product } from "../types/product";

const baseUrl = import.meta.env.VITE_BFF_URL;

export async function getProductById(id: number): Promise<Product> {
  const res = await fetch(`${baseUrl}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export async function getFeaturedProducts(): Promise<FeaturedProducts> {
  const res = await fetch(`${baseUrl}/products/featured`);
  if (!res.ok) throw new Error("Failed to fetch featured products");
  return res.json();
}
