import type { ProductCondition } from "./productCondition";
import type { ProductImage } from "./productImage";
export type ProductVariant = {
  id: number;
  price: string;
  sizeId: number;
  condition: ProductCondition;
  images: ProductImage[];
  stock: number;
  isDefault: boolean;
};
