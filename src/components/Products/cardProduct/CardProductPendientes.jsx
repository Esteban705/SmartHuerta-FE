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
import { dataProducts } from "./../../MisTrueques/util/dataProductsCards";
import misTruequesImagenes from "./../../MisTrueques/misTruequesImagenes.js";
import { stylesCardsExtras } from "./../Styles/CardsSolicitudesStyles.jsx";
const CardProductPendientes = ({
  productTittle,
  productDescription,
  productImages,
}) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = cardProductStyles();
  const stylesPendientes = stylesCardsExtras();
  return (
    <>
      {/* // deskstops component */}
      {dataProducts.map((dataProducts) => (
        <Card className={classes.cardRoot}>
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              image={misTruequesImagenes.zanahorias || productoSinImagen}
              title="Contemplative Reptile"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {dataProducts.productName || "Sin titulo"}
              </Typography>
              <p className={stylesPendientes.parrafoRealizados}>Ofertado: </p>
              <Typography variant="body2" color="textSecondary" component="p">
                {dataProducts.usuarioProduct || "Producto sin descripcion..."}
                <a href="/#">
                  {" "}
                  <p className={stylesPendientes.parrafoVerPerfil}>
                    Ver perfil
                  </p>{" "}
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              style={{ textAlign: "center" }}
            >
              Solicitud Pendiente
            </Button>
          </CardActions>
        </Card>
      ))}{" "}
    </>
  );
};

export default CardProductPendientes;
