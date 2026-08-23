import { useParams, useSearchParams, type Params } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import type { ProductVariant } from "../types/productVariant";
import { selectVariant } from "../utils/variantHelper";
import Loader from "../components/Loader";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";

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

  // return (
  //   <div className="mx-auto max-w-7xl px-4 py-8">
  //     <ProductGallery images={selectedVariant.images} />
  //     <ProductInfo name={product.name} price={selectedVariant.price} />
  //     {/* <ProductVariantSelector product={product} />
  //     <AddToCartButton variant={selectedVariant} />
  //     <ProductDescription product={product} /> */}
  //   </div>
  // );
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <ProductGallery images={selectedVariant.images} />
        <ProductInfo
          name={product.name}
          price={selectedVariant.price}
          stock={selectedVariant.stock}
        />
      </div>
    </div>
  );
}

function ProductNotFound() {
  return <div>Produit introuvable</div>;
}
