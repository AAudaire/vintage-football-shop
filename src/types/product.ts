import type { ProductImage } from "./productImage"
import type { ProductVariant } from "./productVariant";

export type Product = {
    id: number,
    name: string,    
    description: string,
    category: number,
    images: ProductImage[];
    variants: ProductVariant[];
}

