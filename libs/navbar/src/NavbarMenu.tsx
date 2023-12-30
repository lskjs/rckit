import type { MenuItem } from '@rckit/breadcrumbs';
import { isActive } from '@rckit/breadcrumbs';
import { Link } from '@rckit/link';
import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

interface NavbarMenuProps {
  variant?: string;
  items: MenuItem[];
  activeHref?: string;
}

export const NavbarMenu = ({ variant, items, activeHref }: NavbarMenuProps) => (
  <>
    {items.map((item, index) => {
      if (item.hidden) return null;
      return item.items ? (
        <NavDropdown
          key={index}
          title={item.title}
          id={`${item.title.toLowerCase()}-nav-dropdown`}
          active={item.active}
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
                {subitem.title}
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
      ) : (
        <Nav.Link key={index} href={item.href} active={isActive(item, activeHref)}>
          {item.title}
        </Nav.Link>
      );
    })}
  </>
);
