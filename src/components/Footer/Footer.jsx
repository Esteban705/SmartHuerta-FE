import React from 'react'
import imagenes from '../About/imagenes';

const Footer = () => {
    return (
        <div style={
            {
                weight: "100%",

                height: "100px",

                backgroundColor: "#C0C9AF",
                display: "grid",
                gridTemplateRows: "100px 100px",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridGap: "5px"

            }
        }>
            <div>
                <p style={
                    {
                        color: "#1F7345",
                        fontSize: "20px",
                        textAlign: "center",
                        marginTop: "20px"

                    }
                }>Redes sociales</p>
                <div style={
                    {
                        display: "flex",
                        paddingLeft: "158px"
                    }
                }>
                    <a href="https://instagram.com" target="_blank">

                        <img style={
                                {
                                    width: "40px",
                                    height: "40px"

                                }
                            }
                            src={
                                imagenes.instagramIcon
                        }></img>
                    </a>
                    <a href="https://tiktok.com" target="_blank">

                        <img style={
                                {
                                    width: "40px",

                                    height: "40px"

                                }
                            }
                            src={

                                imagenes.tiktokIcon
                            }/>
                    </a>
                    <a href="https://facebook.com" target="_blank">

                        <img style={
                                {
                                    width: "40px",
                                    height: "40px"
                                }
                            }
                            src={
                                imagenes.facebookIcon
                            }/>
                    </a>
                </div>

            </div>

            {/* CopyRight icon & info */}
            {/* <br/>
            <br/>
            <br/> */}
            <div style={
                {}
            }>
                <a href="https://linkedin.com/smartgroup" target="_blank">

                    <p style={
                        {
                            color: "#1F7345",
                            fontSize: "15px",
                            textAlign: "center",
                            marginTop: "50px",
                            fontWeight: "bold"


                        }
                    }>Todos los derechos Reservados<img style={
                                {
                                    height: "15px",
                                    width: "15px",
                                    display: "inline-block",
                                    marginLeft: "2px"
                                }
                            }
                            src={
                                imagenes.copyIcon
                            }/>
                    </p>
                </a>
            </div>
            <div>
                <p style={
                    {
                        color: "#1F7345",
                        fontSize: "20px",
                        textAlign: "center",
                        marginTop: "20px"


                    }
                }>Contactanos</p>
                <p style={
                    {
                        display: "flex",
                        color: "#1F7345",
                        fontSize: "15px",
                        marginLeft: "115px"


                    }
                }>Email: smarthuerta@info.com</p>
                <p style={
                    {
                        display: "flex",
                        color: "#1F7345",
                        fontSize: "15px",
                        marginLeft: "115px"


                    }
                }>Whatsapp de la comunidad: 3939438498</p>

            </div>

        </div>
    )
}

export default Footer
