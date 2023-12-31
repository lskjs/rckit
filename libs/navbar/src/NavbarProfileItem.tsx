import { Avatar } from '@rckit/avatar';
import React from 'react';

import { NavbarItemWrap } from './NavbarItem';

export const NavbarProfileItem = ({ title, imageSize, ...props }: any) => (
  <NavbarItemWrap>
    <NavbarItemWrap inner style={{ marginRight: 8 }}>
      <Avatar name={title} {...props} size={imageSize} />
    </NavbarItemWrap>
    <NavbarItemWrap inner className="d-sm-inline">
      {title}
    </NavbarItemWrap>
  </NavbarItemWrap>
);
