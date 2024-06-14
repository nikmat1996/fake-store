import React from 'react';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';

// Define the props interface
interface AllProductsProps {
  products: Product[];
  query: string;
  currentPage: number;
  category: string;
  sort: string;
}

// Use the interface in the component
const AllProducts: React.FC<AllProductsProps> = ({ products, query, currentPage, category, sort }) => {
  // Filter the products based on the query and category
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()) &&
    (category === '' || category === 'all' || product.category.toLowerCase() === category.toLowerCase())
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
