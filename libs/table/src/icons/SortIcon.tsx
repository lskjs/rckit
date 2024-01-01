import { ArrowDown, Dot } from '@rckit/icons';
import React, { SVGProps } from 'react';

export type SortIconValue = 1 | -1 | 'asc' | 'desc' | true | false;

const isAsc = (value?: SortIconValue) => value === 1 || String(value).toLowerCase() === 'asc';
const isDesc = (value?: SortIconValue) => value === -1 || String(value).toLowerCase() === 'desc';

type SortIconProps = SVGProps<SVGSVGElement> & {
  value?: SortIconValue;
  style?: React.CSSProperties;
};

/* eslint-disable no-nested-ternary */
export const SortIcon = ({ value, style = {}, ...props }: SortIconProps) => {
  const isArrow = isAsc(value) || isDesc(value);
  const rotate = isDesc(value) ? 'rotate(180deg)' : '';
  const arrowStyle = {
    position: 'absolute',
    ...style,
    transition: 'transform 0.3s ease-in-out, border-radius 0.3s ease-in-out',
    transform: isArrow ? `scale(1) ${rotate}` : 'scale(0)',
    borderRadius: isArrow ? '0%' : '50%',
  } as any; // TODO: убрать потом any
  const dotStyle = {
    position: 'absolute',
    ...style,
    fontSize: `${0.4}em`,
    transition: 'transform 0.3s ease-in-out, border-radius 0.3s ease-in-out',
    transform: isArrow ? 'scale(0)' : 'scale(1)',
    borderRadius: isArrow ? '50%' : '0%',
  } as any;

  return (
    <span
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '1em',
      }}
    >
      <ArrowDown style={arrowStyle} {...props} />
      <Dot style={dotStyle} {...props} />
    </span>
  );
};
