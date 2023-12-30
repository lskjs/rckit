import 'bootstrap/dist/css/bootstrap.min.css';

import { IconButton } from '@rckit/button';
import { Dots, Plus } from '@rckit/icons';
import React from 'react';

export default {
  title: 'rckit/button',
  tags: ['autodocs'],
  component: IconButton,
};

export const Example = {
  args: {
    variant: 'primary',
    icon: <Plus />,
    children: 'Add',
  },
};
export const Autohide = {
  args: {
    variant: 'primary',
    icon: <Plus />,
    children: 'Add',
    autohide: true,
  },
};

export const WithoutIcon = {
  args: {
    variant: 'primary',
    children: 'Add',
  },
};
export const WithoutText = {
  args: {
    variant: 'outline-primary',
    icon: <Dots />,
  },
};
