import React from 'react';
import { Button, ButtonProps } from 'react-bootstrap';

export type IconButtonProps = ButtonProps & {
  icon: React.ReactNode;
  autohide?: boolean;
};

export const IconButton = ({ autohide, icon, style, children, ...props }: IconButtonProps) => (
  <Button
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--bs-btn-padding-y)',
      ...style,
    }}
    {...props}
  >
    {icon && <span style={{ fontSize: '1em' }}>{icon}</span>}
    {children && <span className={autohide ? 'd-none d-sm-inline' : ''}>{children}</span>}
  </Button>
);
