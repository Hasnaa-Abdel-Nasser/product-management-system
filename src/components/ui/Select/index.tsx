import { useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import { Check } from "lucide-react";
import { categories } from "../../../data/index";
import { Category } from "../Category";
import { ICategory, IProduct } from "../../../interfaces";
import "./index.scss";
import { initialCategory } from "../../../utils";

interface IProps {
  product: IProduct;
  setProduct: (product: IProduct) => void;
}

export const Select = ({ product, setProduct }: IProps) => {
  const [showCategories, setShowCategories] = useState(false);
  const [data, setData] = useState(initialCategory(product));
  
  const handleCategoryChoose = (category: ICategory) => {
    const { name, imageURL } = category;
    setProduct({ ...product, category: { name, imageURL } });
    setData({ name, imageURL });
    setShowCategories(false);
  };
  
  return (
    <div className="select-category" onMouseLeave={() => setShowCategories(false)}>
      <p className="title">Category</p>
      <button className="shadow-sm" onClick={() => setShowCategories(!showCategories)}>
        <Category imageURL={data.imageURL} name={data.name} />
        <ChevronsUpDown size={15} color="rgb(123 123 123)" />
      </button>
      <div className="relative">
        {showCategories && (
          <ul className="shadow-md">
            {categories.map((option) => (
              <li key={option.id} onClick={() => handleCategoryChoose(option)}>
                <Category className={`text-xs ${ option.name === data.name && "font-semibold"}`}
                  imageURL={option.imageURL}
                  name={option.name}
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
