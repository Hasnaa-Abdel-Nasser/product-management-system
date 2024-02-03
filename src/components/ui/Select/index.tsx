import { useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import { Check } from "lucide-react";
import { categories } from "../../../data/index";
import { Category } from "../Category";
import { IProduct } from "../../../interfaces";
import "./index.scss";
interface IProps {
  product: IProduct;
  setProduct: (product: IProduct) => void;
}

export const Select = ({product,setProduct}:IProps) => {
  const [showCategories, setShowCategories] = useState(false);
  const [data, setData] = useState(product.category);

  return (
    <div onMouseLeave={()=>setShowCategories(false)}>
      <p className="text-xs font-semibold my-2 mt-3 text-slate-600">Category</p>
      <button
        onClick={() => setShowCategories(!showCategories)}
        className="w-full p-2.5 flex justify-between items-center rounded-md border-solid border-[1px]
                 border-gray-200 focus:border-[#4338CA] focus:border-2 shadow-sm"
      >
        <Category imageURL={data.imageURL || categories[0].imageURL} name={data.name || categories[0].name} />
        <ChevronsUpDown size={15} color="rgb(123 123 123)" />
      </button>
      <div className="relative">
        {showCategories && (
          <ul className="absolute overflow-y-auto w-full bg-white rounded-md border-solid border-[1px] shadow-md border-slate-200 py-1 max-h-40">
            {categories.map((option) => (
              <li key={option.id} className="options" 
                  onClick={() =>{ setProduct({...product , category:{name:option.name , imageURL:option.imageURL}});
                                  setData({name:option.name , imageURL:option.imageURL}); 
                                  setShowCategories(false); 
                                  }}>
                <Category
                  imageURL={option.imageURL}
                  name={option.name}
                  className={`text-xs ${option.name === data.name && "font-semibold"}`}
                />
                {option.name === data.name && <Check size={18} />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
