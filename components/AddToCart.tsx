"use client";

import { useCartStore } from "@/lib/store";
import { Product } from "@/lib/types";
import { twMerge } from "tailwind-merge";

interface AddToCartProps {
  product: Product;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCartStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
  }));

  const isInCart = cart.some((item) => item.id === product.id);

  const handleButtonClick = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <button
      className={twMerge(
        "m-6 mt-auto py-2 px-4 rounded-lg focus:outline-none capitalize ",
        isInCart ? "bg-green-600 hover:bg-green-700 focus:bg-green-700 text-white" : "bg-slate-600 hover:bg-slate-700 focus:bg-slate-700 text-white"
      )}
      onClick={handleButtonClick}
    >
      {isInCart ? "Remove from cart" : "Add to cart"}
    </button>
  );
};

export default AddToCart;
