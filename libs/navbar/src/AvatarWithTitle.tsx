import { Avatar } from '@rckit/avatar';
import React from 'react';

export const AvatarWithTitle = ({ title, ...props }: any) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Avatar name={title} {...props} />
    <span className=" d-sm-inline mx-1">{title}</span>
  </div>
);
