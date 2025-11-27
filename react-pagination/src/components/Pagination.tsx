import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevious = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "1.5rem",
      }}
    >
      <button
        onClick={handlePrevious}
        disabled={isFirstPage}
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          backgroundColor: isFirstPage ? "#e5e7eb" : "#3b82f6",
          color: isFirstPage ? "#6b7280" : "white",
          cursor: isFirstPage ? "not-allowed" : "pointer",
          border: "none",
          fontWeight: "500",
        }}
      >
        Previous
      </button>
      <span style={{ color: "#374151" }}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={isLastPage}
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          backgroundColor: isLastPage ? "#e5e7eb" : "#3b82f6",
          color: isLastPage ? "#6b7280" : "white",
          cursor: isLastPage ? "not-allowed" : "pointer",
          border: "none",
          fontWeight: "500",
        }}
      >
        Next
      </button>
    </div>
  );
};
