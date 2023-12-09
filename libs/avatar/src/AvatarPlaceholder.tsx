import { omit } from '@lsk4/algos';
import React from 'react';

import { AvatarProps, avatarProps, defaultAvatarColors } from './types';

export const AvatarPlaceholder = (props: AvatarProps) => {
  const height = props.height || props.size || 64;
  const width = props.width || props.size || 64;
  const alt = props.title || props.name || props.email;
  const round = props.round === false || true;
  const id = props.id || props._id || alt || Math.random().toString(36);

  const idNumber = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const colorId = idNumber % defaultAvatarColors.length;

  const color = defaultAvatarColors[colorId][0];
  const backgroundColor = defaultAvatarColors[colorId][1];
  const placeholder = (alt || '?')
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .toUpperCase()
    .split(' ')
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('');
  const fontSize = Math.floor(height / 2.5);
  let className = 'd-flex justify-content-center align-items-center';
  className += round ? ' rounded-circle' : '';
  const htmlProps = omit(props as any, avatarProps);
  const style = { ...(props.style || {}), width, height, fontSize, backgroundColor, color };
  //   console.log({ style });
  //   console.log({ placeholder, alt });
  return (
    <div className={className} {...htmlProps} style={style}>
      {placeholder}
    </div>
  );
};
