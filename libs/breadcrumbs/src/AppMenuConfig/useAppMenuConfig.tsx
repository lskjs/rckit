import { createContext, useContext } from 'react';

import { MenuItem } from '../types.js';

export interface AppMenuConfigType {
  items: MenuItem[];
  navItems: MenuItem[];
  cabinetItems: MenuItem[];
  adminItems: MenuItem[];
  profileItems: MenuItem[];
}

export const defaultAppMenuConfig: AppMenuConfigType = {
  items: [],
  navItems: [],
  cabinetItems: [],
  adminItems: [],
  profileItems: [],
};

export type AppMenuConfigContextProps = AppMenuConfigType & {
  // setAppMenuConfig: Dispatch<SetStateAction<AppMenuConfigType>>;
};

export const AppMenuConfigContext = createContext<AppMenuConfigContextProps>(
  defaultAppMenuConfig as any,
);
export const useAppMenuConfig = () => useContext(AppMenuConfigContext);
