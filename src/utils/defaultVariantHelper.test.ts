import { describe, it, expect } from "vitest";
import { getDefaultVariant } from "./defaultVariantHelper";
import type { Product } from "../types/product";

describe("getDefaultVariant", () => {
  it("returns the variant marked as default", () => {
    const product: Product = {
      id: 1,
      name: "Maillot",
      description: "Un maillot",
      category: 1,
      images: [],
      variants: [
        {
          id: 1,
          price: 80,
          size: "S",
          condition: "Très bon",
          images: [],
          isDefault: false,
        },
        {
          id: 2,
          price: 90,
          size: "M",
          condition: "Parfait",
          images: [],
          isDefault: true,
        },
      ],
    };

    const result = getDefaultVariant(product);

    expect(result).toEqual(product.variants[1]);
  });

  it("falls back to the first variant when no default is defined", () => {
    const product: Product = {
      id: 1,
      name: "Maillot",
      description: "Un maillot",
      category: 1,
      images: [],
      variants: [
        {
          id: 1,
          price: 80,
          size: "S",
          condition: "Très bon",
          images: [],
          isDefault: false,
        },
        {
          id: 2,
          price: 90,
          size: "M",
          condition: "Parfait",
          images: [],
          isDefault: false,
        },
      ],
    };

    const result = getDefaultVariant(product);

    expect(result).toEqual(product.variants[0]);
  });

  it("throws when product is null", () => {
    expect(() => getDefaultVariant(null as unknown as Product)).toThrow();
  });

  it("throws when product is undefined", () => {
    expect(() => getDefaultVariant(undefined as unknown as Product)).toThrow();
  });

  it("throws when product has no variants", () => {
    const product = {
      id: 1,
      name: "Maillot",
      description: "Un maillot",
      category: 1,
      images: [],
      variants: [],
    } as Product;

    const result = getDefaultVariant(product);

    expect(result).toBeUndefined();
  });
});
