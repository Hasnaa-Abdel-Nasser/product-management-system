import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
}
export const Input = ({label , ...rest}:IProps) => {

  return (
    <div className="mt-4 flex flex-col">
      <label className='text-xs font-semibold text-slate-600' htmlFor={rest.id}>{label}</label>
      <input
        {...rest}
        className="p-2.5 rounded-md border-solid border-[1px]
                 border-gray-200 focus:border-[#4338CA] 
                   focus:border-2 shadow-md outline-none"
      />
    </div>
  );
};
