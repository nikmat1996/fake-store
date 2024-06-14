import Link from "next/link";
import CartBadge from "./CartBadge";

const Header = () => {
  return (
    <nav className="space-x-4 mx-auto p-5 flex items-center">
      <Link href={'/'}>Home</Link>
      <div className="relative flex items-center">
        <Link href={'/cart'}>Cart</Link>
        <CartBadge />
      </div>
    </nav>
  );
}

export default Header