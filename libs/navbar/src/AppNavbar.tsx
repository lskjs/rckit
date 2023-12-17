import { useAppUser } from '@rckit/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { AppNavbarDebug } from './AppNavbarDebug.js';
import { AppNavbarUser } from './AppNavbarUser.js';
import { NavbarMenu } from './NavbarMenu.js';
import { NavbarMenuItem } from './types.js';

interface AppNavbarProps {
  logo?: React.ReactNode;
  menuItems: NavbarMenuItem[];
  adminMenuItems: NavbarMenuItem[];
  variant?: string;
  expand?: string;
  activeHref?: string;
  className?: string;
}

export const AppNavbar = ({
  logo = null,
  menuItems = [],
  adminMenuItems = [],
  variant = 'dark',
  expand = 'lg',
  activeHref,
  className = '',
  ...props
}: AppNavbarProps) => {
  const user = useAppUser();
  return (
    <Navbar bg={variant} variant={variant} expand={expand} className={className} {...props}>
      <Container>
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
      </Container>
    </Navbar>
  );
};
