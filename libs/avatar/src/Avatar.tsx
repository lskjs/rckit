import { omit } from '@lsk4/algos';
import { Image } from '@rckit/link';
import React from 'react';

import { AvatarPlaceholder } from './AvatarPlaceholder';
import { AvatarProps, avatarProps } from './types';

export const Avatar = (props: AvatarProps) => {
  if (!props.src) return <AvatarPlaceholder {...props} />;

  const { src } = props;
  const height = props.height || props.size || 64;
  const width = props.width || props.size || 64;
  const alt = props.title || props.name || props.email || '?';
  const round = props.round === false || true;
  const htmlProps = omit(props as any, avatarProps);

  // @ts-ignore
  console.log({ Image });
  return (
    <div
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        position: 'relative',
        height,
        width,
      }}
    >
      <AvatarPlaceholder style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} {...props} />
      <Image
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={round ? 'rounded-circle' : ''}
        {...htmlProps}
        // onLoad={(e) => {
        //   console.log(e);
        //   setIsLoaded(true);
        // }}
        // onError={(e) => {
        //   e.currentTarget.onerror = null;
        //   e.currentTarget.src = '';
        // }}
      />
    </div>
  );
};
