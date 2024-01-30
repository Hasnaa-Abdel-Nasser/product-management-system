import { v4 as uuid } from "uuid";
import { IInputChange, INewProduct, IProduct } from "../interfaces";
import { productList } from "../data";
import { validationInputs } from "../validation";

export const initialProduct = (): IProduct => {
  return {
    id: uuid(),
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
};

export const scrollAllowed = (open: boolean) => {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflow = open ? "hidden" : "auto";
  }
};

export const handleInputChange = ({
  product,
  setProduct,
  event
}: IInputChange) => {
  const { name, value } = event.target;
  product = {
    ...product,
    [name]: value,
  };
  setProduct(product);
};

export const addNewProduct = ({ product, setAllProducts , setErrors , setOpen}: INewProduct) => {
  const errors = validationInputs(product);
  if (errors === false) {
    console.log(product)
    productList.unshift(product);
    setAllProducts(productList);
    setOpen(false);
  }else{
    setErrors(errors);
  }
};

export const editProduct = ({ product , setAllProducts ,setErrors , setOpen}: INewProduct) => {
  const errors = validationInputs(product);
  if (errors === false) {
    productList.find((current, index) => {
      if (current.id === product.id) {
        productList[index] = product;
        setAllProducts(productList);
        setOpen(false);
      }
    });
  }else{
    setErrors(errors);
  }
};
