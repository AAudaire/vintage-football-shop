import { Link } from "react-router-dom";

export default function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <Link
        to={`/`}
        className="cursor-pointer rounded-full p-1 transition hover:opacity-80"
      >
        <img
          src="/vintage-football-shop-logo.png"
          alt="Vintage Football Shop"
          className="h-30 w-auto"
        />
      </Link>
    </div>
  );
}
