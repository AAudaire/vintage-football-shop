import { useNavigate, type NavigateFunction } from "react-router-dom";
import type { ProductCondition } from "../types/productCondition";
import type { ProductSize } from "../types/productSize";
import type { ProductVariant } from "../types/productVariant";

type ProductVariantSelectorProps = {
  selectedVariant: VariantItem;
  variants: VariantItem[];
  sizes: ProductSize[];
};

type VariantItem = {
  id: number;
  price: string;
  sizeId: number;
  condition: ProductCondition;
  stock: number;
};

export function MapVariantsProps(
  productVariants: ProductVariant[],
): VariantItem[] {
  return productVariants.map((variant) => ({
    id: variant.id,
    price: variant.price,
    sizeId: variant.sizeId,
    condition: variant.condition,
    stock: variant.stock,
  }));
}

function getVariantForSize(
  sizeId: number,
  variants: VariantItem[],
): VariantItem | undefined {
  const sizeVariants = variants
    .filter((variant) => variant.sizeId === sizeId)
    .sort((a, b) => a.condition.order - b.condition.order);

  return sizeVariants.find((variant) => variant.stock > 0) ?? sizeVariants[0];
}

export default function ProductVariantSelector({
  selectedVariant,
  variants,
  sizes,
}: ProductVariantSelectorProps) {
  const navigate = useNavigate();
  sizes = sizes.sort((a, b) => a.order - b.order);
  const selectedSizeVariants: VariantItem[] = variants
    .filter((variant) => variant.sizeId === selectedVariant.sizeId)
    .sort((a, b) => a.condition.order - b.condition.order);

  function handleSizeChange(sizeId: number): void {
    const variant = getVariantForSize(sizeId, variants);

    if (!variant) {
      return;
    }

    navigate(`?variantId=${variant.id}`, { replace: true });
  }

  return (
    <div className="space-y-6">
      {/* Taille */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-neutral-900">Taille</h4>
        </div>

        <div className="flex flex-wrap gap-2">
          {sizes.map((size) =>
            size.stock > 0 ? (
              <button
                key={size.id}
                type="button"
                onClick={() => handleSizeChange(size.id)}
                className={`cursor-pointer min-w-[3.5rem] rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                  size.id === selectedVariant.sizeId
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-900"
                }`}
              >
                {size.label}
              </button>
            ) : (
              <button
                key={size.id}
                type="button"
                onClick={() => handleSizeChange(size.id)}
                className={`relative overflow-hidden cursor-pointer min-w-[3.5rem] rounded-lg border px-4 py-2.5 text-sm font-medium
               after:absolute after:left-1/2 after:top-1/2 after:w-[140%] after:h-px
               after:bg-neutral-400
               after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-[-35deg]
               after:pointer-events-none
                ${
                  size.id === selectedVariant.sizeId
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-300 bg-neutral-100 text-neutral-400 hover:border-neutral-400 hover:bg-neutral-200 hover:text-neutral-500"
                }`}
              >
                {size.label}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Condition */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-neutral-900">État</h4>

        <div className="grid grid-cols-1 gap-2">
          {selectedSizeVariants.map((variant) =>
            variant.stock > 0 ? (
              <button
                key={variant.id}
                type="button"
                onClick={() => navigate(`?variantId=${variant.id}`)}
                className={`cursor-pointer flex items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors 
                  ${variant.id === selectedVariant.id ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-900"}`}
              >
                <span className="text-sm font-medium">
                  {variant.condition.label}
                </span>
                <span className="text-sm font-semibold">{variant.price}</span>
              </button>
            ) : (
              <button
                key={variant.id}
                type="button"
                onClick={() => navigate(`?variantId=${variant.id}`)}
                className={`cursor-pointer flex items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors
              ${
                variant.id === selectedVariant.id
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200 bg-neutral-100 text-neutral-400 hover:border-neutral-400 hover:bg-neutral-200"
              }`}
              >
                <span className="text-sm font-medium">
                  {variant.condition.label}
                </span>

                <span className="flex items-center gap-4">
                  <span className="rounded-md px-2 py-1 text-xs font-medium bg-neutral-700 text-neutral-200">
                    Épuisé
                  </span>
                  <span className="text-sm font-semibold">{variant.price}</span>
                </span>
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
