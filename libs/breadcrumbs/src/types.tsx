export interface MenuItem {
  type?: string | string[];
  types?: string | string[];
  title: string;
  href?: string;
  icon?: React.ReactNode;
  image?: string;

  // active?: boolean;
  items?: MenuItem[];
  hidden?: boolean;
}
