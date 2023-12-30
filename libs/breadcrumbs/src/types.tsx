export interface MenuItem {
  type?: string;
  types?: string[];
  title: string;
  href?: string;
  active?: boolean;
  hidden?: boolean;
  items?: MenuItem[];
}
