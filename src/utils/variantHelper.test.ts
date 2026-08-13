import { describe, it, expect } from "vitest";
import { getDefaultVariant, selectVariant } from "./variantHelper";
import type { Product } from "../types/product";

describe("getDefaultVariant", () => {
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

    expect(() => getDefaultVariant(product)).toThrow();
  });

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
          stock: 1,
          isDefault: false,
        },
        {
          id: 2,
          price: 90,
          size: "M",
          condition: "Parfait",
          images: [],
          stock: 1,
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
          stock: 1,
          isDefault: false,
        },
        {
          id: 2,
          price: 90,
          size: "M",
          condition: "Parfait",
          images: [],
          stock: 1,
          isDefault: false,
        },
      ],
    };

    const result = getDefaultVariant(product);

    expect(result).toEqual(product.variants[0]);
  });
});

describe("selectVariant", () => {
  it("throws when product is null", () => {
    expect(() => selectVariant(null as unknown as Product)).toThrow();
  });

  it("throws when product is undefined", () => {
    expect(() => selectVariant(undefined as unknown as Product)).toThrow();
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

    expect(() => selectVariant(product)).toThrow();
  });

  it("returns the variant with matching id", () => {
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
          stock: 1,
          isDefault: false,
        },
        {
          id: 2,
          price: 90,
          size: "M",
          condition: "Parfait",
          images: [],
          stock: 1,
          isDefault: true,
        },
      ],
    };

    const result = selectVariant(product, 2);

    expect(result).toEqual(product.variants[1]);
  });

  it("returns default variant when variant id is not found", () => {
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
          stock: 1,
          isDefault: false,
        },
        {
          id: 2,
          price: 90,
          size: "M",
          condition: "Parfait",
          images: [],
          stock: 1,
          isDefault: true,
        },
      ],
    };

    const result = selectVariant(product, 999);

    expect(result).toEqual(product.variants[1]);
  });

  it("returns default variant when id is not provided", () => {
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
          stock: 1,
          isDefault: false,
        },
        {
          id: 2,
          price: 90,
          size: "M",
          condition: "Parfait",
          images: [],
          stock: 1,
          isDefault: true,
        },
      ],
    };

    const result = selectVariant(product);

    expect(result).toEqual(product.variants[1]);
  });
});
