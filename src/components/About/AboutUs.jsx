import React from "react";
import Footer from "../Footer/Footer";
import UserCards from "./UserCards";


const AboutUs = () => {
    return (
        <> {/* Div contenedor de informacion acerca de nosotros */}
            <div style={
                {
                    marginTop: "5rem",
                    width: "100%",
                    height: "500px",
                    backgroundColor: "#A5FCBC"
                }
            }>
                {/* Div contenedor de titulo de acerca de nosotros */}
                <div>
                    <h1 style={
                        {
                            color: "#1F7345",
                            fontSize: "30px",
                            fontWeight: "bold",
                            textAlign: "center",
                            paddingTop: "2rem"
                        }
                    }>
                        Usuarios de la Comunidad de SMART HUERTA
                    </h1>
                </div>

                {/* Div contenedor de los parrafos de acerca de nosotros */}
                <div style={
                    {
                        marginTop: "15px",
                        marginLeft: "100px",
                        marginRight: "100px"
                    }
                }>
                    <p style={
                        {color: "#1F7345"}
                    }>
                        Lorem ipsum dolor sit amet consectetur,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                adipisicing elit.Maxime et,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                id atque odio,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                itaque error nesciunt reprehenderit porro iure necessitatibus expedita exercitationem ea eligendi reiciendis eaque asperiores !Repellat,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                similique blanditiis !</p>

                    <br/>

                    <p style={
                        {color: "#1F7345"}
                    }>
                        Lorem ipsum dolor sit amet consectetur,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        adipisicing elit.Maxime et,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        id atque odio,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        itaque error nesciunt reprehenderit porro iure necessitatibus expedita exercitationem ea eligendi reiciendis eaque asperiores !Repellat,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        similique blanditiis !</p>

                    <br/>

                    <p style={
                        {color: "#1F7345"}
                    }>
                        Lorem ipsum dolor sit amet consectetur,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                adipisicing elit.Maxime et,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                id atque odio,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                itaque error nesciunt reprehenderit porro iure necessitatibus expedita exercitationem ea eligendi reiciendis eaque asperiores !Repellat,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                similique blanditiis !</p>

                    <br/>
                    <p style={
                        {color: "#1F7345"}
                    }>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime et, id atque odio, itaque error nesciunt reprehenderit porro iure necessitatibus expedita exercitationem ea eligendi reiciendis eaque asperiores! Repellat, similique blanditiis!
                    </p>
                </div>
            </div>
            {/* Div contenedor de la card */}
            <div style={
                {
                    marginLeft: "4.7rem",
                    marginTop: "5rem",
                    display: "grid",
                    gridTemplateRows: "1fr 1fr 1fr ",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "50px",
                    height: "1000px"
                }
            }>

                <UserCards/>


            </div>
            {/* Div contenedor del boton "ver mas" */}
            <div style={
                {

                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                }

            }>
                <a href="#">
                    <button style={
                        {
                            backgroundColor: "#777777",
                            fontWeight: "bold",
                            height: "40px",
                            width: "200px",
                            border: "none",
                            color: "black",
                            marginBottom: "2rem",
                            textAlign: "center",
                            display: "inlineBlock",
                            fontSize: "15px",
                            borderRadius: "12px"
                        }
                    }>

                        <p>Ver más</p>
                    </button>
                </a>

            </div>

            <Footer/>

        </>
    );
};;

export default AboutUs;
