import { Link } from '@rckit/link';
import React from 'react';

import { defaultDivider } from './defaultDivider.js';

export type BreadcrumbItemProps = React.PropsWithChildren<{
  href?: string;
  divider?: React.ReactNode;
  showDivider?: boolean;
}>;

export const BreadcrumbItem = ({
  href,
  children,
  divider = defaultDivider,
  showDivider = true,
}: BreadcrumbItemProps) => {
  const content = href ? <Link href={href}>{children}</Link> : children;
  return (
    <>
      <li className="breadcrumb-item2">
        {Boolean(showDivider) && divider}
        {content}
      </li>
    </>
  );
};
