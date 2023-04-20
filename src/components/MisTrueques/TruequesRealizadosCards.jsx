import React from 'react';
import {dataProducts} from './util/dataProductsCards';
import misTruequesImagenes from './misTruequesImagenes.js';

const TruequesRealizadosCards = () => {
    return (
        <> {
            dataProducts.map(dataProducts => (
                <div className='card'
                    style={
                        {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            width: "300px",
                            height: "450px",
                            border: "3px solid lightgray",
                            boxShadow: "1px 2px 8px 4px #d3d3d3d1",
                            borderRadius: "15px",
                            backgroundColor: "white"
                        }
                }>


                    <div className='body'
                        style={
                            {backgroundColor: "#FFFFFF"}
                    }>

                        <img alt=""
                            src={
                                misTruequesImagenes.pimiento
                            }
                            style={
                                {
                                    width: "300px",
                                    height: "300px"

                                }
                            }/>


                    </div>
                    <div>
                        <p style={
                            {
                                fontSize: "23px",
                                textAlign: "center",
                                fontFamily: "openSans",
                                fontWeight: "bold"
                            }
                        }>
                            {

                            dataProducts.productName
                        } </p>


                    </div>
                    <div>
                        <p style={
                            {
                                fontSize: "16px",
                                textAlign: "center",
                                fontFamily: "openSans"
                            }
                        }>
                            {

                            dataProducts.usuarioProduct
                        } </p>
                    </div>

                    {/* div contenedor de boton */}
                    <div style={
                        {alignItems: "center"}
                    }>
                        <a href="#">
                            <button style={
                                {
                                    backgroundColor: "#63FF80",
                                    fontWeight: "bold",
                                    height: "40px",
                                    width: "200px",
                                    border: "none",
                                    color: "black",
                                    marginLeft: "50px",
                                    marginBottom: "40px",
                                    textAlign: "center",
                                    display: "inlineBlock",
                                    fontSize: "15px",
                                    borderRadius: "12px"
                                }
                            }>
                                Revisar truque
                            </button>
                        </a>


                    </div>
                </div>
            ))
        } </>

    )
}

export default TruequesRealizadosCards
