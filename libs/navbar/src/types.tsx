export interface NavbarMenuItem {
  title: string;
  href: string;
  items?: NavbarMenuItem[];
  active?: boolean;
  parent?: string;
  hidden?: boolean;
}
