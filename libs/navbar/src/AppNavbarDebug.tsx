/* eslint-disable no-nested-ternary */
import { isDev } from '@lsk4/env';
import { useAppConfig } from '@rckit/config';
import { SecretCheckbox } from '@rckit/secret-checkbox';
import React from 'react';
import { Nav } from 'react-bootstrap';

const show = false;

export const AppSecretCheckbox = () => {
  const { isDebug, setAppConfig } = useAppConfig();

  return (
    <SecretCheckbox
      count={isDev ? 2 : 5}
      value={isDebug}
      onChange={(value) => {
        setAppConfig({ isDebug: Boolean(value) } as any);
      }}
      style={{ opacity: isDebug ? 1 : show ? 0.5 : 0.01, cursor: 'pointer' }}
    />
  );
};
export const AppNavbarDebug = () => (
  <>
    <Nav.Link as={AppSecretCheckbox} />
  </>
);
