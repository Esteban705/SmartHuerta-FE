import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const CardProduct = ({ value, openModalCreateProduct, setOpenModalCreateProduct }) => {
  const useStyles = {
    root: {
      maxWidth: "16rem",
      height: "22rem",
      padding: "0.2rem",
      margin: "0.5rem 0",
      borderRadius: "0.5rem",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    media: {
      borderRadius: "0.5rem",
      height: "45%",
      paddingTop: "0.5rem", // 16:9
    },
    content: {
      padding: "0 1rem",
    },
    actionsButtons: {
      position: "relative",
      top: "2rem",
    },
  };

  const { productName, coments } = value;

  return (
    <button>
      <Card sx={{ maxWidth: 345 }} style={useStyles.root}>
        <CardMedia
          style={useStyles.media}
          component="img"
          image="https://t1.uc.ltmcdn.com/es/posts/6/6/4/que_vitaminas_tiene_la_manzana_51466_orig.jpg"
          alt="Manzana"
        />
        <CardContent style={useStyles.content}>
          <Typography variant="h6" component="div" align="center">
            {productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {coments}
          </Typography>
        </CardContent>

        <CardActions style={useStyles.actionsButtons}>
          <Button size="small" onChange={setOpenModalCreateProduct(true)} >Ver mas</Button>
        </CardActions>
      </Card>
    </button>
  );
};

export default CardProduct;
