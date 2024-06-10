import Search from "@/components/Search";
import { Product } from "@/lib/types";
import { Heading1 } from "lucide-react";
import Image from "next/image";

export default async function Home() {

  const getProducts = async () => {
    const URL = process.env.BASE_URL
    try {
      const products = await fetch(URL+'/products').then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      return products
    } catch (error) {
      console.error(error)
      return []
    }
  }

  const products: Product[] = await getProducts()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Search placeholder="Search"/>
      {products.length === 0 && <h2>Error fetching products.</h2>}
      {products.map(prod => <h1 key={prod.id}>{prod.title}</h1>)}
    </main>
  );
}
