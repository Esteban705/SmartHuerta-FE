import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import { cardAddNewProductStyles } from "../Styles/CardProductsStyles";

const CardAddNewProduct = ({handleClickOpenModal}) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = cardAddNewProductStyles();
  const [openModalCreateProduct, setOpenModalCreateProduct] = useState(false);


  return (
    <>
      {!isMatch ? (
        <button
          onClick={(e) => {
            handleClickOpenModal()
          }}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="h1">
                  +
                </Typography>
                <Typography variant="h6">AGREGAR UN PRODUCTO</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </button>
      ) : (
        // mobile component
        <Card className={classes.rowRoot}>
          <CardActionArea>
            <CardContent className={classes.mobileNewProductContent}>
              <Typography gutterBottom variant="h1">
                +
              </Typography>
              <Typography variant="h5" className={classes.addProduct}>
                AGREGAR UN PRODUCTO
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};

export default CardAddNewProduct;
