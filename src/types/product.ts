import type { ProductVariant } from "./productVariant";

export type Product = {
  id: number;
  name: string;
  description: string;
  category: number;
  variants: ProductVariant[];
};
