import Link from "next/link";
import CartBadge from "./CartBadge";

const Header = () => {
  return (
    <header className="bg-white shadow-md max-w-5xl mx-auto">
      <nav className="container mx-auto p-5 flex items-center justify-between">
        <div className="text-xl font-semibold text-primary">
          <Link href='/'>
            Home
          </Link>
        </div>
        <div className="relative flex items-center">
          <Link href='/cart' className="flex items-center text-primary">
            <span className="mr-2">Cart</span>
            <CartBadge />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
