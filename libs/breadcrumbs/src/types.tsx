export interface MenuItem {
  title: string;
  href: string;
  active?: boolean;
  hidden?: boolean;
  items?: MenuItem[];
}
