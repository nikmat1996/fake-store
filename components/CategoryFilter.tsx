"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export function CategoryFilter() {

    const [categories, setCategories] = useState([]);
    const searchParams = useSearchParams();
    const pathname = usePathname();
  const { replace } = useRouter();
    

 const getCategories = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    if (!res.ok) {
      console.log("categories not loaded");
      return [];
    }
    return await res.json()

 }

 useEffect(() => {
    getCategories().then(res => setCategories(res))
 }, [])

 const handleChange = (val: string) => {
    const params = new URLSearchParams(searchParams);
    if (val) {
      params.set('category', val);
    } else {
      params.delete('category');
    }
    replace(`${pathname}?${params.toString()}`);
 }

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem className="capitalize" value={"all"}>All</SelectItem>
          {categories.map((item: string) =>  <SelectItem className="capitalize" value={item}>{item}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
