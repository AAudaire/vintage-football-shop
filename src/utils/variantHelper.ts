import type { Product } from "../types/product";
import type { ProductVariant } from "../types/productVariant";

export function getDefaultVariant(product: Product): ProductVariant {
  if (!product) {
    throw new Error("getDefaultVariant: product is null or undefined");
  }

  const variants = product.variants;

  if (variants.length === 0) {
    throw new Error(`getDefaultVariant: product ${product.id} has no variants`);
  }

  return variants.find((variant) => variant.isDefault) ?? variants[0];
}

export function selectVariant(
  product: Product,
  variantId?: number,
): ProductVariant {
  if (!product) {
    throw new Error("selectVariant: product is null or undefined");
  }

  const variants = product.variants;

  if (variants.length === 0) {
    throw new Error(`selectVariant: product ${product.id} has no variants`);
  }

  if (variantId != null) {
    const found = product.variants.find((v) => v.id === variantId);

    if (!!found) {
      return found;
    }
  }

  return getDefaultVariant(product);
}
