import { Link } from "react-router-dom";
import type { ProductImage } from "../types/productImage";
import ProductCardImages from "./ProductCardImages";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    variantId: number;
    price: number;
    size: string;
    condition: string;
    images: ProductImage[];
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full w-full max-w-[15rem] flex-col overflow-hidden bg-transparent backdrop-blur-sm sm:max-w-[18rem]">
      <Link to={`/product/${product.id}?variantId=${product.variantId}`}>
        <ProductCardImages images={product.images} />
      </Link>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <Link to={`/product/${product.id}?variantId=${product.variantId}`}>
          <h3 className="mb-2 text-sm text-black sm:text-lg hover:text-gray-700 duration-200">
            {product.name}
          </h3>
        </Link>

        <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-gray-500 sm:text-[10px]">
          <span className="font-medium text-emerald-700">
            {product.condition}
          </span>
          <span className="text-gray-900">•</span>
          <span className="font-medium text-gray-900">{product.size}</span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="text-sm font-bold text-gray-900 sm:text-lg">
            {product.price}€
          </span>
          <button className="cursor-pointer rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-800 sm:px-4 sm:py-2 sm:text-sm">
            Ajouter
          </button>
        </div>
      </div>
    </article>
  );
}
