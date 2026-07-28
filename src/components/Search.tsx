export default function Search() {
  return (
    <div className="hidden flex-1 justify-end px-2 md:flex lg:px-6">
      <label className="flex w-full max-w-[22rem] items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 transition hover:border-gray-300 hover:bg-gray-100">
        <svg
          className="h-4 w-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        <input
          type="text"
          placeholder="Rechercher un produit"
          className="w-full bg-transparent text-sm outline-none"
        />
      </label>
    </div>
  );
}
