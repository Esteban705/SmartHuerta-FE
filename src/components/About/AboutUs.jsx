import React from "react";
import Footer from "../Footer/Footer";
import UserCards from "./UserCards";
import UsersCards from "./UsersCards";
import { aboutUsStyles } from "./styles/aboutUs.style";
import { cardProductStyles } from "../Products/Styles/CardProductsStyles";

const AboutUs = () => {
  const classes = aboutUsStyles();

  return (
    <>
      {" "}
      {/* Div contenedor de informacion acerca de nosotros */}
      <div className={classes.contenedorInfoAU}>
        {" "}
        {/* Div contenedor de titulo de acerca de nosotros */}
        <div>
          <h1 className={classes.tituloPrincipal}>
            Usuarios de la Comunidad de SMART HUERTA
          </h1>
        </div>
        {/* Div contenedor de los parrafos de acerca de nosotros */}
        <div className={classes.divParrafos}>
          <p className={classes.colorParrafo}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.Maxime et,
            id atque odio, itaque error nesciunt reprehenderit porro iure
            necessitatibus expedita exercitationem ea eligendi reiciendis eaque
            asperiores !Repellat,similique blanditiis !
          </p>

          <br />
          <p className={classes.colorParrafo}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.Maxime et,
            id atque odio, itaque error nesciunt reprehenderit porro iure
            necessitatibus expedita exercitationem ea eligendi reiciendis eaque
            asperiores !Repellat, similique blanditiis !
          </p>
          <br />

          <p className={classes.colorParrafo}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.Maxime et,
            id atque odio, itaque error nesciunt reprehenderit porro iure
            necessitatibus expedita exercitationem ea eligendi reiciendis eaque
            asperiores !Repellat, similique blanditiis !
          </p>
          <br />

          <p className={classes.colorParrafo}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.Maxime et,
            id atque odio, itaque error nesciunt reprehenderit porro iure
            necessitatibus expedita exercitationem ea eligendi reiciendis eaque
            asperiores !Repellat, similique blanditiis !
          </p>
        </div>
      </div>
      {/* Div contenedor de la card */}
      <div>
        <h2 className={classes.tituloPrincipal}>Usuarios Top</h2>
        <div className={classes.divParrafosUsuariosTop}>
          {" "}
          <p className={classes.parrafosUsuariosTop}>
            Aquí estan destacados los usuarios con más intercambios éxitosos.
          </p>
        </div>
      </div>
      <div className={classes.divContenedorCard}>
        <UsersCards />
      </div>
      {/* Div contenedor del boton "ver mas" */}
      <div className={classes.containerVerMas}>
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

export default AboutUs;
