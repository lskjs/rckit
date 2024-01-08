import { Avatar } from '@rckit/avatar';
import React from 'react';

import { NavbarItemWrap } from './NavbarItem';

export const NavbarProfileItem = ({ title, imageSize, ...props }: any) => (
  <NavbarItemWrap style={{ maxWidth: 240, overflow: 'hidden' }}>
    <NavbarItemWrap inner style={{ marginRight: 8, flexShrink: 0 }}>
      <Avatar name={title} {...props} size={imageSize} />
    </NavbarItemWrap>
    <NavbarItemWrap
      inner
      className="d-sm-inline"
      style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
    >
      {title}
    </NavbarItemWrap>
  </NavbarItemWrap>
);
