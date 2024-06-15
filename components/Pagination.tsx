"use client"

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface PaginationProps {
  currentPage: number;
  itemsCount: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, itemsCount }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const itemsPerPage = 6;
  const totalPages = Math.ceil(itemsCount / itemsPerPage);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  if (totalPages <= 1) {
    return null; // Don't render the pagination if there's only one page
  }

  return (
    <div className="flex justify-center items-center mt-8 w-full">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 border rounded bg-white text-primary disabled:opacity-50 flex items-center"
      >
        <ChevronLeftIcon className="h-5 w-5" />
        <span className="sr-only">Previous</span>
      </button>

      <button
        onClick={() => handlePageChange(1)}
        className={`px-4 py-2 mx-1 border rounded ${currentPage === 1 ? 'bg-primary text-white' : 'bg-white text-primary'}`}
      >
        1
      </button>

      {currentPage > 2 && (
        <span className="px-4 py-2 mx-1 border border-transparent">...</span>
      )}

      {currentPage > 1 && currentPage < totalPages && (
        <button
          onClick={() => handlePageChange(currentPage)}
          className="px-4 py-2 mx-1 border rounded bg-primary text-white"
        >
          {currentPage}
        </button>
      )}

      {currentPage < totalPages - 1 && (
        <span className="px-4 py-2 mx-1 border border-transparent">...</span>
      )}

      <button
        onClick={() => handlePageChange(totalPages)}
        className={`px-4 py-2 mx-1 border rounded ${currentPage === totalPages ? 'bg-primary text-white' : 'bg-white text-primary'}`}
      >
        {totalPages}
      </button>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 border rounded bg-white text-primary disabled:opacity-50 flex items-center"
      >
        <ChevronRightIcon className="h-5 w-5" />
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Pagination;
