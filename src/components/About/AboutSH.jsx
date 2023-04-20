import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { aboutSHStyles } from "./styles/AboutSH.styles";
import imagenes from "../About/imagenes";

export default function SHAboutComponent() {
  const classes = aboutSHStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className={classes.leftText}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            className={classes.tituloPrincipalAbout}
          >
            ¿Qué es SMART HUERTA?
          </Typography>
          <Typography
            variant="body1"
            component="p"
            gutterBottom
            className={classes.colorParrafoAbout}
          >
            Poder beneficiar a dos personas en un común acuerdo de solidaridad.{" "}
            <br /> Ligrar crear hábitos saludables. <br />
            Una comunidad consciente de los beneficios de la alimentación sana.{" "}
            <br />
            Inspirar la confianza entre personas de un mismo vecindario. <br />
            Desarrollar la sustentabilidad del entorno. <br />
            Potenciar los flujos de distribución de alimentos sanamente
            naturales. <br />
            Algo mas que una página web... <br />
            Somos un camino ideal para crear lazos solidarios de intercambios.{" "}
            <br />
            El compartir es el acto de solidaridad más simple que existe. <br />
            Eso es Smart-huerta. <br />
            <h3 className={classes.fraseSmart}>
              <em>Te comparto de mí, para llevarme de ti.</em>{" "}
            </h3>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.rightImage}>
          <img
            src={imagenes.sustentable}
            alt="Right Image"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
}
