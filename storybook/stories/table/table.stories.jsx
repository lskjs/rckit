import './table.css';

import { Avatar } from '@rckit/avatar';
import { Table } from '@rckit/table';
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useItemIninityQuery, useItemQuery } from './fetchItems';
import { HumanDate } from './HumanDate';

const queryClient = new QueryClient();

const columns = [
  {
    accessorKey: 'id',
    width: 50,
    enableSorting: true,
    enableMultiSort: true,
  },
  {
    accessorKey: 'avatar',
    header: '',
    width: 40,
    cell: (info) => <Avatar size={32} src={info.getValue()} name={info.getValue()} />,
  },
  {
    accessorKey: 'name',
    width: 200,
    cell: (info) => {
      const data = info.row.original;
      const { firstName, lastName } = data;
      return [firstName, lastName].join(' ');
    },
  },
  {
    accessorKey: 'email',
  },
  {
    accessorKey: 'birthdate',
    width: 180,
    cell: (info) => <HumanDate date={info.getValue()} />,
    enableSorting: true,
    enableMultiSort: true,
  },
  {
    accessorKey: 'age',
    width: 60,
    enableSorting: true,
    enableMultiSort: true,
  },
  {
    accessorKey: 'gender',
    width: 80,
  },
  {
    accessorKey: 'subscription',
    width: 120,
    cell: (info) => String(info.getValue()).toUpperCase(),
  },
  {
    accessorKey: 'createdAt',
    width: 180,
    cell: (info) => <HumanDate date={info.getValue()} />,
    enableSorting: true,
    enableMultiSort: true,
  },
];

export default {
  title: 'rckit/table',
  tags: ['autodocs'],
  component: ({ queryParams: initQueryParams = {}, isInfinityQuery = false, ...props } = {}) => {
    const [queryParams, setQueryParams] = useState(initQueryParams);
    console.log('queryParams', queryParams);
    const query = isInfinityQuery ? useItemIninityQuery(queryParams) : useItemQuery(queryParams);
    return (
      // <Table query={query} onChange={setQueryParams} {...props} />
      <Table query={query} onChange={setQueryParams} {...props} />
    );
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export const Example = {
  args: {
    columns,
    queryParams: { limit: 10 },
  },
};
export const InfinityQuery = {
  args: {
    columns,
    isInfinityQuery: true,
  },
};
export const InfinityPage0 = {
  args: {
    columns,
    isInfinityQuery: true,
    queryParams: {
      limit: 10,
      offset: 5,
    },
  },
};
export const InfinityPage2 = {
  args: {
    columns,
    isInfinityQuery: true,
    queryParams: {
      limit: 10,
      offset: 20,
    },
  },
};
export const InfinityLastPage = {
  args: {
    columns,
    isInfinityQuery: true,
    queryParams: {
      limit: 10,
      offset: 90,
    },
  },
};
export const InfinityLastLastPage = {
  args: {
    columns,
    isInfinityQuery: true,
    queryParams: {
      limit: 10,
      offset: 89,
    },
  },
};

export const Limin20 = {
  args: {
    columns,
    queryParams: { limit: 20 },
  },
};
