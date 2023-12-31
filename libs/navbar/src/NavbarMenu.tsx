import type { MenuItem } from '@rckit/breadcrumbs';
import { isActive } from '@rckit/breadcrumbs';
import { Link } from '@rckit/link';
import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

import { NavbarItem } from './NavbarItem.js';

interface NavbarMenuProps {
  variant?: string;
  items: MenuItem[];
  activeHref?: string;
  imageSize?: number;
}

export const NavbarMenu = ({ variant, items, activeHref, imageSize }: NavbarMenuProps) => (
  <>
    {items
      .filter((i) => !i.hidden)
      .map((item, index) =>
        item.items ? (
          <NavDropdown
            key={index}
            title={<NavbarItem imageSize={imageSize} {...item} />}
            id={`${item.title.toLowerCase()}-nav-dropdown`}
            // active={item.active}
            active={isActive(item, activeHref)}
            menuVariant={variant}
          >
            {item.items?.map((subitem, i) => {
              if (subitem.hidden) return null;
              return (
                <NavDropdown.Item
                  as={Link}
                  key={i}
                  href={subitem.href}
                  active={isActive(subitem, activeHref)}
                >
                  <NavbarItem imageSize={imageSize} {...subitem} />
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        ) : (
          <Nav.Link key={index} href={item.href} active={isActive(item, activeHref)}>
            <NavbarItem imageSize={imageSize} {...item} />
          </Nav.Link>
        ),
      )}
  </>
);
