import type { ProductImage } from "./productImage";

export type ProductCardData = {
  id: number;
  name: string;
  price: number;
  condition: string;
  images: ProductImage[];
};
