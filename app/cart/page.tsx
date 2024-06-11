"use client"
import { useCartStore } from "@/lib/store";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);

  return (
    <main className="flex min-h-screen flex-col  p-24">
      {
        cart.map(item => <h1>{item.title}</h1>)
      }
    </main>
  );
}
