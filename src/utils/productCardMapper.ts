import type { Product } from "../types/product";
import type { ProductCardData } from "../types/productCardData";
import { getDefaultVariant } from "./variantHelper";

export function mapProductToCardData(product: Product): ProductCardData {
  const defaultVariant = getDefaultVariant(product);

  return {
    id: product.id,
    name: product.name,
    variantId: defaultVariant.id,
    price: defaultVariant.price,
    size: defaultVariant.size,
    condition: defaultVariant.condition,
    images: product.images,
  };
}
