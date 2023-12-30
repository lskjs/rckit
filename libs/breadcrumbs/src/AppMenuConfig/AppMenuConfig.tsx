import React from 'react';

import { AppMenuConfigContext, AppMenuConfigContextProps } from './useAppMenuConfig';

const isType = (type: string) => (item: any) => item.type === type || item.types?.includes(type);
export const AppMenuConfig = ({ items = [], children }: any) => {
  const navItems = items.filter(isType('nav'));
  const adminItems = items.filter(isType('admin'));
  const cabinetItems = items.filter(isType('cabinet'));
  const profileItems = items.filter(isType('profile'));

  const payload: AppMenuConfigContextProps = {
    items,
    navItems,
    cabinetItems,
    adminItems,
    profileItems,
  };

  return <AppMenuConfigContext.Provider value={payload}>{children}</AppMenuConfigContext.Provider>;
};
