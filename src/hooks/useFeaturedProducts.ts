import { useCallback, useEffect, useState } from "react";
import type { FeaturedProducts } from "../types/featuredProducts";
import { getFeaturedProducts } from "../services/productService";

export function useFeaturedProducts(): {
  featuredProducts: FeaturedProducts | undefined;
  isLoading: boolean;
  error: Error | undefined;
} {
  const [featuredProducts, setFeaturedProducts] = useState<
    FeaturedProducts | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchFeaturedProducts = useCallback(async () => {
    setIsLoading(true);
    setError(undefined);
    try {
      const featuredProducts = await getFeaturedProducts();
      setFeaturedProducts(featuredProducts);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      setFeaturedProducts(undefined);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return { featuredProducts, isLoading, error };
}
