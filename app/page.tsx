import AllProducts from "@/components/AllProducts";
import { CategoryFilter } from "@/components/CategoryFilter";
import PriceRange from "@/components/PriceRange";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Search from "@/components/Search";
import { SortFilter } from "@/components/SortFilter";
import StickyCart from "@/components/StickyCart";
import { Product } from "@/lib/types";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    category?: string;
    sort?: string;
    min?: string;
    max?: string;
  };
}) {
  const AllProductsProps = {
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    currentPage: Number(searchParams?.page) || 1,
    minPrice: Number(searchParams?.min) || 5,
    maxPrice: Number(searchParams?.max) || 1000,
    sort: searchParams?.sort || "",
  };

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
    <main className="flex min-h-screen flex-col w-full max-w-5xl mx-auto gap-10 pb-20 pt-10 px-5 bg-white items-center">
      <StickyCart />
      <Search placeholder="Search" />
      <div className="flex w-full gap-5 items-center mb-6 flex-col sm:flex-row">
        <CategoryFilter />
        <SortFilter />
        <PriceRange />
      </div>
      <AllProducts products={products} {...AllProductsProps} />
      <ScrollToTopButton />
    </main>
  );
}
