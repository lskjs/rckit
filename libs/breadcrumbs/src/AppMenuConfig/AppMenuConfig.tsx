import React from 'react';

import { AppMenuConfigContext } from './useAppMenuConfig';
// import useLocalStorageState from 'use-local-storage-state';

export const AppMenuConfig = ({ items, children }: any) => (
  // const
  // const [appMenuConfig, setAppMenuConfig] = useLocalStorageState('AppMenuConfig', {
  //   defaultValue: defaultAppMenuConfig,

  // const payload: AppMenuConfigContextProps = {
  //   ...appMenuConfig,
  //   setAppMenuConfig,
  // };

  <AppMenuConfigContext.Provider value={items}>{children}</AppMenuConfigContext.Provider>
);
