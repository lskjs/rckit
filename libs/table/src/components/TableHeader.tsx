import { SortDirection } from '@tanstack/react-table';
import React, { ReactNode } from 'react';

import { SortIcon } from '../icons/SortIcon.js';
// import styles from './TableHeader.module.css';
const styles = { clickable: 'rctbl_tableheader__clickable' };

interface TableHeaderProps {
  enableSorting?: boolean;
  onClick: () => void;
  colSpan: number;
  title: ReactNode;
  sorting?: SortDirection | false;
}

export const TableHeader = ({
  colSpan,
  title,
  enableSorting = false,
  onClick,
  sorting,
}: TableHeaderProps) => (
  <th colSpan={colSpan} onClick={onClick}>
    <div className={enableSorting ? styles.clickable : ''}>
      {title}
      {/* <Debug json={{ sorting, enableSorting }} /> */}
      {enableSorting && <SortIcon value={sorting} />}
    </div>
  </th>
);
