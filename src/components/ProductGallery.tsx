import { useState } from "react";
import type { ProductImage } from "../types/productImage";

type ProductGalleryProps = {
  images: ProductImage[];
};

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const selectedImage = images[selectedIndex];

  return (
    <div className="w-full lg:flex lg:items-start lg:gap-6">
      {/* Thumbnails - vertical on large, hidden on mobile */}
      <div className="hidden lg:flex lg:flex-col lg:gap-3">
        {images.map((image, index) => (
          <button
            key={`${image.url}-${index}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Afficher l'image ${index + 1}`}
            aria-pressed={index === selectedIndex}
            className={`overflow-hidden rounded-lg transition-all w-20 h-20 flex-shrink-0 ${
              index === selectedIndex
                ? "ring-2 ring-neutral-900/10 border border-neutral-900/5"
                : "border border-neutral-200 hover:border-neutral-300"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              loading="lazy"
              draggable={false}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 flex">
        <img
          src={selectedImage.url}
          alt={selectedImage.alt}
          loading="eager"
          draggable={false}
          className="w-full h-auto object-contain drop-shadow-sm"
        />
      </div>

      {/* Thumbnails - horizontal on mobile */}
      <div className="mt-3 flex gap-3 lg:hidden overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={`${image.url}-m-${index}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Afficher l'image ${index + 1}`}
            aria-pressed={index === selectedIndex}
            className={`flex-none overflow-hidden rounded-lg w-24 h-24 ${
              index === selectedIndex
                ? "ring-2 ring-neutral-900/10 border border-neutral-900/5"
                : "border border-neutral-200 hover:border-neutral-300"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              loading="lazy"
              draggable={false}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
