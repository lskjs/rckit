import 'bootstrap/dist/css/bootstrap.min.css';

import { AppNavbar as BaseAppNavbar } from '@rckit/navbar';
import React from 'react';

const AppNavbar = (props = {}) => <BaseAppNavbar {...props} />;
// const Component = Header;
// export default {
//   title: 'AppNavbar',
//   // component: Component,
//   component: Header,
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   parameters: {
//     // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
//     layout: 'fullscreen',
//   },
// };

// export const LoggedIn = {
//   args: {
//     user: {
//       name: 'Jane Doe',
//     },
//   },
// };

// export const LoggedOut = {};

// import { Header } from './Header';

export default {
  title: 'AppNavbar',
  component: AppNavbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const NonContaner = {
  args: {
    container: 0,
  },
};
export const Contaner = {
  args: {
    container: true,
  },
};

export const LoggedOut = {};
