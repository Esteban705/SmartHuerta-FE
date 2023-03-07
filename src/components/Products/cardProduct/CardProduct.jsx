import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import productoSinImagen from "../../../assets/producto-sin-imagen.png";
import { cardProductStyles } from "../Styles/CardProductsStyles";


const CardProduct = ({ productTittle, productDescription, productImages }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = cardProductStyles();

  return (
    <>
      {!isMatch ? (
        // deskstops component
        <Card className={classes.cardRoot}>
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              image={productImages || productoSinImagen}
              title="Contemplative Reptile"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {productTittle || "Sin titulo"}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {productDescription || "Producto sin descripcion..."}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Ver Mas
            </Button>
          </CardActions>
        </Card>
      ) : (
        // mobile Component
        <Card className={classes.mobileRowRoot}>
          <CardActionArea>
            <Grid container>
              <Grid item className={classes.rowGridImg}>
                <CardMedia
                  className={classes.rowImage}
                  image={productImages || productoSinImagen}
                  title="Contemplative Reptile"
                />
              </Grid>
              <Grid item className={classes.rowGridInfo}>
                <Typography gutterBottom variant="h6" component="h6">
                  {productTittle || "Sin titulo"}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {productDescription || "Producto sin descripcion..."}
                </Typography>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};

export default CardProduct;
