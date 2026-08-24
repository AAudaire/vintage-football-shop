import type { ProductCondition } from "./productCondition";
import type { ProductImage } from "./productImage";
import type { ProductSize } from "./productSize";

export type ProductVariant = {
  id: number;
  price: string;
  size: ProductSize;
  condition: ProductCondition;
  images: ProductImage[];
  stock: number;
  isDefault: boolean;
};
