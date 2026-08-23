import type { ProductImage } from "./productImage";

export type ProductCardData = {
  id: number;
  name: string;
  variantId: number;
  price: string;
  size: string;
  condition: string;
  images: ProductImage[];
};
