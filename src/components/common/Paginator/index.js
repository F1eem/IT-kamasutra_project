import React, { useEffect, useState } from "react";
import {
  NavButton,
  WrapperNumbers,
  WrapperPageNumber,
  WrapperPaginator,
} from "./unit";

const Paginator = ({ setCurrentPage, pageSize, totalCount, currentPage }) => {
  const portionPageSize = 5;
  const [currentPortionNumber, setCurrentPortionNumber] = useState(1);
  const pageCount = Math.ceil(totalCount / pageSize);
  const portionPageCount = Math.ceil(pageCount / portionPageSize);
  const leftPortionPageNumber =
    (currentPortionNumber - 1) * portionPageSize + 1;
  const rightPortionPageNumber = currentPortionNumber * portionPageSize;
  let pageNumber = [];
  for (let p = 1; p <= pageCount; p++) {
    pageNumber.push(p);
  }
  return (
    <WrapperPaginator>
      <NavButton
        onClick={() => setCurrentPortionNumber(currentPortionNumber - 1)}
        disabled={currentPortionNumber === 1}
      >
        Prev
      </NavButton>
      <WrapperNumbers>
        {pageNumber.reduce((total, page) => {
          if (page >= leftPortionPageNumber && page <= rightPortionPageNumber) {
            total.push(
              <WrapperPageNumber
                active={page === currentPage}
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {page}
              </WrapperPageNumber>
            );
          }
          return total;
        }, [])}
      </WrapperNumbers>
      {currentPortionNumber < portionPageCount && (
        <NavButton
          onClick={() => setCurrentPortionNumber(currentPortionNumber + 1)}
        >
          Next
        </NavButton>
      )}
    </WrapperPaginator>
  );
};

export default Paginator;
