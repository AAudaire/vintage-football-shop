export default function Loader() {
  return (
    <div
      className="flex min-h-[200px] items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Chargement"
    >
      <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />
        <span className="text-sm font-medium text-gray-700">Chargement...</span>
      </div>
    </div>
  );
}
