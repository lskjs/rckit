import type { ColumnDef } from '@tanstack/react-table';
import React, { Dispatch, SetStateAction } from 'react';

export interface QueryParams {
  limit: number;
  filter?: {
    [key: string]: string | number | Array<number | null> | boolean;
  };
  search?: string;
  skip?: number;
  sort?: {
    id: string;
    desc: boolean;
  }[];
}

export type ITablePagination = (props: {
  pageCount: number;
  initialPage: number;
  onPageChange: ({ selected }: { selected: number }) => void;
}) => React.ReactElement;

export interface TableMessageProps {
  type?: 'empty' | 'loading';
  title?: string;
  subtitle?: string;
}
// увы не могу назвать типа TableMessage, так как он уже есть в components
export type ITableMessage = (props: TableMessageProps) => React.ReactElement;

export interface TableSearchProps {
  placeholder?: string;
  onChange: (value: string) => void;
  open: () => void;
  hasFilter?: boolean;
  search?: string;

  // NOTE: временно пока не придумаю другой паттерн
  isFetching?: boolean;
  showRefresh?: boolean;
  refresh: () => void;
}
export type ITableSearch = (props: TableSearchProps) => React.ReactElement;

export interface TableFilterProps<T = any> {
  value?: T;
  onSubmit: (value: T) => any;
}
export type ITableFilter = (props: TableFilterProps) => React.ReactElement;

export type TableColumnWidth = string | number | null;
export type TableColumn<TData, TValue> = ColumnDef<TData, TValue> & {
  width?: TableColumnWidth;
};

export interface TableProps {
  data?: {
    items?: Array<Record<string, unknown>>;
    pages?: Array<Record<string, unknown>>;
    count?: number;
  };
  query?: any;
  count?: number;
  limit?: number;
  isLoading: boolean;
  onChange: Dispatch<SetStateAction<QueryParams>>;
  initialState: QueryParams;
  enableMultiSort?: boolean;
  initialOpenFilter?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any[];
  search?: string;
  components?: {
    Pagination?: ITablePagination;
    Message?: ITableMessage;
    Search?: ITableSearch;
    Filter?: ITableFilter;
  };
  debug?: boolean;
}
