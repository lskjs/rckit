/* eslint-disable no-nested-ternary */
import { isDev } from '@lsk4/env';
import React from 'react';

import { Zebra } from './Zebra';

const useAppConfig = () => ({ isDebug: isDev });

interface DebugProps {
  as?: React.ElementType;
  children?: any;
  json?: any;
  pretty?: boolean;
  condition?: boolean | null;
}

export const Debug = ({
  as: As,
  children = null,
  json = null,
  pretty = true,
  condition,
  ...props
}: DebugProps) => {
  const { isDebug } = useAppConfig();
  // const isDebug = true;
  // eslint-disable-next-line no-param-reassign
  if (condition === null || condition === undefined) condition = isDebug;
  if (!condition) return null;
  return (
    <Zebra
      as={As || (json ? 'pre' : 'div')}
      border={0}
      color="#fbba2111"
      colors={['#00000000', '#fbba2111']}
      {...props}
    >
      {json ? (pretty ? JSON.stringify(json, null, 2) : JSON.stringify(json)) : children}
    </Zebra>
  );
};
