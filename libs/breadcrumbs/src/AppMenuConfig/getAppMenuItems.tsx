import { AppMenuConfigContextProps, AppMenuConfigRes } from './AppMenuConfig';

const isType = (type: string) => (item: any) =>
  item.type === type ||
  item.type?.includes(type) ||
  item.types === type ||
  item.types?.includes(type);

export const getAppMenuItems = (
  { items: rawItems = [] }: AppMenuConfigContextProps,
  ctx: any = {},
): AppMenuConfigRes => {
  const items = ((typeof rawItems === 'function' ? rawItems(ctx) : rawItems) || []).filter(Boolean);
  // @ts-ignore
  // console.log('AppMenuConfig', { items });
  const navItems = items.filter(isType('nav'));
  const adminItems = items.filter(isType('admin'));
  const cabinetItems = items.filter(isType('cabinet'));
  const profileItems = items.filter(isType('profile'));

  return {
    items,
    navItems,
    cabinetItems,
    adminItems,
    profileItems,
  };
};
