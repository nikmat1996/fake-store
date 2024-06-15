import React from 'react';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

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

  const itemsPerPage = 6;

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

  const totalItems = sortedProducts.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

  return (
    <>
      <div className='grid gap-10 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {paginatedProducts.map((item) => (
          <div key={item.id} className='flex'>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} itemsCount={totalItems} />
    </>
  );
};

export default AllProducts;
