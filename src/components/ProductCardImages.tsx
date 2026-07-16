import type { ProductImage } from "../types/productImage";

type ProductCardImagesProps = {
  images: ProductImage[];
};

export default function ProductCardImages({ images }: ProductCardImagesProps) {
  if (!images || images.length === 0) {
    return null;
  }
  return (
    <div className="w-full max-w-[18rem] overflow-hidden">
      {images.length > 1 ? (
        <div className="group relative h-64 overflow-hidden rounded-t-2xl bg-gray-50">
          <img
            src={images[0].url}
            alt={images[0].alt}
            className="h-full w-full object-contain transition duration-300 group-hover:opacity-0"
          />
          <img
            src={images[1].url}
            alt={images[1].alt}
            className="absolute inset-0 h-full w-full object-contain opacity-0 transition duration-300 group-hover:opacity-100"
          />
        </div>
      ) : (
        <div className="flex h-64 items-center justify-center rounded-t-2xl bg-gray-50">
          <img
            src={images[0].url}
            alt={images[0].alt}
            className="h-full w-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
