import { Image } from "./Image";
interface IProps {
  imageURL: string;
  name: string;
  className?: string
}
export const Category = (data: IProps) => {
  return (
    <div className={`flex items-center gap-2 text-xs ${data.className}`}>
      <Image className="w-5 h-5 rounded-[50%]" imageUrl={data.imageURL} />
      <p >{data.name}</p>
    </div>
  );
};
