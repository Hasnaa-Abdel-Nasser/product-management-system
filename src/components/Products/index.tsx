import { useState } from "react";
import { Button } from "../ui/Button";
import { Modal } from "../Modal";
import { productList } from "../../data";
import { scrollAllowed } from "../../utils";
import { FormModel } from "../ui/FormModel";
import { Toaster } from "react-hot-toast";

export const Products = () => {
  const [open, setOpen] = useState(false);
  const [productIndex, setProductIndex] = useState(-1);
  const [products, setAllProducts] = useState(productList);


  // Open Modal, set new index, and hide scroll bar
  const handleOnClick = (index: number) => {
    setOpen(true);
    scrollAllowed(true);
    setProductIndex(index);
  }

  return (
    <div className="flex flex-col items-center products">
      
      {/* index is -1, it refers to a new product */}
      <Button className={"bg-[#4338CA] hover:bg-[#3730A3] my-8"} onClick={() => { handleOnClick(-1) }}>
        Build a Product
      </Button>

      {/*Handle Modal To Add and Edit Product*/}
      {open && (
        <Modal
          setOpen={setOpen}
          open={open}
          title={productIndex === -1 ? "ADD A NEW PRODUCT" : "EDIT THIS PRODUCT"}
        >
          <FormModel
            setOpen={setOpen}
            open={open}
            setAllProducts={setAllProducts}
            productIndex={productIndex}
          />
        </Modal>
      )}

      {/*Cards*/}
      {products.map((product, index) => (
        <div className="flex" key={product.id}>
          <p>{product.title}</p>
          <Button className={"bg-[#4338CA] hover:bg-[#3730A3]"} onClick={() => { handleOnClick(index) }}>
            Edit
          </Button>
        </div>
      ))}
      {/*End Cards*/}
      <Toaster />
    </div>
  );
};
