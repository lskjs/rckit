import React, { useContext } from 'react';

import { ComponentContext } from './ComponentProvider';

type LinkProps = React.HTMLProps<HTMLAnchorElement>;

export const Link = (props: LinkProps) => {
  const components = useContext(ComponentContext);
  const LinkComponent = components?.Image || 'a';
  return <LinkComponent {...props} />;
};
