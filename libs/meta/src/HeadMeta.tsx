import React from 'react';
import { useHeadMeta } from './useHeadMeta';

type HeadMetaProps = {
  title: string;
};

export const HeadMeta = ({ title }: HeadMetaProps) => {
  const metaElements = useHeadMeta({ title });
  return (
    <>
      {metaElements}
      {/* <title>{title}</title>
      <meta name="title" content={title} /> */}
    </>
  );
};
