import React, { useContext } from 'react';

import { ComponentContext } from './ComponentProvider';

type ImageProps = React.HTMLProps<HTMLAnchorElement>;

export const Image = (props: ImageProps) => {
  const components = useContext(ComponentContext);
  const ImageComponent = components?.Image || 'img';
  return <ImageComponent {...props} />;
};
