import AllProducts from "@/components/AllProducts";
import { CategoryFilter } from "@/components/CategoryFilter";
import Search from "@/components/Search";
import { SortFilter } from "@/components/SortFilter";
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
    category?: string;
    sort?: string;
  };
}) {

  const AllProductsProps = {
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    currentPage: Number(searchParams?.page) || 1,
    sort: searchParams?.sort || ""
  }

  const getProducts = async () => {
    const URL = process.env.BASE_URL;
    try {
      const products = await fetch(URL + "/products").then((res) => {
        if (!res.ok) {
          throw new Error("Network request failed");
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
    <main className="flex min-h-screen flex-col  gap-10 p-24 bg-white">
      <Suspense>
        <Search placeholder="Search" />
      </Suspense>
      <div className="flex gap-5">
        <CategoryFilter />
        <SortFilter />
      </div>
      {products.length === 0 && <h2>Error fetching products.</h2>}
      <AllProducts products={products} {...AllProductsProps} />
    </main>
  );
}
