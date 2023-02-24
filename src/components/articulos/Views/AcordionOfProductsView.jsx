import React from "react";
import { imageOfCarrousel } from "../../user/carrousel/imagenes";
import "./styles/AcordionOfProductsStyle.css";
import Carousel, { consts } from "react-elastic-carousel";
import { arrowsCarrousel } from "../helpers/arrowsCarrousel";
import { buttonStyle, containerStyle } from "./styles/acordionStyle";

const items = {
  src: imageOfCarrousel.imageEmpty,
  altText: "Sin Imagen",
  caption: "Sin Imagen",
  key: 1,
  style: { pointerEvents: "none", width: "100%" },
};

export const AcordionOfProductsView = ({ dataImg }) => {
  const showImage = dataImg.map((img, key) => {
    return {
      key,
      src: img.newEncodedPicture,
      style: { pointerEvents: "none", heigth: "30rem", width: "100%" },
      altText: "Cebolla",
      caption: "Cebolla",
    };
  });

  return (
    <div style={containerStyle}>
      <Carousel renderArrow={arrowsCarrousel} pagination={!!showImage.length} className=".rec.rec-arrow">
        {!!showImage.length
          ? showImage.map((item) => (
              <div key={item.key}>
                <button onClick={(e) => {}} style={buttonStyle}>
                  <img style={item.style} src={item.src} key={item.key}></img>
                </button>
              </div>
            ))
          : <div key={items.key} >
          <button onClick={(e) => {}} style={buttonStyle}>
            <img style={items.style} src={items.src} key={items.key}></img>
          </button>
        </div>}
      </Carousel>
    </div>
  );
};
