import 'bootstrap/dist/css/bootstrap.min.css';

import { AppBreadcrumbs } from '@rckit/breadcrumbs';
import { IconButton } from '@rckit/button';
import { Cross, Dots, Pencil, Plus } from '@rckit/icons';
import React from 'react';
import { ButtonGroup, Dropdown } from 'react-bootstrap';

export default {
  title: 'rckit/breadcrumbs',
  tags: ['autodocs'],
  component: AppBreadcrumbs,
  // parameters: {
  //   layout: 'fullscreen',
  // },
};
const actions = (
  <>
    <IconButton variant="primary" icon={<Plus />}>
      Add
    </IconButton>
  </>
);
const actions2 = (
  <>
    <Dropdown>
      <ButtonGroup aria-label="Basic example">
        <IconButton autohide variant="primary" icon={<Plus />}>
          Add
        </IconButton>
        <IconButton autohide variant="warning" icon={<Pencil />} className="hide-mobile">
          Edit
        </IconButton>
        <IconButton autohide variant="danger" icon={<Cross />} className="hide-mobile">
          Delete
        </IconButton>
        <Dropdown.Toggle variant="outline-secondary">
          <Dots />
        </Dropdown.Toggle>
      </ButtonGroup>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">
          <Pencil />
          Edit
        </Dropdown.Item>
        <Dropdown.Item eventKey="2">
          <Cross />
          Delete
        </Dropdown.Item>
        {/* <Dropdown.Item eventKey="3">Something else here</Dropdown.Item> */}
        {/* <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  </>
);

export const Example = {
  args: {
    items: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'Library',
        href: '/library',
      },
      {
        title: 'Data',
        href: '/library/data',
      },
    ],
    actions: actions2,
  },
};

export const Item1 = {
  args: {
    items: [
      {
        title: 'Home',
        href: '/',
      },
    ],
    actions,
  },
};
export const Item2 = {
  args: {
    items: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'Library',
        href: '/library',
      },
    ],
    actions,
  },
};
export const Item3 = {
  args: {
    items: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'Library',
        href: '/library',
      },
      {
        title: 'Data',
        href: '/library/data',
      },
    ],
    actions: actions2,
  },
};
export const Item4 = {
  args: {
    items: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'Library',
        href: '/library',
      },
      {
        title: 'Data',
        href: '/library/data',
      },
      {
        title: 'Data 1',
        href: '/library/data/1',
      },
    ],
    actions: actions2,
  },
};
export const NonContaner = {
  args: {
    container: 0,
    items: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'Library',
        href: '/library',
      },
      {
        title: 'Data',
        href: '/library/data',
      },
      {
        title: 'Data 1',
        href: '/library/data/1',
      },
    ],
    actions: actions2,
  },
};

export const Empty = {};
export const EmptyWithActions = {
  args: {
    actions,
  },
};
