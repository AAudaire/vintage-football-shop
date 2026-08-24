type ProductDescriptionProps = {
  description: string;
};

export default function ProductDescription({
  description,
}: ProductDescriptionProps) {
  return (
    <div className="text-base leading-relaxed text-neutral-600">
      {description}
    </div>
  );
}
