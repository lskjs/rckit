import React, { useContext } from 'react';

import { ComponentContext } from './ComponentProvider';

type ImageProps = React.HTMLProps<HTMLAnchorElement>;

export const Image = (props: ImageProps) => {
  const { Image: ImageComponent } = useContext(ComponentContext) || 'img';
  return <ImageComponent {...props} />;
};
