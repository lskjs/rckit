import React, { createContext, useContext } from 'react';

import { MenuItem } from '../types.js';
import { getAppMenuItems } from './getAppMenuItems.js';

export type AppMenuConfigContextProps = {
  items?: MenuItem[] | ((ctx: any) => MenuItem[]);
};
export const AppMenuConfigContext = createContext<AppMenuConfigContextProps>({});
export type AppMenuConfigProps = React.PropsWithChildren<AppMenuConfigContextProps>;
export const AppMenuConfig = ({ items, children }: AppMenuConfigProps) => (
  <AppMenuConfigContext.Provider value={{ items }}>{children}</AppMenuConfigContext.Provider>
);

export type AppMenuArgsContextProps = {
  items?: MenuItem[] | ((args: any) => MenuItem[]);
};
export const AppMenuArgsContext = createContext<AppMenuArgsContextProps>({});
export type AppMenuArgsProps = React.PropsWithChildren<AppMenuArgsContextProps>;
export const AppMenuArgs = ({ children, ...props }: AppMenuArgsProps) => (
  <AppMenuArgsContext.Provider value={props}>{children}</AppMenuArgsContext.Provider>
);

export interface AppMenuConfigRes {
  items: MenuItem[];
  navItems: MenuItem[];
  cabinetItems: MenuItem[];
  adminItems: MenuItem[];
  profileItems: MenuItem[];
}

export function useAppMenuConfig(): AppMenuConfigRes {
  const config = useContext(AppMenuConfigContext);
  const args = useContext(AppMenuArgsContext);
  return getAppMenuItems(config, args);
}
