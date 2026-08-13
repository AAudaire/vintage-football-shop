import { describe, it, expect } from "vitest";
import { mapProductToCardData } from "./productCardMapper";
import type { Product } from "../types/product";

const baseProduct: Omit<Product, "variants"> = {
  id: 1,
  name: "Vintage Jersey",
  description: "Retro football shirt",
  category: 10,
  images: [{ url: "https://example.com/jersey.jpg", alt: "Jersey" }],
};

describe("mapProductToCardData", () => {
  it("maps the product and variant value when he has one", () => {
    const product: Product = {
      ...baseProduct,
      variants: [
        {
          id: 101,
          price: 120,
          size: "M",
          condition: "Excellent",
          images: [],
          stock: 1,
          isDefault: true,
        },
      ],
    };

    const cardData = mapProductToCardData(product);

    expect(cardData).toEqual({
      id: product.id,
      name: product.name,
      price: 120,
      size: "M",
      condition: "Excellent",
      images: product.images,
    });
  });
});
