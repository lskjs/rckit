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
      display: 'inline-block',
      // paddingTop: 5,
      // paddingBottom: -5,
    }}
  >
    <span
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        // width: '1em',
        height: '1em',
        fontSize: '0.6em',
      }}
    >
      <Dot className="ld1" {...props} />
      <Dot className="ld2" {...props} />
      <Dot className="ld3" {...props} />
    </span>
  </span>
);
