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