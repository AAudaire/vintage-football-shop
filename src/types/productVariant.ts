import type { ProductImage } from "./productImage";

export type ProductVariant = {
    id: number;
    price: number;
    size: string;
    condition: string;
    images: ProductImage[];
    isDefault: boolean;
};
