interface IProps {
    className?: string;
    imageUrl:string
  }
  export const Image = ({ className , imageUrl}: IProps) => {
    return (
      <img
        className={className}
        src= {imageUrl}
        alt="img"
      />
    );
  };
  