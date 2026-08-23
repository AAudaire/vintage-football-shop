import type { ProductImage } from "./productImage";

export type ProductVariant = {
  id: number;
  price: string;
  size: string;
  condition: string;
  images: ProductImage[];
  stock: number;
  isDefault: boolean;
};
