type ProductInfoProps = {
  name: string;
};

export default function ProductInfo({ name }: ProductInfoProps) {
  return (
    <>
      <header className="space-y-2">
        <h3 className="text-3xl font-medium tracking-tight text-neutral-900 leading-snug">
          {name}
        </h3>
      </header>

      {/* <div className="flex items-center">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
            stock > 0
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${stock > 0 ? "bg-emerald-500" : "bg-red-500"}`}
          />
          {stock > 0 ? "En stock" : "Rupture de stock"}
        </div>
      </div> */}
    </>
  );
}
