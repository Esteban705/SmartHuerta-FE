import React from "react";
import Footer from "../Footer/Footer";
import MisTrueques from "./MisTruequesCards";
import SolicitudesTrueques from "./SolicitudesTruequesCards";
import TabsTrueques from "./TabsTrueques";
import { generalStyles } from "./styles/general.styles";

const MisTruequesComponent = () => {
  const classes = generalStyles();

  return (
    <>
      {" "}
      {/* Div contenedor de titulo de Productos */}
      <div className={classes.tabEspacio}>
        <h1 className={classes.tittleMisTrueques}>Mis Trueques</h1>
        <div>
          <TabsTrueques />
        </div>
      </div>
      {/* Div contenedor del boton "ver mas" */}
      <div className={classes.contenedorBtnVerMas}>
        <a href="#">
          {" "}
          <button className={classes.btnVerMas}>
            <p>Ver más</p>
          </button>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default MisTruequesComponent;
