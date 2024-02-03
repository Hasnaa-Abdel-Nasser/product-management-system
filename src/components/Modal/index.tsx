import { scrollAllowed } from "../../utils";
import "./index.scss";
import { ReactNode } from "react";
interface IProps {
  title: string;
  setOpen: (val: boolean) => void;
  open: boolean;
  children: ReactNode;
}

export const Modal = ({ title, setOpen, open, children }: IProps) => {
  return (
    
    <div className="w-full h-full fixed flex justify-center items-center">
      <div className="w-full h-full absolute backdrop-blur-sm bg-black bg-opacity-25 opacity-100"
        onClick={() => {setOpen(!open); scrollAllowed(false);}}
      ></div>
      <div className="model-content w-full max-w-[410px] p-5 m-5 z-50 bg-white rounded-lg overflow-y-hidden">
        
        <p className="font-medium">{title}</p>

        {children}

      </div>
    </div>
  );
};
