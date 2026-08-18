import type { ProductImage } from "./productImage";

export type ProductCardData = {
  id: number;
  name: string;
  variantId: number;
  price: number;
  size: string;
  condition: string;
  images: ProductImage[];
};
