"use client"
import { useCartStore } from '@/lib/store'

const CartBadge = () => {
  const cart = useCartStore((state) => state.cart);

  if (cart.length === 0) {
    return null;
  }

  return (
    <span className="ml-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
      {cart.length}
    </span>
  );
};

export default CartBadge