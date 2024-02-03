import { useState } from "react";
import { Button } from "../ui/Button";
import { Modal } from "../Modal";
import { IProduct } from "../../interfaces";
import { productList } from "../../data";
import {
  addNewProduct,
  editProduct,
  initialProduct,
  scrollAllowed,
} from "../../utils";
import { FormModel } from "../ui/FormModel";

export const Products = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [openEditModel, setOpenEditModel] = useState(false);
  const [products, setAllProducts] = useState(productList);
  const [product, setProduct] = useState<IProduct>(initialProduct);
  
  return (
    <div className="flex flex-col items-center products">
      <Button
        className={"bg-[#4338CA] hover:bg-[#3730A3] my-8"}
        onClick={() => {
          setOpenAddModel(true);
          scrollAllowed(true);
          setProduct(initialProduct());
        }}
      >
        Build a Product
      </Button>

      {openAddModel && (
        <Modal
          setOpen={setOpenAddModel}
          title={"ADD A NEW PRODUCT"}
          open={openAddModel}
        >
          <FormModel
            setOpen={setOpenAddModel}
            open={openAddModel}
            onSubmit={addNewProduct}
            product={product}
            setProduct={setProduct}
            setAllProducts={setAllProducts}
          />
        </Modal>
      )}

      {/*Cards*/}
      {products.map((product) => (
        <div className="flex" key={product.id}>
          <p>{product.title}</p>
          <Button
            onClick={() => {
              setProduct(product);
              setOpenEditModel(true);
              scrollAllowed(true);
            }}
            className={"bg-[#4338CA] hover:bg-[#3730A3]"}
          >
            Edit
          </Button>
        </div>
      ))}
      {/*End Cards*/}

      {openEditModel && (
        <Modal
          setOpen={setOpenEditModel}
          title={"EDIT THIS PRODUCT"}
          open={openEditModel}
        >
          <FormModel
            setOpen={setOpenEditModel}
            open={openEditModel}
            onSubmit={editProduct}
            product={product}
            setProduct={setProduct}
            setAllProducts={setAllProducts}
          />
        </Modal>
      )}
    </div>
  );
};
