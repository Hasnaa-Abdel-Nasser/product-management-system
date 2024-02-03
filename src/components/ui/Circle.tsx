import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
}
export const Circle = ({color ,  ...rest }: IProps) => {
  return (
    <span {...rest} style={{backgroundColor: color}} className={`w-4 h-4 rounded-full cursor-pointer`}></span>
  );
};
