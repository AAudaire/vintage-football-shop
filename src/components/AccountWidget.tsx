export default function AccountWidget() {
  return (
    <button className="cursor-pointer rounded-full p-1 transition hover:opacity-80">
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM4 20a8 8 0 0116 0"
        />
      </svg>
    </button>
  );
}
