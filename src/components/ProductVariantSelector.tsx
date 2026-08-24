import { useState } from "react";
import type { ProductCondition } from "../types/productCondition";
import type { ProductSize } from "../types/productSize";
import type { ProductVariant } from "../types/productVariant";

type ProductVariantSelectorProps = {
  selectedVariant: VariantItem;
  variants: VariantItem[];
};

type VariantItem = {
  id: number;
  price: string;
  size: ProductSize;
  condition: ProductCondition;
  stock: number;
};

export function MapVariantsProps(productVariants: ProductVariant[]) {
  return productVariants.map((variant) => ({
    id: variant.id,
    price: variant.price,
    size: variant.size,
    condition: variant.condition,
    stock: variant.stock,
  }));
}

export default function ProductVariantSelector({
  selectedVariant,
  variants,
}: ProductVariantSelectorProps) {
  const sizes: ProductSize[] = [
    ...new Map(variants.map((v) => [v.size.id, v.size])).values(),
  ];
  const selectedSizeId: number = selectedVariant.size.id;
  const sameSizeVariants: VariantItem[] = variants.filter(
    (variant) => variant.size.id == selectedSizeId,
  );
  const conditions: {
    condition: ProductCondition;
    price: string;
  }[] = [
    ...new Map(
      sameSizeVariants.map((v) => [
        v.condition.id,
        { condition: v.condition, price: v.price },
      ]),
    ).values(),
  ];

  return (
    <div className="space-y-6">
      {/* Taille */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-neutral-900">Taille</h4>
        </div>

        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              id="{size.id}"
              type="button"
              className="min-w-[3.5rem] rounded-lg border border-neutral-900 bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-colors"
            >
              {size.label}
            </button>
          ))}

          <button
            type="button"
            className="min-w-[3.5rem] rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            S
          </button>

          <button
            type="button"
            className="min-w-[3.5rem] rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            M
          </button>

          <button
            type="button"
            className="min-w-[3.5rem] rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            L
          </button>
        </div>
      </div>

      {/* Condition */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-neutral-900">État</h4>

        <div className="grid grid-cols-1 gap-2">
          <button
            type="button"
            className="flex items-center justify-between rounded-lg border border-neutral-900 bg-neutral-50 px-4 py-3 text-left transition-colors"
          >
            <span className="text-sm font-medium text-neutral-900">
              Très bon état
            </span>
            <span className="text-sm font-semibold text-neutral-900">90€</span>
          </button>

          <button
            type="button"
            className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-4 py-3 text-left transition-colors hover:border-neutral-900"
          >
            <span className="text-sm font-medium text-neutral-700">
              Bon état
            </span>
            <span className="text-sm font-semibold text-neutral-900">75€</span>
          </button>
        </div>
      </div>
    </div>
  );
}
