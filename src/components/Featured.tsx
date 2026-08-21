import ProductCard from "../components/ProductCard";
import { useFeaturedProducts } from "../hooks/useFeaturedProducts";

export default function Featured() {
  const { featuredProducts, isLoading, error } = useFeaturedProducts();
  if (isLoading) return <div>Chargement...</div>;
  if (
    error ||
    !featuredProducts ||
    !featuredProducts.productCards ||
    featuredProducts.productCards.length < 1
  )
    return <div>Aucun produit à la une</div>;

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
        {featuredProducts.productCards.map((productCard) => {
          return <ProductCard key={productCard.id} product={productCard} />;
        })}
      </div>
    </section>
  );
}
