import { getCoreRowModel, SortingState, useReactTable } from '@tanstack/react-table';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  ColGroup,
  TableMessage,
  TablePagination,
  TableSearch,
  TBody,
  THead,
} from './components/index.js';
import { LoadingIcon } from './icons/LoadingIcon.js';
import { normalizeSortParam } from './QueryListParams.js';
// import styles from './Table.module.css';
import { TableProps } from './types';
import { extractItems } from './utils/extractItems.js';

const styles = {
  wrapper: 'rctbl_root__wrapper',
  tableWrapper: 'rctbl_root__tableWrapper',
  // filterButton: 'rctbl_root__filterButton',
  filterButton: 'rctbl_tablesearch__filterButton',
};

// const isDefaultDebug = isDev && true;
const isDefaultDebug = false;
// console.log({ isDefaultDebug });
type MessageType = 'empty' | 'loading' | null;

const InfinityPagination = ({ isLoading, colSpan, onClick, children, ...props }: any) => (
  <tbody>
    <tr>
      <td colSpan={colSpan}>
        <div className="d-grid gap-2">
          <button className={styles.filterButton} disabled={isLoading} onClick={onClick} {...props}>
            {children}
          </button>
        </div>
      </td>
    </tr>
  </tbody>
);

export const Table = ({
  query,
  data: rawData,
  count: initCount,
  limit: initLimit,
  initialOpenFilter = false,
  enableMultiSort = true,
  onChange,
  columns,
  search,
  components,
  initialState = { limit: 10 },
  debug: isDebug = isDefaultDebug,
}: TableProps) => {
  const data = rawData || query?.data || [];
  const isFetching = query?.isFetching || false;
  const isInfinityQuery = Boolean(query?.fetchNextPage);
  let count: number = initCount || 0;
  let limit: number = initLimit || initialState.limit || 0;
  let items: any[] = [];

  // NOTE: жесть какая-то
  if (Array.isArray(data)) {
    items = data;
    if (!count) count = data.length;
    if (!limit) limit = data.length;
  } else if (data?.pages || data?.items) {
    const page0 = data?.pages?.[0] || data;
    items = extractItems(data) || [];
    if (!count) count = page0?.count || 0;
    // TODO: плохая эвристика
    if (!limit) limit = page0?.items?.length || 0;
  }
  const pageCount = limit ? Math.ceil(count / limit) : 0;

  const normalizedSort = normalizeSortParam(initialState.sort);
  const [sorting, setSorting] = useState<SortingState>(normalizedSort);
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
    enableMultiSort,
    debugTable: isDebug,
  });
  const { rows } = table.getRowModel();
  const isEmpty = rows.length === 0 && !isFetching;
  const isLoading = rows.length === 0 && isFetching;

  // eslint-disable-next-line no-nested-ternary
  const messageType = (isEmpty ? 'empty' : isLoading ? 'loading' : null) as MessageType;
  const Message = components?.Message || TableMessage;
  const Pagination = components?.Pagination || TablePagination;
  const colSpan = table.getHeaderGroups()[0].headers.length;

  const content = messageType ? (
    <Message type={messageType} />
  ) : (
    <>
      <div className={styles.tableWrapper}>
        <InfiniteScroll
          dataLength={rows.length}
          next={query?.fetchNextPage}
          hasMore={query?.hasNextPage}
          loader={<div />}
        >
          <table>
            <ColGroup columns={columns} />
            <THead headerGroups={table.getHeaderGroups()} onChange={onChange} />
            {query?.hasPreviousPage && (
              <InfinityPagination
                colSpan={colSpan}
                isLoading={isLoading}
                onClick={query?.fetchPreviousPage}
              >
                {/* <LoadingIcon /> */}
                {query?.isFetchingPreviousPage ? <LoadingIcon /> : 'Show prev'}
              </InfinityPagination>
            )}
            <TBody rows={rows} />
            {query?.hasNextPage && (
              <InfinityPagination
                colSpan={colSpan}
                isLoading={isLoading}
                onClick={query?.fetchNextPage}
              >
                {query?.isFetchingNextPage ? <LoadingIcon /> : 'Show next'}
              </InfinityPagination>
            )}
            {isDebug && (
              <thead>
                <ColGroup columns={columns} show />
              </thead>
            )}
          </table>
        </InfiniteScroll>
      </div>
      {!isInfinityQuery && (
        <Pagination
          pageCount={table.getPageCount()}
          initialPage={table.getState().pagination.pageIndex}
          onPageChange={({ selected }) => {
            onChange((prev) => ({ ...prev, offset: limit * selected }));
            table.setPageIndex(selected);
          }}
        />
      )}
      {isDebug && (
        <>
          {/* <div>
            Fetched {flatData.length} of {totalDBRowCount} Rows.
          </div>
          <div>
            <button onClick={() => rerender()}>Force Rerender</button>
          </div> */}
        </>
      )}
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
      {openFilter && Filter && <Filter onSubmit={onChange as any} />}
      {content}
    </div>
  );
};
