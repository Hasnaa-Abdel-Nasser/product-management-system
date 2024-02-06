import { v4 as uuid } from "uuid";
import { IError,IInputChange, IProduct, IProductList } from "../interfaces";
import { categories, productList } from "../data";

// Return initial product object with default or pre-filled values based on index
// index -> Index of the product in the productList array, -1 if it's a new product
export const initialProduct = (index:number): IProduct => {
  if(index === -1){
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
  }
  return productList[index];
};


// Return object with initial error values for form inputs
export const initialError = (): IError => {
  return {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };
};

export const initialCategory = (product:IProduct)=>{
  const {imageURL , name} = product.category.name? product.category : categories[0];
  return {imageURL , name};
};

//Hide/Show Scrollbar When Modal is Open
export const scrollAllowed = (open: boolean) => {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflow = open ? "hidden" : "auto";
  }
};


// Handle input change event for updating product state and errors
export const handleInputChange = ({product,setProduct,event,errors,setErrors}: IInputChange) => {
  const { name, value } = event.target;
  product = {
    ...product,
    [name]: value,
  };
  setProduct(product);
  setErrors({
    ...errors,
    [name]: "",
  });
};


//Adds a new product to the product list
export const addNewProduct = ({product, setAllProducts}:IProductList) => {
  productList.unshift(product);
  setAllProducts(productList);
  // Success Message
  return "Product has been added successfully!";
};


//Edits an existing product in the product list
export const editProduct = ({product, setAllProducts}:IProductList) => {
  productList.find((current, index) => {
    if (current.id === product.id) {
      productList[index] = product;
      setAllProducts(productList);
    }
  });
  // Success Message
  return "Product has been updated successfully!";
};
