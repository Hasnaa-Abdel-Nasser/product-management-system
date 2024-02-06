import { IFormModel, IProduct } from "../../interfaces";
import { formInputsList } from "../../data";
import {addNewProduct,editProduct,handleInputChange,initialError,initialProduct,scrollAllowed,} from "../../utils";
import { Input } from "./Input";
import { Select } from "./Select";
import { ColorPicker } from "../ColorPicker";
import { Button } from "./Button";
import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { validationInputs } from "../../validation";
import { ToasterMessage } from "./ToasterMessage";

export const FormModel = ({open,setOpen,setAllProducts,productIndex}: IFormModel) => {
  const [errors, setErrors] = useState(initialError());
  const [product, setProduct] = useState<IProduct>(initialProduct(productIndex));
  
  // Function to handle form submission
  const handleSubmit = () => {
    const errors = validationInputs(product);
    // Check if there are any errors
    const findError = Object.values(errors).findIndex((err) => err != "");
    if (findError === -1) {
      // If no errors, add new product or edit existing product
      const message = productIndex >= 0
        ? editProduct({product, setAllProducts})
        : addNewProduct({product, setAllProducts});
      // Hide modal and show scrollbar
      scrollAllowed(false);
      setOpen(false);
      ToasterMessage({message});
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      {formInputsList.map((input) => (
        <div key={input.id}>
          <Input
            label={input.label}
            type={input.type}
            id={input.id}
            name={input.name}
            value={product[input.name]}
            onChange={(event) =>handleInputChange({product,setProduct,event,errors,setErrors,})}
          />
          <ErrorMessage msg={errors[input.name]} />
        </div>
      ))}
      {/* Render Select and ColorPicker components */}
      <Select product={product} setProduct={setProduct} />
      <ColorPicker product={product} setProduct={setProduct} />
      {/* Render submit and cancel buttons */}
      <div className="grid grid-cols-2 gap-2">
        <Button onClick={() => {handleSubmit()}} className="bg-[#4338CA] hover:bg-[#3730A3]">
          Submit
        </Button>
        <Button className="bg-slate-200 hover:bg-slate-300 text-black"
          onClick={() => { setOpen(!open); scrollAllowed(false); }}>
          Cancel
        </Button>
      </div>
    </>
  );
};
