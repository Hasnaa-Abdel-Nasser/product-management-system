import { IFormModel } from "../../interfaces";
import { formInputsList } from "../../data";
import { handleInputChange, initialError, scrollAllowed } from "../../utils";
import { Input } from "./Input";
import { Select } from "./Select";
import { ColorPicker } from "../ColorPicker";
import { Button } from "./Button";
import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";


export const FormModel = ({onSubmit,product,setProduct,open,setOpen,setAllProducts,}: IFormModel) => {
  const [errors, setErrors] = useState(initialError());
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
            onChange={(event) =>
              handleInputChange({ product, setProduct, event , errors , setErrors })
            }
          />
          <ErrorMessage msg={errors[input.name]}/>
        </div>
      ))}
      <Select product={product} setProduct={setProduct} />
      <ColorPicker product={product} setProduct={setProduct} />
      <div className="grid grid-cols-2 gap-2">
        <Button
          onClick={() => {
            onSubmit({ product, setAllProducts, setErrors, setOpen });
          }}
          className="bg-[#4338CA] hover:bg-[#3730A3]"
        >
          Submit
        </Button>
        <Button
          onClick={() =>{ setOpen(!open); scrollAllowed(false);}}
          className="bg-slate-200 hover:bg-slate-300 text-black"
        >
          Cancel
        </Button>
      </div>
    </>
  );
};
