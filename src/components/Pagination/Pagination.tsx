import React from 'react';
import { usePagination, DOTS } from '../../hooks/usePagination';
import classNames from 'classnames';
import styles from './Pagination.module.css'; // Import the CSS module

import { PaginationProps } from './Pagination.types';

export default function Pagination(props: PaginationProps) {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className = '' } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    const totalPages = Math.ceil(totalCount / pageSize);

    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  return (
    <ul
      className={classNames(styles['pagination-container'], 'mx-auto p-3', {
        [className]: className,
      })}
    >
      <li
        className={classNames(styles['pagination-item'], styles.arrow, styles['arrow-left-one'], {
          disabled: currentPage === 1,
        })}
        onClick={() => onPageChange(1)}
      />
      <li
        className={classNames(styles['pagination-item'], styles.arrow, styles['arrow-left-two'], {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      />

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li className={styles['pagination-item']}>&#8230;</li>;
        }

        return (
          <li
            className={classNames(styles['pagination-item'], {
              [styles.selected]: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
            key={index}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classNames(styles['pagination-item'], styles.arrow, styles['arrow-right-one'], {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      />
      <li
        className={classNames(styles['pagination-item'], styles.arrow, styles['arrow-right-two'], {
          disabled: currentPage === lastPage,
        })}
        onClick={() => onPageChange(Math.ceil(totalCount / pageSize))}
      />
    </ul>
  );
}
