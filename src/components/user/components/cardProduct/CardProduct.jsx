import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CardProduct = () => {
  



  return (
    <button>
      <Card>
        <CardMedia
         
          image="https://soycomocomo.es/media/2016/06/lechuga.jpg"
          // image="/static/images/cards/paella.jpg"
          title="Vendo Lechuga pa"
        />
        <CardHeader
          title="Vendo Lechuga pa' "
          subheader="September 14, 2016"
        />
        <CardContent >
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </button>
  );
};

export default CardProduct;
