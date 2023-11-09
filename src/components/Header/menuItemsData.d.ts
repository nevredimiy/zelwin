
declare module './menuItemsData.ts' {
  const subSubmenu: {
    title: string;
    description?: string;
    url: string;
  }[];
const submenu: {
    title: string;
    url: string;
    subSubmenu: subSubmenu;
  }[];
  const menuItemsData: {
    title: string;
    url: string;
    submenu?: submenu;
  }[];
  export default menuItemsData;
}
