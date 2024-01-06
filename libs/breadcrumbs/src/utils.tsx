import { MenuItem } from './types.js';

export const isActive = (item: MenuItem, activeHref?: string) => item?.href === activeHref;

export const findBreadcrumbs = (items: MenuItem[], activeHref: string): MenuItem[] => {
  // eslint-disable-next-line no-restricted-syntax
  for (const item of items) {
    if (item.items) {
      const subbreads = findBreadcrumbs(item.items, activeHref);
      if (subbreads.length) return [item, ...subbreads];
      // const subitem = item.items.find((it) => isActive(it, activeHref));
      // if (subitem) return [item, subitem];
    }
    if (isActive(item, activeHref)) return [item];
  }
  return [];
};
