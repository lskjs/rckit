import 'bootstrap/dist/css/bootstrap.min.css';

import { AppSessionContext } from '@rckit/auth';
import { AppMenuConfig } from '@rckit/breadcrumbs';
import { Bot, Plus } from '@rckit/icons';
import { AppNavbar } from '@rckit/navbar';
import React from 'react';

const heizenberg =
  'Heizenberg-Heizenberg-Heizenberg-Heizenberg-Heizenberg-Heizenberg-Heizenberg-Heizenberg';
//  'https://picsum.photos/32/32'
const image = 'https://1.gravatar.com/userimage/22329978/9db05616feecdb0f41e9103fe8ffa075';

const menus = ({
  botId = 123,
  botTitle = 'The Bot',
  botAvatar = image,
  userName = 'Heizenberg',
  userAvatar = image,
} = {}) =>
  [
    {
      types: ['nav'],
      title: 'Bots',
      href: '/bots',
      icon: <Bot />,
      items: [
        {
          title: 'Bot 1',
          href: '/bots/6851660153',
        },
        {
          title: 'Bot 2',
          href: '/bots/6851660153',
        },
        {
          title: 'Bots list',
          href: '/bots',
        },
        {
          title: 'Create new bot',
          icon: <Plus />,
          href: '/bots/create',
        },
      ],
    },
    botId && {
      type: ['nav'],
      title: botTitle || 'TheBot',
      href: `/bots/${botId}`,
      image: botAvatar,
      items: [
        {
          title: `${botTitle}  Dialogs`,
          image,
          href: `/bots/${botId}/dialogs`,
        },
        {
          image,
          title: `${botTitle} Stats`,
          href: `/bots/${botId}/stats`,
        },
        {
          title: `${botTitle} Settings`,
          image,
          href: `/bots/${botId}/settings`,
          items: [
            {
              title: `${botTitle} Settings2`,
              image,
              href: `/bots/${botId}/settings2`,
            },
            {
              title: `${botTitle} Settings3`,
              href: `/bots/${botId}/settings3`,
            },
            {
              title: `${botTitle} Settings4`,
              href: `/bots/${botId}/settings4`,
            },
          ],
        },
      ],
    },
    {
      types: ['nav'],
      title: 'Cabinet',
      href: '/cabinet',
    },
    {
      types: ['nav'],
      title: 'Cabinet2',
      href: '/cabinet',
    },
    {
      types: ['admin'],
      title: 'Admin',
      href: '/admin',
      image,
    },
    {
      types: ['admin'],
      title: 'Admin',
      href: '/admin',
    },
    {
      types: ['admin'],
      title: 'Admin',
      href: '/admin',
      items: [
        {
          title: 'Admin Index',
          href: '/admin',
          hidden: true,
        },
        {
          title: 'Users',
          href: '/admin/users',
        },
        {
          title: 'Emails',
          href: '/admin/emails',
        },
        {
          title: 'Products',
          href: '/admin/products',
        },
        {
          title: 'Orders',
          href: '/admin/billing/orders',
        },
        {
          title: 'Transactions',
          href: '/admin/billing/transactions',
        },
      ],
    },
    userName && {
      type: ['admin'],
      title: userName,
      href: `/bots/${userName}`,
      image: userAvatar,
      items: [
        {
          title: `${botTitle}  Dialogs`,
          image,
          href: `/bots/${botId}/dialogs`,
        },
        {
          image,
          title: `${botTitle} Stats`,
          href: `/bots/${botId}/stats`,
        },
        {
          title: `${botTitle} Settings`,
          image,
          href: `/bots/${botId}/settings`,
          items: [
            {
              title: `${botTitle} Settings2`,
              image,
              href: `/bots/${botId}/settings2`,
            },
            {
              title: `${botTitle} Settings3`,
              href: `/bots/${botId}/settings3`,
            },
            {
              title: `${botTitle} Settings4`,
              href: `/bots/${botId}/settings4`,
            },
          ],
        },
      ],
    },
    {
      types: ['profile'],
      title: 'Profile',
      href: '/cabinet/profile',
    },
    {
      types: ['profile'],
      title: 'Settings',
      href: '/cabinet/settings',
    },
  ].filter(Boolean);

const session = {
  user: {
    id: 1,
    name: heizenberg, // 'John Smith',
    avatar: image,
    role: 'admin',
  },
};

const decorators = [
  (Story) => (
    <AppSessionContext.Provider value={{ session }}>
      <AppMenuConfig items={menus}>
        <Story />
      </AppMenuConfig>
    </AppSessionContext.Provider>
  ),
];

export default {
  title: 'rckit/navbar',
  component: AppNavbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators,
};

export const Default = {};

export const NonContaner = {
  args: {
    container: 0,
  },
};
