import { useAppSession, useAppUser } from '@rckit/auth';
import { useAppMenuConfig } from '@rckit/breadcrumbs';
import { Link } from '@rckit/link';
import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

import { NavbarProfileItem } from './NavbarProfileItem.js';

type AppNavbarUserProps = React.PropsWithChildren<{
  variant?: string;
  imageSize?: number;
}>;

export const AppNavbarUser = ({ imageSize, variant }: AppNavbarUserProps) => {
  const { profileItems } = useAppMenuConfig();
  const { sessionStatus } = useAppSession();
  const user = useAppUser();
  if (sessionStatus === 'loading') {
    return <Nav.Link href="/auth/logout">Loading...</Nav.Link>;
  }
  if (user) {
    const { avatar, title } = user;
    return (
      <>
        <NavDropdown
          title={<NavbarProfileItem title={title} src={avatar} imageSize={imageSize} />}
          menuVariant={variant}
        >
          {profileItems.map((item, index) => (
            <NavDropdown.Item as={Link} key={index} href={item.href}>
              {item.title}
            </NavDropdown.Item>
          ))}
          {Boolean(profileItems?.length) && <NavDropdown.Divider />}
          <NavDropdown.Item as={Link} href="/auth/logout">
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </>
    );
  }
  return <Nav.Link href="/auth">Sign In</Nav.Link>;
};
