import { Refresh } from '@rckit/icons';
import React, { SVGProps } from 'react';

import { getSpinAnimationStyles } from '../utils/getSpinAnimationStyles';

type RefreshIconProps = SVGProps<SVGSVGElement> & {
  animate?: boolean;
};

export const RefreshIcon = ({ animate: isSpin, ...props }: RefreshIconProps) => (
  <Refresh style={getSpinAnimationStyles({ isSpin, isMirror: true })} {...props} />
);
