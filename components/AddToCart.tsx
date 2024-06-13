// @/components/AddToCart.tsx
"use client";

import { useCartStore } from "@/lib/store";
import { Product } from "@/lib/types";

interface AddToCartProps {
  product: Product;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
      <button className="m-6 box-border mt-auto bg-slate-600 text-white py-2 px-4 rounded-lg hover:bg-slate-700 focus:outline-none focus:bg-slate-700" onClick={() => addToCart(product)}>Add to cart</button>
  );
};

export default AddToCart;
