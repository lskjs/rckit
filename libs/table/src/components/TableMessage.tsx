import React from 'react';

import type { TableMessageProps } from '../types.js';
// import styles from './TableMessage.module.css';
const styles = {
  wrapper: 'rctbl_tablemessage__wrapper',
  title: 'rctbl_tablemessage__title',
  subtitle: 'rctbl_tablemessage__subtitle',
};

const defaultMessages = {
  default: {
    title: 'Unexpected error',
    subtitle: 'Something went wrong',
  },
  empty: {
    title: 'No matching results found',
    subtitle: 'Try adjusting your search or filter to find what you are looking for',
  },
  loading: {
    title: 'Loading...',
    subtitle: 'Please wait',
  },
};

export const TableMessage = (props: TableMessageProps) => {
  const type = props.type || 'default';
  const defaultMessage = defaultMessages[type] || {};
  const title = props.title || defaultMessage?.title || defaultMessages.default.title;
  const subtitle = props.subtitle || defaultMessage?.subtitle || defaultMessages.default.subtitle;
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};
