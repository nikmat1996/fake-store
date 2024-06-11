import AllProducts from "@/components/AllProducts";
import Search from "@/components/Search";
import { Product } from "@/lib/types";
import { Heading1 } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const getProducts = async () => {
    const URL = process.env.BASE_URL;
    try {
      const products = await fetch(URL + "/products").then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      });
      return products;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const products: Product[] = await getProducts();

  return (
    <main className="flex min-h-screen flex-col  gap-10 p-24">
      <Suspense>
        <Search placeholder="Search" />
      </Suspense>

      {products.length === 0 && <h2>Error fetching products.</h2>}
      <AllProducts products={products} query={query} currentPage={currentPage}/>
    </main>
  );
}
