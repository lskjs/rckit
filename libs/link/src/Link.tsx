import React, { useContext } from 'react';

import { ComponentContext } from './ComponentProvider';

type LinkProps = React.HTMLProps<HTMLAnchorElement>;

export const Link = (props: LinkProps) => {
  const { Link: LinkComponent } = useContext(ComponentContext) || 'img';
  return <LinkComponent {...props} />;
};
