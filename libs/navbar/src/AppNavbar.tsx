import { useAppConfig, useAppUser } from '@rckit/auth';
import type { MenuItem } from '@rckit/breadcrumbs';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { AppNavbarDebug } from './AppNavbarDebug.js';
import { AppNavbarUser } from './AppNavbarUser.js';
import { NavbarMenu } from './NavbarMenu.js';

interface AppNavbarProps {
  logo?: React.ReactNode;
  menus: MenuItem[];
  container?: boolean;
  variant?: string;
  expand?: string;
  activeHref?: string;
  className?: string;
}

export const AppNavbar = ({
  logo = null,
  menus: initMenus,
  container = true,
  variant = 'dark',
  expand = 'lg',
  activeHref,
  className = '',
  ...props
}: AppNavbarProps) => {
  const config = useAppConfig() as any;
  const menus: MenuItem[] = initMenus || config?.menus || [];
  const menuItems = menus?.[0]?.items || [];
  const adminMenuItems = menus?.[1]?.items || [];

  const user = useAppUser();
  const Wrapper = container ? Container : React.Fragment;
  return (
    <Navbar bg={variant} variant={variant} expand={expand} className={className} {...props}>
      <Wrapper>
        <Navbar.Brand href="/">{logo || 'App Title'}</Navbar.Brand>
        <Navbar.Toggle aria-controls="app-navbar" />
        <Navbar.Collapse id="app-navbar">
          <Nav className="me-auto">
            <NavbarMenu variant={variant} items={menuItems} activeHref={activeHref} />
          </Nav>
          <Nav
            style={{
              display: 'flex',
            }}
          >
            <AppNavbarDebug />
            {user?.isAdmin && (
              <NavbarMenu variant={variant} items={adminMenuItems} activeHref={activeHref} />
            )}
            <AppNavbarUser variant={variant} />
          </Nav>
        </Navbar.Collapse>
      </Wrapper>
    </Navbar>
  );
};
