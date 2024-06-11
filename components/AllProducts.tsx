import React from 'react';
import { Product } from '@/lib/types';
import AddToCart from './AddToCart';

// Define the props interface
interface AllProductsProps {
  products: Product[];
  query: string;
  currentPage: number;
}

// Use the interface in the component
const AllProducts: React.FC<AllProductsProps> = ({ products, query, currentPage }) => {
  // Filter the products based on the query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      {filteredProducts.map((item) => (
        <div>
            <h1 key={item.id}>{item.title}</h1>
            <AddToCart product={item}/>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
