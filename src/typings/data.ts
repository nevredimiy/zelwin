export interface dataReviews {
        body: string;
        avatar: string;
        title: string;
        description: string;
}

export interface dataBestOffer {
    title: string;
    countServices: number;
    body: string[];
    price: number;
    newPrice: number;
}

export interface DraggableSliderProps {
    sectionClass?: string;
    title: string;
    titleClass?: string;
    arrowClass?: string;
    data: dataReviews[] | dataBestOffer[];
    dottesClass?: string;
    dottesActiveClass?: string;
    children: React.ReactNode;
}

export type SliderProps = {
  data: {
    title: string,
    countServices: number,
    body: string[],
    price: number,
    newPrice: number,
  };
}

type subSubmenu = {
  id: number;
  title: string;
  description?: string;
  url: string;
}[];

export type submenu = {
  id: string;
  title: string;
  url: string;
  subSubmenu: subSubmenu;
  servicesCount: number;
  serviceIcon: string;
}[];

export type menuItemsData = {
  title: string;
  url: string;
  submenu?: submenu;
}[];


