import { createContext, Dispatch, SetStateAction, useContext } from 'react';

import { MenuItem } from '../types.js';

export interface AppMenuConfigType {
  items?: MenuItem[];
  // isDebug: boolean;
  // theme: 'light' | 'dark';
}

export const defaultAppMenuConfig: AppMenuConfigType = {
  // isDebug: false,
  // theme: 'light',
};

export type AppMenuConfigContextProps = AppMenuConfigType & {
  setAppMenuConfig: Dispatch<SetStateAction<AppMenuConfigType>>;
};

export const AppMenuConfigContext = createContext<AppMenuConfigContextProps>(
  defaultAppMenuConfig as any,
);
export const useAppMenuConfig = () => useContext(AppMenuConfigContext);
