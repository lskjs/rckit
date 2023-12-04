import React from 'react';

interface ZebraProps {
  as?: React.ElementType;
  children?: any;
  color?: string;
  border?: number;
  colors?: string[];
  padding?: number;
  height?: number;
  // background?: string;
}

export const Zebra = ({
  as: As = 'div',
  children,
  color = '#fcfcfc77',
  border = 2,
  colors = ['#fcfcfc77', '#eeeeee77'],
  padding,
  height,
  // background,
  ...other
}: ZebraProps) => (
  <As
    style={{
      background: `repeating-linear-gradient(45deg,${colors[0]},${colors[0]} 10px,${colors[1]} 0,${colors[1]} 20px)`,
      outline: border && color ? `${color} dashed ${border}px` : null,
      padding,
      maxHeight: height,
      ...other,
    }}
  >
    {/* <As
      style={{
        background,
      }}
    > */}
    {children}
    {/* </As> */}
  </As>
);
