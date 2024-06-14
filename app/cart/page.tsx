"use client"
import { useCartStore } from "@/lib/store";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <main className="flex min-h-screen flex-col p-24">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
          <p className="text-gray-500">Browse our products and add items to your cart.</p>
        </div>
      ) : (
        <Table>
          <TableCaption>A list of items in your cart.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img src={item.image} alt={item.title} className="h-16 w-16 object-cover" />
                </TableCell>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                <Separator />
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell className="text-right">${totalPrice.toFixed(2)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </main>
  );
}
