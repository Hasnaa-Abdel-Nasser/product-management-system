import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  className?: string;
}
export const Button = ({ children, className , ...rest}: IProps) => {
  return (
    <button {...rest} className={`${className} p-3 rounded-lg text-white font-medium text-sm`}>
      {children}
    </button>
  );
};
