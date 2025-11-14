import { useState } from "react";

export const usePagination = (totalItems: number, itemsPerPage: number = 5) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const goToPage = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToNextPage = (): void => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  const goToPreviousPage = (): void => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const resetToFirstPage = (): void => {
    setCurrentPage(1);
  };

  const adjustPageAfterDeletion = (newTotalItems: number): void => {
    const newTotalPages = Math.ceil(newTotalItems / itemsPerPage);
    if (currentPage > newTotalPages && newTotalPages > 0) {
      setCurrentPage(newTotalPages);
    }
  };

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    resetToFirstPage,
    adjustPageAfterDeletion,
    canGoNext: currentPage < totalPages,
    canGoPrevious: currentPage > 1
  };
};