import React from 'react';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';

interface AllProductsProps {
  products: Product[];
  query: string;
  currentPage: number;
  category: string;
  sort: string;
  minPrice: number;
  maxPrice: number;
}

const AllProducts: React.FC<AllProductsProps> = (props) => {

  const { products, query, currentPage, category, sort, minPrice, maxPrice } = props;

  console.log(minPrice)
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()) &&
    (category === '' || category === 'all' || product.category.toLowerCase() === category.toLowerCase()) &&
    product.price >= minPrice && product.price <= maxPrice
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === 'asc') {
      return a.price - b.price;
    } else if (sort === 'desc') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className='grid gap-10 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {sortedProducts.map((item) => (
        <div key={item.id} className='flex'>
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
