type ProductPageProps = {
  productId: number;
  variantId?: number;
};

export default function ProductPage({
  productId,
  variantId,
}: ProductPageProps) {
  const product = useProduct(productId);
  const selectedVariant = variantId
    ? product?.variants.find((v) => v.id === variantId)
    : product?.variants.find((v) => v.isDefault);
  return "this is productpage of product";
}
