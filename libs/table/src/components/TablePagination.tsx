import { ArrowLeft, ArrowRight } from '@rckit/icons';
import clsx from 'clsx';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

// import styles from './TablePagination.module.css';
const styles = {
  container: 'rctbl_tablepagination__container',
  prev: 'rctbl_tablepagination__prev',
  next: 'rctbl_tablepagination__next',
  disabled: 'rctbl_tablepagination__disabled',
  page: 'rctbl_tablepagination__page',
  active: 'rctbl_tablepagination__active',
  break: 'rctbl_tablepagination__break',
};

interface PaginationProps {
  pageCount: number;
  onPageChange: ({ selected }: { selected: number }) => void;
  pageRangeDisplayed?: number;
  initialPage?: number;
  showLessPages?: boolean;
}

export const TablePagination = ({
  pageCount: _pageCount,
  onPageChange,
  pageRangeDisplayed = 4,
  initialPage,
  showLessPages = true,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage || 0);

  let total = _pageCount;
  if (showLessPages && total <= _pageCount) {
    total = currentPage + pageRangeDisplayed - 1;
  }
  if (currentPage < 2 && _pageCount > pageRangeDisplayed) {
    total = 5;
  }
  if (_pageCount < 5) {
    total = _pageCount;
  }
  const pageCount = total <= _pageCount ? total : _pageCount;

  const handlePageClick = useCallback(
    (page: number) => {
      onPageChange({ selected: page });
      setCurrentPage(page);
    },
    [onPageChange],
  );

  const pages = useMemo(() => {
    // eslint-disable-next-line no-shadow
    const pages = [];
    const leftSide = pageRangeDisplayed / 2;
    const rightSide = pageRangeDisplayed - leftSide;

    for (let i = 0; i < pageCount; i++) {
      const label = i + 1;
      let className = styles.page;
      if (i === currentPage) className += ` ${styles.active}`;

      if (
        i === 0 ||
        i === pageCount - 1 ||
        (i >= currentPage - leftSide && i <= currentPage + rightSide + 1)
      ) {
        pages.push(
          <button key={i} onClick={() => handlePageClick(i)} className={className}>
            {label}
          </button>,
        );
      } else if (
        (i < currentPage - leftSide && i === 1) ||
        (i > currentPage + rightSide && i === pageCount - 2)
      ) {
        const breakIdx = currentPage - (leftSide + rightSide);
        pages.push(
          <span key={i} onClick={() => handlePageClick(breakIdx)} className={styles.break}>
            ...
          </span>,
        );
      }
    }

    return pages;
  }, [currentPage, pageCount, pageRangeDisplayed]);

  useEffect(() => {
    setCurrentPage(initialPage || 0);
  }, [initialPage]);

  if (!_pageCount) return null;
  return (
    <div className={styles.container}>
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        className={clsx(styles.prev, { [styles.disabled]: currentPage === 0 })}
        disabled={currentPage === 0}
      >
        <ArrowLeft />
      </button>

      {pages}

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        className={clsx(styles.next, { [styles.disabled]: currentPage === pageCount - 1 })}
        disabled={currentPage === pageCount - 1}
      >
        <ArrowRight />
      </button>
    </div>
  );
};
