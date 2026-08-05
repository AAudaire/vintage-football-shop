import type { Product } from "../types/product";
import type { ProductCardData } from "../types/productCardData";
import { getDefaultVariant } from "./defaultVariantHelper";

export const defaultPrice = 0;
export const unknownConditionLabel = "—";
export function mapProductToCardData(product: Product): ProductCardData {
  const defaultVariant = getDefaultVariant(product);

  return {
    id: product.id,
    name: product.name,
    price: defaultVariant?.price ?? defaultPrice,
    condition: defaultVariant?.condition ?? unknownConditionLabel,
    images: product.images,
  };
}
