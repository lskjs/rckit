import { Dot } from '@rckit/icons';
import React, { SVGProps } from 'react';

type LoadingIconProps = SVGProps<SVGSVGElement> & {
  animate?: boolean;
};

export const LoadingIcon = ({
  // animate,
  ...props
}: LoadingIconProps) => (
  <span
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      width: '1em',
    }}
  >
    <Dot {...props} />
    <Dot {...props} />
    <Dot {...props} />
  </span>
);
