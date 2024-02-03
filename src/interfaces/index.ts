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

export interface INewProduct {
  product: IProduct;
  setAllProducts: (products: IProduct[]) => void;
  setErrors: (val: IError) => void;
  setOpen: (val: boolean) => void;
}

export interface IFormModel {
  product: IProduct;
  setProduct: (products: IProduct) => void;
  onSubmit: ({
    product,
    setAllProducts,
    setErrors,
    setOpen,
  }: INewProduct) => void;
  setAllProducts: (val: IProduct[]) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}
export interface IError {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}
