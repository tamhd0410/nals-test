import { memo } from 'react';

interface Props {
  currentPage: number;
  totalPages: number;
  onChangePage: (newPage: number) => void;
}

export const Pagination = memo(
  ({ currentPage, totalPages, onChangePage }: Props) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handlePreviousClick = () => {
      if (currentPage > 1) {
        onChangePage(currentPage - 1);
      }
    };

    const handleNextClick = () => {
      if (currentPage < totalPages) {
        onChangePage(currentPage + 1);
      }
    };

    const handleClick = (newPage: number) => {
      onChangePage(newPage);
    };

    return (
      <nav aria-label="navigation">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={handlePreviousClick}>
              Previous
            </button>
          </li>
          {pageNumbers.map((page) => (
            <li
              key={page}
              className={`page-item${currentPage === page ? ' active' : ''}`}
            >
              <button className="page-link" onClick={() => handleClick(page)}>
                {page}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link" onClick={handleNextClick}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  }
);
