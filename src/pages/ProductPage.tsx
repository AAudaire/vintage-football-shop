import { useParams, useSearchParams, type Params } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import type { ProductVariant } from "../types/productVariant";
import { selectVariant } from "../utils/variantHelper";
import Loader from "../components/Loader";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductDescription from "../components/ProductDescription";
import ProductVariantSelector, {
  MapVariantsProps,
} from "../components/ProductVariantSelector";

export default function ProductPage() {
  const params: Readonly<Params<string>> = useParams();
  const [searchParams] = useSearchParams();

  const productId: number = Number(params.productId);
  if (!productId) return <ProductNotFound />;
  const paramVariantId: string | null = searchParams.get("variantId");
  const variantId: number | undefined = paramVariantId
    ? Number(paramVariantId)
    : undefined;

  const { product, isLoading, error } = useProduct(productId);

  if (isLoading) return <Loader />;
  if (error || !product) return <ProductNotFound />;

  let selectedVariant: ProductVariant;

  try {
    selectedVariant = selectVariant(product, variantId);
  } catch (err) {
    return <ProductNotFound />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <section className="lg:col-span-7">
          <ProductGallery images={selectedVariant.images} />
        </section>
        <section className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-8">
          <ProductInfo name={product.name} />
          <ProductVariantSelector
            selectedVariant={selectedVariant}
            variants={MapVariantsProps(product.variants)}
          />
          {/* <AddToCartButton variant={selectedVariant} /> */}
          <ProductDescription description={product.description} />
        </section>
      </div>
    </div>
  );
}

function ProductNotFound() {
  return <div>Produit introuvable</div>;
}
