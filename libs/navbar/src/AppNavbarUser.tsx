import { useAppSession, useAppUser } from '@rckit/auth';
import { useAppMenuConfig } from '@rckit/breadcrumbs';
import { Link } from '@rckit/link';
import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

import { AvatarWithTitle } from './AvatarWithTitle.js';

type AppNavbarUserProps = React.PropsWithChildren<{
  variant?: string;
}>;

export const AppNavbarUser = ({ variant }: AppNavbarUserProps) => {
  const { profileItems } = useAppMenuConfig();
  const { sessionStatus } = useAppSession();
  const user = useAppUser();
  if (sessionStatus === 'loading') {
    return <Nav.Link href="/auth">Loading...</Nav.Link>;
  }
  if (user) {
    const { avatar, title } = user;
    return (
      <>
        <NavDropdown
          title={
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              &nbsp;
              <AvatarWithTitle title={title} src={avatar} size={24} />
            </div>
          }
          menuVariant={variant}
        >
          {profileItems.map((item: any, index: any) => {
            if (item.hidden) return null;
            return (
              <NavDropdown.Item
                as={Link}
                key={index}
                href={item.href}
                active={item.active}
                // style={{ display: 'flex', alignItems: 'center' }}
              >
                {item.title}
              </NavDropdown.Item>
            );
          })}
          {/* <NavDropdown.Item as={Link} href="/cabinet/profile">
            Profile
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} href="/cabinet/settings">
            Settings
          </NavDropdown.Item> */}
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} href="/auth/logout">
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </>
    );
  }
  return <Nav.Link href="/auth">Sign In</Nav.Link>;
};
