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
    <article className="flex h-full w-full max-w-[15rem] flex-col overflow-hidden bg-transparent backdrop-blur-sm sm:max-w-[18rem]">
      <ProductCardImages images={product.images} />
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <h3 className="mb-2 text-sm text-gray-900 sm:text-lg">
          {product.name}
        </h3>
        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="text-sm font-bold text-gray-900 sm:text-lg">
            {product.price}€
          </span>
          <button className="rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-800 sm:px-4 sm:py-2 sm:text-sm">
            Ajouter
          </button>
        </div>
      </div>
    </article>
  );
}
