import React from 'react';

export type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  as: React.ElementType;
  src?: string;
  id?: string;
  _id?: string;
  title?: string;
  name?: string;
  email?: string;
  size?: number;
  height?: number;
  width?: number;
  round?: boolean;
};
export const avatarProps = [
  'src',
  'id',
  '_id',
  'title',
  'name',
  'email',
  'size',
  'height',
  'width',
  'round',
];

export const defaultAvatarColors = [
  ['#FF6633', '#FFB399'],
  ['#FF33FF', '#FFFF99'],
  ['#00B3E6', '#E6B333'],
  ['#3366E6', '#999966'],
  ['#99FF99', '#B399FF'],
];
