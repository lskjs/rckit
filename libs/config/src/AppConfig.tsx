import React from 'react';
import useLocalStorageState from 'use-local-storage-state';

import { AppConfigContext, AppConfigContextProps, defaultAppConfig } from './useAppConfig.js';

export const AppConfig = ({ children }: any) => {
  const [appConfig, setAppConfig] = useLocalStorageState('appConfig', {
    defaultValue: defaultAppConfig,
  });

  const payload: AppConfigContextProps = {
    ...appConfig,
    setAppConfig,
  };

  return <AppConfigContext.Provider value={payload}>{children}</AppConfigContext.Provider>;
};
