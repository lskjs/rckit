import React from 'react';

import { TableColumnWidth } from '../types';
// import styles from './ColGroup.module.css';
const styles = { col: 'rctbl_colgroup__col' };

interface Col {
  width?: TableColumnWidth;
}
interface ColGroupProps {
  columns?: Col[];
  show?: boolean;
}

const getWidthStyles = (columns: Col[]) => {
  const widths = columns.map(({ width }) => {
    if (typeof width === 'number') {
      return { width };
    }
    if (typeof width !== 'string') return { width: 'auto' };
    if (width.includes('px')) return { width };
    if (width.includes('fr')) return { flexGrow: Number(width.replace('fr', '')) };
    return { width };
  });
  return widths;
};
const toString = (a: any) =>
  Object.keys(a)
    .map((key) => `${key}: ${a[key]}`)
    .join('; ');

export const ColGroup = ({ columns = [], show = false }: ColGroupProps) => {
  if (!columns.length) return null;
  const widthStyles = getWidthStyles(columns);
  // NOTE: временно для отладки
  if (show) {
    return (
      <tr>
        {widthStyles.map((style, idx) => (
          <td key={idx}>{toString(style)}</td>
        ))}
      </tr>
    );
  }
  return (
    <colgroup>
      {widthStyles.map((style, idx) => (
        <col key={idx} className={styles.col} style={style} />
      ))}
    </colgroup>
  );
  // return (
  //   <colgroup>
  //     {widths.map((width, idx) => (
  //       <col key={idx} className={styles.col} width={width} />
  //     ))}
  //   </colgroup>
  // );
};
