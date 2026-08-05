import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { mapProductToCardData } from "../utils/productCardMapper";

export default function Featured() {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      aria-labelledby="featured-heading"
    >
      <header className="mb-6 flex items-center justify-between">
        <h2
          id="featured-heading"
          className="text-2xl font-semibold text-gray-900"
        >
          À la une
        </h2>
        <a href="/catalog" className="text-sm text-gray-600 hover:underline">
          Voir tout
        </a>
      </header>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={mapProductToCardData(product)}
            />
          );
        })}
      </div>
    </section>
  );
}
