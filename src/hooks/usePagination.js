import { useState } from "react";

export const usePagination = (items = [], itemsPerPage = 6) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  return { 
    currentItems, 
    pageCount, 
    handlePageClick, 
    currentPage 
  };
};