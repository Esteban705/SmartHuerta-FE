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
import productoSinImagen from "../../assets/producto-sin-imagen.png";
import imagenes from "../About/imagenes";
import { cardPerfilStyles } from "./styles/CardPerfilStyles";
import { dataUserInfo } from "../About/util/dataUserInfo";

const CardsUsers = ({ productTittle, productDescription, productImages }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = cardPerfilStyles();

  return (
    <>
      {dataUserInfo.map((dataUserInfo) => (
        <Card className={classes.cardRoot}>
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              image={imagenes.userIdea || productoSinImagen}
              title="Contemplative Reptile"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {dataUserInfo.userName || "Sin titulo"}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {dataUserInfo.descripcionperfil || "Perfil sin descripcion..."}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a href="#">
              {" "}
              <Button className={classes.btnPerfil}>Ver Perfil</Button>
            </a>
          </CardActions>
        </Card>
      ))}{" "}
    </>
  );
};
export default CardsUsers;
