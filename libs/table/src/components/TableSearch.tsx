import { CrossCircle as ClearIcon, Filter, Search as SearchIcon } from '@rckit/icons';
import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { RefreshIcon } from '../icons/RefreshIcon.js';
import type { TableSearchProps } from '../types.js';
// import styles from './TableSearch.module.css';
const styles = {
  wrapper: 'rctbl_tablesearch__wrapper',
  innerWrapper: 'rctbl_tablesearch__innerWrapper',
  searchIcon: 'rctbl_tablesearch__searchIcon',
  input: 'rctbl_tablesearch__input',
  clearIcon: 'rctbl_tablesearch__clearIcon',
  filterButton: 'rctbl_tablesearch__filterButton',
};

export const TableSearch = ({
  placeholder = 'Search...',
  onChange,
  open,
  isFetching,
  showRefresh = true,
  refresh,
  hasFilter = false,
  search = '',
}: TableSearchProps) => {
  const [searchValue, setSearchValue] = useState(search);
  const debounced = useDebouncedCallback((value) => {
    if (onChange) onChange(value);
  }, 500);
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
        <input
          className={styles.input}
          placeholder={placeholder}
          value={searchValue}
          onChange={(e: any) => {
            // TODO: пофиксить тип
            setSearchValue(e.target.value);
            debounced(e.target.value);
          }}
        />
        {searchValue && (
          <div
            className={styles.clearIcon}
            onClick={() => {
              setSearchValue('');
              if (onChange) onChange('');
            }}
          >
            <ClearIcon />
          </div>
        )}
      </div>
      {hasFilter && (
        <button className={styles.filterButton} onClick={open}>
          <Filter />
        </button>
      )}
      {showRefresh && (
        <button className={styles.filterButton} onClick={refresh}>
          <RefreshIcon animate={isFetching} />
        </button>
      )}
    </div>
  );
};
