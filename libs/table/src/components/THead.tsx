import { flexRender, HeaderGroup } from '@tanstack/react-table';
import React, { Dispatch, SetStateAction } from 'react';

import { packSortParam, QueryListParams } from '../QueryListParams.js';
import { TableHeader } from './TableHeader.js';

interface THeadProps {
  headerGroups: HeaderGroup<Record<string, unknown>>[];
  onChange: Dispatch<SetStateAction<QueryListParams>>;
}

export const THead = ({ headerGroups, onChange }: THeadProps) => (
  <thead>
    {headerGroups.map((headerGroup) => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map((header) => {
          const { enableSorting } = header.column.columnDef;
          const sorting = header.column.getIsSorted();
          return (
            <TableHeader
              key={header.id}
              enableSorting={enableSorting}
              colSpan={header.colSpan}
              title={flexRender(header.column.columnDef.header, header.getContext())}
              sorting={sorting}
              onClick={() => {
                if (enableSorting) {
                  header.column.toggleSorting();
                  const desc = sorting !== 'desc';
                  const sort = packSortParam([{ id: header.column.id, desc }]);
                  onChange((prev) => ({
                    ...prev,
                    sort,
                  }));
                }
              }}
            />
          );
        })}
      </tr>
    ))}
  </thead>
);
