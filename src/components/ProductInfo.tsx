type ProductInfoProps = {
  name: string;
  price: string;
  stock: number;
};

export default function ProductInfo({ name, price, stock }: ProductInfoProps) {
  return (
    <section className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-8">
      <header className="space-y-2">
        <h3 className="text-3xl font-medium tracking-tight text-neutral-900 leading-snug">
          {name}
        </h3>
      </header>

      <div className="text-2xl font-semibold tracking-tight text-neutral-900">
        {price}
      </div>

      <div className="flex items-center">
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
      </div>
    </section>
  );
}
