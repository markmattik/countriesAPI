import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <div>
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          style={{ fontWeight: currentPage === num ? 'bold' : 'normal' }}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
