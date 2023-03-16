import React from "react";
import imagenes from "../About/imagenes";
import { footerStyles } from "./styles/footer.style";

const Footer = () => {
  const classes = footerStyles();

  return (
    <div className={classes.footerDivPrincipal}>
      {" "}
      {/* div contenedor de redes sociales */}
      <div>
        <p className={classes.pSocialMedias}>Redes sociales</p>
        <div className={classes.divIconsSocialMedias}>
          <a href="https://instagram.com/advancedvalley" target="_blank">
            <img
              className={classes.iconsStyles}
              src={imagenes.instagramIcon}
            ></img>
          </a>
          <a href="https://tiktok.com/advancedvalley" target="_blank">
            <img className={classes.iconsStyles} src={imagenes.tiktokIcon} />
          </a>
          <a href="https://facebook.com/advancedvalley" target="_blank">
            <img className={classes.iconsStyles} src={imagenes.facebookIcon} />
          </a>
        </div>
      </div>
      {/* Div contenedor de CopyRight icon & info */}
      <div className={classes.copyStyles}>
        <a href="https://linkedin.com/advancedvalley" target="_blank">
          <p className={classes.pCopyStyle}>
            Todos los derechos Reservados{" "}
            <img className={classes.iconCopy} src={imagenes.copyIcon} />
          </p>
        </a>
      </div>
      {/* Div contenedor de informacion de contacto */}
      <div className={classes.contactDivStyles}>
        <p className={classes.pContactanos}>Contactanos</p>

        <p className={classes.pEmail}>Email : smarthuerta@info.com</p>

        <p className={classes.pWsp}>Whatsapp de la comunidad : 3939438498</p>
      </div>
    </div>
  );
};

export default Footer;
