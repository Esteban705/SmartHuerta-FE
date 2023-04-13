import React from "react";
import Footer from "../Footer/Footer";
import InfoAcordeon from "../About/InfoAcordeon";
import SHAboutComponent from "../About/AboutSH";

const SmartComponentInfo = () => {
  return (
    <>
      <div style={{}}>
        {" "}
        <SHAboutComponent />
      </div>

      <div>
        <h2>Nuestra misión</h2>
        <InfoAcordeon />
      </div>
      <div>
        <h2>Nuestras bases</h2>
        <InfoAcordeon />
      </div>

      <Footer />
    </>
  );
};
export default SmartComponentInfo;
