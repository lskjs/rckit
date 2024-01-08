import type { MenuItem } from '@rckit/breadcrumbs';
import { Image } from '@rckit/link';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NavbarItemWrap = ({ inner = false, style, children, ...props }: any) => (
  // if (1 === 1) {
  //   return children;
  // }
  <span
    style={{
      alignItems: 'center',
      // display: inner ? 'flex' : 'inline-flex',
      display: 'inline-flex',
      ...style,
      // border: `1px  ${inner ? 'green' : 'red'} dotted`,
    }}
    {...props}
  >
    {children}
  </span>
);

export const NavbarItem = ({
  icon,
  title,
  image,
  imageSize = 50,
}: MenuItem & { imageSize?: number }) => (
  <>
    <NavbarItemWrap
      style={{
        maxWidth: '100%',
        overflow: 'hidden',
      }}
      // style={{
      //   display: 'inline-flex',
      //   alignItems: 'center',
      //   justifyContent: 'center',

      //   gap: 8,
      // }}
    >
      {Boolean(icon) && (
        <NavbarItemWrap inner style={{ marginRight: 8 }}>
          {icon}
        </NavbarItemWrap>
      )}
      {Boolean(image) && (
        <NavbarItemWrap inner style={{ marginRight: 8, flexShrink: 0 }}>
          <Image
            // src={icon}
            src={image}
            style={{ width: imageSize, height: imageSize }}
            width={imageSize}
            height={imageSize}
            alt={title}
          />
        </NavbarItemWrap>
      )}
      {Boolean(title) && (
        <NavbarItemWrap
          inner
          style={{ marginRight: 2, textOverflow: 'ellipsis', overflow: 'hidden' }}
        >
          {title}
        </NavbarItemWrap>
      )}
    </NavbarItemWrap>
  </>
);
