import type { ProductImage } from "../types/productImage";
import ProductCardImages from "./ProductCardImages";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    price: number;
    images: ProductImage[];
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="w-full max-w-[18rem] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <ProductCardImages images={product.images} />
      <div className="p-5">
        <h3 className="mb-2 text-lg text-gray-900">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            {product.price}€
          </span>
          <button className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Ajouter
          </button>
        </div>
      </div>
    </article>
  );
}
