import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
          Vintage Football Shop
        </h1>
        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          Découvrez des pièces de collection uniques et authentiques.
        </p>
      </header>

      <section className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
