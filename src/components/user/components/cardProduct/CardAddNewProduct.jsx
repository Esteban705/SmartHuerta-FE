import React, { useState } from "react";
import { Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ModalCreateNewProduct from "./ModalCreateNewProduct";

const CardAddNewProduct = () => {

  const [openModalCreateProduct, setOpenModalCreateProduct] = useState(false);

  const handleClickOpenModal = () => {
    setOpenModalCreateProduct(true);
  };

  const handleCloseModal = () => {
    setOpenModalCreateProduct(false);
  };

  return (
    <>
      <button onClick={handleClickOpenModal}>
        <Card >
          <Typography variant="h1"style={{color:'white'}}>
            +
          </Typography>
          <Typography variant="h5"style={{color:'white'}}>
            Agregar un producto
          </Typography>
        </Card>
      </button>
      <ModalCreateNewProduct
        openModalCreateProduct={openModalCreateProduct}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default CardAddNewProduct;
