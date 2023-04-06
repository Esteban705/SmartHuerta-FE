import React from "react";
import Footer from "../Footer/Footer";
import UserCards from "./UserCards";
import UsersCards from "./UsersCards";
import { aboutUsStyles } from "./styles/UsuariosDeSH.style";
import { cardProductStyles } from "../Products/Styles/CardProductsStyles";

const UsuariosDeSH = () => {
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
            La comunidad de Smart-Huerta se basa en la confianza y la buena fé
            entre sus usuarios. Los Smart-Points tienen la utilidad de compensar
            mediante un sistema de puntos que se suman y mantienen con las
            interacciones realizadas en la página.
          </p>
          <p className={classes.colorParrafo}>
            El sistema se reinicia cada 6 meses, pero guarda un punto de partida
            más elevado que mantienen primeros a los que mayores trueques
            exitosos hayan tenido en los 12 meses anteriores.
          </p>
          <p className={classes.colorParrafo}>
            El tope máximo de puntos por mes es de 1000. Esta cantidad otorga
            una estrella que se puede exhibir el perfil, y cuantas más
            estrellas, mayor la reputación del usuario, lo que significaría
            mayores trueques exitosos realizados Toda esta información debe ser
            tenida en cuenta al realizar peticiones de intercambios.
          </p>
          <p className={classes.colorParrafo}>
            Al alcanzar 5 estrellas, entra el usuario en el ranking de los 10
            mas puntuados y de mejor reputación de los últimos 12 meses.
          </p>
          <p className={classes.colorParrafo}>
            Este sistema compensa principalmente las transacciones éxitosas,
            también penaliza las quejas, malas reseñas e inconvenientes
            traducidos en lentos trámites.
          </p>
          <p className={classes.colorParrafo}>
            Ante cualquier duda o inconveniente, dirigirse a la sección
            contactos, denuncias/reclamos.
          </p>
          <p className={classes.textAdvertencia}>
            ©Smart-Huerta es una marca registrada de Advanced-Valley. <br />
            Advanced-Valley no se responsabiliza del mal uso de la aplicación.
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

export default UsuariosDeSH;
