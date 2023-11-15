
declare module 'menuItemsData.ts' {
  const subSubmenu: {
    id: number;
    title: string;
    description?: string;
    url: string;
  }[];
  const submenu: {
    id: string;
    title: string;
    url: string;
    subSubmenu: typeof subSubmenu;
    servicesCount: number;
    serviceIcon: string;
  }[];
  const menuItemsData: {
    title: string;
    url: string;
    submenu?: typeof submenu;
  }[];
  export default menuItemsData;
}
