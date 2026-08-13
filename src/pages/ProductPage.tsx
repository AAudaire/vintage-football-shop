import { useProduct } from "../hooks/useProduct";
import type { ProductVariant } from "../types/productVariant";
import { selectVariant } from "../utils/variantHelper";

type ProductPageProps = {
  productId: number;
  variantId?: number;
};

export default function ProductPage({
  productId,
  variantId,
}: ProductPageProps) {
  const { product, isLoading, error } = useProduct(productId);

  if (isLoading) return <div>Chargement...</div>;
  if (error || !product) return <div>Produit introuvable</div>;

  let selectedVariant: ProductVariant;

  try {
    selectedVariant = selectVariant(product, variantId);
  } catch (err) {
    return <div>Produit introuvable</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-semibold">{product.name}</h1>
      <p className="text-sm text-gray-700">
        Variant: {selectedVariant.size} — {selectedVariant.condition} —{" "}
        {selectedVariant.price}€
      </p>
    </div>
  );
}
