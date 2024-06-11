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
    <div>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

export default AddToCart;
