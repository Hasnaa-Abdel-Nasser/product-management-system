import { ProductNameTypes } from "../types";

export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}

export interface IFormInput {
  id: string;
  name: ProductNameTypes;
  label: string;
  type: string;
}

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IInputChange {
  product: IProduct;
  setProduct: (product: IProduct) => void;
  event: React.ChangeEvent<HTMLInputElement>;
  errors: IError,
  setErrors:(val:IError)=>void
}

export interface IProductList {
  product: IProduct;
  setAllProducts: (products: IProduct[]) => void;
}

export interface IFormModel {
  open: boolean;
  setOpen: (open: boolean) => void;
  setAllProducts: (val: IProduct[]) => void;
  productIndex: number;
}


export interface IError {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}
