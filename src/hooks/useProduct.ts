import { useState, useEffect, useCallback } from "react";
import { getProductById } from "../services/productService";
import type { Product } from "../types/product";

export function useProduct(productId: number): {
  product: Product | undefined;
  isLoading: boolean;
  error: Error | undefined;
  refresh: () => Promise<void>;
} {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchProduct = useCallback(async () => {
    setIsLoading(true);
    setError(undefined);
    try {
      const product = await getProductById(productId);
      setProduct(product);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      setProduct(undefined);
    } finally {
      setIsLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return { product, isLoading, error, refresh: fetchProduct };
}
