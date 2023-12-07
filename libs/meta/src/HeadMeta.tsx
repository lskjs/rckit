import React from 'react';
import { useHeadMeta } from './useHeadMeta';

export const HeadMeta = ({ title }: { title: string }) => {
  const metaElements = useHeadMeta({ title });
  return (
    <>
      {metaElements}
      {/* <title>{title}</title>
      <meta name="title" content={title} /> */}
    </>
  );
};
