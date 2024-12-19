export interface ProductType {
  title: string;
  price: number;
  discount: number;
  related: boolean;
  salesPrice: number;
  category: string[];
  gender: string;
  rating: number;
  stock: boolean;
  qty: number;
  colors: string[];
  photo: string;
  id: number | string;
  created: Date;
  description: string;
  images: {
    imgPath: string;
    id: number;
  }[];
}
  
  export interface ProductFiterType {
    id: number;
    filterbyTitle?: string;
    name?: string;
    sort?: string;
    icon?:  never;
    devider?: boolean;
  }
  
  export interface ProductCardProps {
    id?: string | number;
    color?: string;
    like: string;
    star: number;
    value?: string;
  }
  