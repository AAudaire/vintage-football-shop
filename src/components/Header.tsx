import AccountWidget from "./AccountWidget";
import BrandLogo from "./BrandLogo";
import CartWidget from "./CartWidget";
import Search from "./Search";

export default function Header() {
  return (
    <header className="w-full backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <BrandLogo />
        <Search />

        <div className="flex items-center gap-2">
          <AccountWidget />
          <CartWidget />
        </div>
      </div>
    </header>
  );
}
