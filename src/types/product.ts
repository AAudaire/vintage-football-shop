import type { ProductImage } from "./productImage"

export type Product = {
    id: number,
    name: string,
    price: number
    description: string,
    images: ProductImage[];
    category: string
}
