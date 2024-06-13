import React from 'react';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';

// Define the props interface
interface AllProductsProps {
  products: Product[];
  query: string;
  currentPage: number;
  category: string;
}

// Use the interface in the component
const AllProducts: React.FC<AllProductsProps> = ({ products, query, currentPage, category }) => {
  // Filter the products based on the query and category
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()) &&
    (category === 'all' || product.category.toLowerCase() === category.toLowerCase())
  );

  console.log(filteredProducts)

  return (
    <div className='grid gap-10 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {filteredProducts.map((item) => (
        <div key={item.id} className='flex'>
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
