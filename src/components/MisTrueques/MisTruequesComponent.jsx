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
      <div>
        <h1 className={classes.tittleMisTrueques}>Mis Trueques</h1>
        <div className={classes.tabEspacio}>
          <TabsTrueques />
        </div>
        {/* <div className='menu-categorias'
                    style={
                        {
                            fontSize: "16px",
                            display: "flex",
                            paddingLeft: "4rem",
                            paddingTop: "2rem"

                        }
                }>
                    <label>Filtrar</label>
                    <select className="categorias" id="categorias">
                        <option value="" selected disabled>Categorias</option>
                        <option value="frutas">Frutas</option>
                        <option value="verduras">Verduras</option>
                        <option value="hortalizas">Hortalizas</option>
                    </select>

                </div>


            */}{" "}
      </div>
      {/* Div contenedor del boton "ver mas" */}
      <div className={classes.contenedorBtnVerMas}>
        <a href="#">
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
