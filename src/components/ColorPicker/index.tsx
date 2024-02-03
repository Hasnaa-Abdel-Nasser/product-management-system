import {useState } from "react";
import { colors } from "../../data";
import { Circle } from "../ui/Circle";
import { IProduct } from "../../interfaces";

interface IProps {
  product: IProduct;
  setProduct: (val: IProduct) => void;
}

export const ColorPicker = ({ product, setProduct }: IProps) => {
  const [colorsList, setColorsList] = useState<string[]>(product.colors);

  const addAndRemoveColor = (color: string) => {
    const findColor = colorsList.findIndex((ele) => ele == color);
    let colors;
    if (findColor === -1) {
      colors = [...colorsList, color];
      setColorsList([...colorsList, color]);
    } else {
      colors = colorsList.filter((_, index) => index !== findColor);
      setColorsList(colors);
    }
    setProduct({ ...product, colors: colors });
  };
  
  return (
    <>
      <div className="flex gap-1 flex-wrap pt-3">
        {colors.map((color) => (
          <Circle
            key={color}
            color={color}
            onClick={() => addAndRemoveColor(color)}
          />
        ))}
      </div>

      <div className="flex gap-1 flex-wrap py-3">
        {colorsList.length > 0 && (
          <>
            {colorsList.map((color) => (
              <span
                key={color}
                className="p-1 text-white text-[10px] rounded-md"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </>
        )}
      </div>
    </>
  );
};
