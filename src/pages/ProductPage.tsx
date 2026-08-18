import { useParams, useSearchParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import type { ProductVariant } from "../types/productVariant";
import { selectVariant } from "../utils/variantHelper";

export default function ProductPage() {
  const params = useParams();
  const [searchParams] = useSearchParams();

  const productId: number = Number(params.productId);
  if (!productId) return <ProductNotFound />;
  const paramVariantId = searchParams.get("variantId");
  const variantId: number | undefined = paramVariantId
    ? Number(paramVariantId)
    : undefined;

  const { product, isLoading, error } = useProduct(productId);

  if (isLoading) return <div>Chargement...</div>;
  if (error || !product) return <ProductNotFound />;

  let selectedVariant: ProductVariant;

  try {
    selectedVariant = selectVariant(product, variantId);
  } catch (err) {
    return <ProductNotFound />;
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

function ProductNotFound() {
  return <div>Produit introuvable</div>;
}
