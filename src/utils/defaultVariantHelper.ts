import type { Product } from "../types/product";
import type { ProductVariant } from "../types/productVariant";

export function getDefaultVariant(
  product: Product,
): ProductVariant | undefined {
  return (
    product.variants.find((variant) => variant.isDefault) ?? product.variants[0]
  );
}
