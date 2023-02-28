import { Card, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ModalCreateNewProduct from "./ModalCreateNewProduct";

const CardAddNewProduct = () => {
  const useStyles = {
    root: {
      width: "16rem",
      height: "22rem",
      padding: "0.2rem",
      margin: "0.5rem 0",
      borderRadius: "0.5rem",
      backgroundColor: "green",
      opacity: "0.6",
      "&:hover": {
        transform: "scale(1.05)",
        opacity: "1",
      },
    },
  };

  // const classes = useStyles();
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
        <Card sx={{ maxWidth: 345 }} style={useStyles.root}>
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
