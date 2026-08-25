import type { ProductSize } from "./productSize";
import type { ProductVariant } from "./productVariant";

export type Product = {
  id: number;
  name: string;
  description: string;
  category: number;
  variants: ProductVariant[];
  sizes: ProductSize[];
};
