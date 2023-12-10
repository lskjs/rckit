import { flexRender, Row } from '@tanstack/react-table';
import React from 'react';

// import styles from './TBody.module.css';
const styles = {
  td: 'rctbl_tbody__td',
};

interface TBodyProps {
  rows: Row<Record<string, unknown>>[];
}

export const TBody = ({ rows }: TBodyProps) => (
  <tbody>
    {rows.map((row) => (
      <tr key={row.id}>
        {row.getVisibleCells().map((cell) => (
          <td key={cell.id} className={styles.td}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);
