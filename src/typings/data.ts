export interface Submenu {
   title: string;
    url: string;
}

export interface MenuI {
    title: string;
    url: string;
    submenu?: Submenu;
}


export interface MenuItemsProps {
    items: MenuI;
    depthLevel: number;
}