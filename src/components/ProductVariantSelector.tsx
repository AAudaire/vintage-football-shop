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
  ].sort((a, b) => a.order - b.order);
  const selectedSizeId: number = selectedVariant.size.id;
  const sizeOffers: VariantItem[] = variants
    .filter((variant) => variant.size.id === selectedSizeId)
    .sort((a, b) => a.condition.order - b.condition.order);

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
              key={size.id}
              type="button"
              className={`cursor-pointer min-w-[3.5rem] rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                size.id === selectedSizeId
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-900"
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-neutral-900">État</h4>

        <div className="grid grid-cols-1 gap-2">
          {sizeOffers.map((sizeOffer) =>
            sizeOffer.id === selectedVariant.id ? (
              <button
                key={sizeOffer.id}
                type="button"
                className="cursor-pointer flex items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors border-neutral-900 bg-neutral-50"
              >
                <span className="text-sm font-medium text-neutral-900">
                  {sizeOffer.condition.label}
                </span>
                <span className="text-sm font-semibold text-neutral-900">
                  {sizeOffer.price}
                </span>
              </button>
            ) : (
              <button
                key={sizeOffer.id}
                type="button"
                className="cursor-pointer flex items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors border-neutral-200 bg-white hover:border-neutral-900"
              >
                <span className="text-sm font-medium text-neutral-700">
                  {sizeOffer.condition.label}
                </span>
                <span className="text-sm font-semibold text-neutral-700">
                  {sizeOffer.price}
                </span>
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
