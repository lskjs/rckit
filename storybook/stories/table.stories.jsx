import './table.css';

// import '@rckit/table/lib/index.css';
import { Dots, Plus } from '@rckit/icons';
import { Table } from '@rckit/table';
import React from 'react';

export default {
  title: 'rckit/table',
  tags: ['autodocs'],
  component: Table,
};

export const Example = {
  args: {
    variant: 'primary',
    icon: <Plus />,
    children: 'Add',
  },
};

export const Empty = {
  args: {},
};
