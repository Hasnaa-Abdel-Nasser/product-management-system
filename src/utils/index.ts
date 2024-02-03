import { v4 as uuid } from "uuid";
import { IError, IInputChange, INewProduct, IProduct } from "../interfaces";
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

export const initialError = ():IError=>{
  return {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };
}
export const scrollAllowed = (open: boolean) => {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflow = open ? "hidden" : "auto";
  }
};

export const handleInputChange = ({product,setProduct,event,errors,setErrors}: IInputChange) => {
  const { name, value } = event.target;
  product = {
    ...product,
    [name]: value,
  };
  setProduct(product);
  setErrors({
    ...errors,
    [name]:''
  })
};

export const addNewProduct = ({ product, setAllProducts , setErrors , setOpen}: INewProduct) => {
  const errors = validationInputs(product);
  const findError = Object.values(errors).findIndex(err=> err !== '');
  if (findError === -1) {
    console.log(product)
    productList.unshift(product);
    setAllProducts(productList);
    scrollAllowed(false);
    setOpen(false);
  }else{
    setErrors(errors);
  }
};

export const editProduct = ({ product , setAllProducts ,setErrors , setOpen}: INewProduct) => {
  const errors = validationInputs(product);
  const findError = Object.values(errors).findIndex(err=>err != '');
  if (findError === -1) {
    productList.find((current, index) => {
      if (current.id === product.id) {
        productList[index] = product;
        setAllProducts(productList);
        scrollAllowed(false);
        setOpen(false);
      }
    });
  }else{
    setErrors(errors);
  }
};
