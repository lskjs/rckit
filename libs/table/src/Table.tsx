// @ts-nocheck

import { isDev } from '@lsk4/env';
import { getCoreRowModel, SortingState, useReactTable } from '@tanstack/react-table';
import React, { useEffect, useState } from 'react';

import {
  ColGroup,
  TableMessage,
  TablePagination,
  TableSearch,
  TBody,
  THead,
} from './components/index.js';
// import styles from './Table.module.css';
import { TableProps } from './types';
import { flatPages } from './utils/flatPages';

const styles = {
  wrapper: 'rctbl_root__wrapper',
  tableWrapper: 'rctbl_root__tableWrapper',
  filterButton: 'rctbl_root__filterButton',
};

const isDebug = isDev && false;

export const Table = ({
  query,
  data,
  count,
  initialOpenFilter = false,
  onChange,
  columns,
  search,
  components,
  initialState = {},
}: TableProps) => {
  // if (!data && query)  {
  //   const { data: raw, isFetching, error, status, refetch } = query

  // }
  const isFetching = query?.isFetching || false;
  const isInfinityQuery = Boolean(query?.data?.pages);
  let items: any[] = [];
  if (!data && query) {
    // eslint-disable-next-line no-nested-ternary, no-param-reassign
    items = (isInfinityQuery ? flatPages(query?.data?.pages) : []) || [];
  }
  let pageCount = 0;
  if (!count && query) {
    // eslint-disable-next-line no-nested-ternary, no-param-reassign
    count = 8999;
    pageCount = data?.count ? Math.ceil(data.count / initialState.limit) : 0;
    // count = isInfinityQuery ? query?.data?.pageCount : query?.data?.length;
  }

  const [sorting, setSorting] = useState<SortingState>(initialState.sort || []);
  const [openFilter, setOpenFilter] = useState<boolean>(initialOpenFilter);
  const table = useReactTable({
    data: items.map((item) => item) ?? [],
    columns,
    pageCount,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    enableSortingRemoval: false,
    manualPagination: true,
  });
  const { rows } = table.getRowModel();
  const isEmpty = rows.length === 0 && !isFetching;
  const isLoading = rows.length === 0 && isFetching;

  // eslint-disable-next-line no-nested-ternary
  const messageType = (isEmpty ? 'empty' : isLoading ? 'loading' : null) as
    | 'empty'
    | 'loading'
    | null;
  const Message = components?.Message || TableMessage;
  const Pagination = components?.Pagination || TablePagination;
  const content = messageType ? (
    <Message type={messageType} />
  ) : (
    <>
      <div className={styles.tableWrapper}>
        <table>
          <ColGroup columns={columns} />
          <THead headerGroups={table.getHeaderGroups()} onChange={onChange} />
          <TBody rows={rows} />
          {isDebug && (
            <thead>
              <ColGroup columns={columns} show />
            </thead>
          )}
        </table>
      </div>
      <Pagination
        pageCount={table.getPageCount()}
        initialPage={table.getState().pagination.pageIndex}
        onPageChange={({ selected }) => {
          onChange((prev) => ({ ...prev, skip: initialState.limit * selected }));
          table.setPageIndex(selected);
        }}
      />
    </>
  );

  const Search = components?.Search || TableSearch;

  useEffect(() => {
    table.setPageIndex(0);
  }, [initialState.filter, initialState.search]);

  const Filter = components?.Filter;

  return (
    <div className={styles.wrapper}>
      <Search
        search={search}
        hasFilter={!!Filter}
        open={() => setOpenFilter(!openFilter)}
        showRefresh={true}
        isFetching={isFetching}
        refresh={() => {
          query.refetch();
          // onChange((prev) => ({
          //   ...prev,
          //   search: value,
          //   skip: 0,
          // }));
        }}
        onChange={(value) => {
          onChange((prev) => ({
            ...prev,
            search: value,
            skip: 0,
          }));
        }}
      />
      {/* {hasFilter && (
          <button className={styles.filterButton} onClick={open}>
            <Filter />
          </button>
        )}
      </Search> */}
      {openFilter && Filter && <Filter onSubmit={onChange} />}
      {content}
    </div>
  );
};
