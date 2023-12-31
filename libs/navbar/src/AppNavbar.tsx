import { useAppUser } from '@rckit/auth';
import { type MenuItem, useAppMenuConfig } from '@rckit/breadcrumbs';
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
  imageSize?: number;
  avatarSize?: number;
  ctx?: any;
}

export const AppNavbar = ({
  logo = null,
  // menus: initMenus,
  imageSize = 16,
  avatarSize = 24,
  container = true,
  variant = 'dark',
  expand = 'lg',
  activeHref,
  className = '',
  ...props
}: AppNavbarProps) => {
  const { navItems, adminItems } = useAppMenuConfig();
  const user = useAppUser();
  const Wrapper = container ? Container : React.Fragment;
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
  .navbar-nav {
    // align-items: center;
    // align-items: stretch;
    // border: 1px blue dotted;
    align-items: center;
    display: flex;
  }

  @media (max-width: 991px) {
    .navbar-nav {
      align-items: stretch;
    }
  }
  @media (min-width: 992px) {
    .navbar-nav {
      align-items: center;
    }
  }
    
  .nav-link, .nav-link, nav-item {
    // height: 100%;
    // border: 1px yellow dotted;
    display: flex;
    align-items: center;
  }
  `,
        }}
      />
      <Navbar bg={variant} variant={variant} expand={expand} className={className} {...props}>
        <Wrapper>
          <Navbar.Brand href="/">{logo || 'App Title'}</Navbar.Brand>
          <Navbar.Toggle aria-controls="app-navbar" />
          <Navbar.Collapse id="app-navbar">
            <Nav className="me-auto">
              <NavbarMenu
                variant={variant}
                items={navItems}
                imageSize={imageSize}
                activeHref={activeHref}
              />
            </Nav>
            <Nav style={{ display: 'flex' }}>
              <AppNavbarDebug />
              {user?.isAdmin && Boolean(adminItems?.length) && (
                <NavbarMenu
                  variant={variant}
                  items={adminItems}
                  imageSize={imageSize}
                  activeHref={activeHref}
                />
              )}
              <AppNavbarUser imageSize={avatarSize} variant={variant} />
            </Nav>
          </Navbar.Collapse>
        </Wrapper>
      </Navbar>
    </>
  );
};
