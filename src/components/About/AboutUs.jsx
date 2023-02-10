import React from "react";
import Footer from "../Footer/Footer";
import UserCards from "./UserCards";
// import styles from '../../cssModules/AboutUs.module.css'

const AboutUs = () => {
    return (<>
        <div style={
            {
                marginTop: "5rem",
                width: "100%",
                height: "500px",
                backgroundColor: "#A5FCBC"


            }
        }>
            <div style={
                {}
            }>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                                                                                                                                                                                                                                                                                                                        dignissimos iure amet temporibus optio consequuntur non suscipit
                                                                                                                                                                                                                                                                                                                        placeat voluptate facere maiores dolorum corporis sequi quasi,
                                                                                                                                                                                                                                                                                                                        minima exercitationem, sint saepe officia.
                </p>
                <br/>
                <p style={
                    {color: "#1F7345"}
                }>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                                                                                                                                                                                                                                                                                                                        dignissimos iure amet temporibus optio consequuntur non suscipit
                                                                                                                                                                                                                                                                                                                        placeat voluptate facere maiores dolorum corporis sequi quasi,
                                                                                                                                                                                                                                                                                                                        minima exercitationem, sint saepe officia.
                </p>
                <br/>
                <p style={
                    {color: "#1F7345"}
                }>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                                                                                                                                                                                                                                                                                                                        dignissimos iure amet temporibus optio consequuntur non suscipit
                                                                                                                                                                                                                                                                                                                        placeat voluptate facere maiores dolorum corporis sequi quasi,
                                                                                                                                                                                                                                                                                                                        minima exercitationem, sint saepe officia.
                </p>
                <br/>
                <p style={
                    {color: "#1F7345"}
                }>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                                                                                                                                                                                                                                                                                                                        dignissimos iure amet temporibus optio consequuntur non suscipit
                                                                                                                                                                                                                                                                                                                        placeat voluptate facere maiores dolorum corporis sequi quasi,
                                                                                                                                                                                                                                                                                                                        minima exercitationem, sint saepe officia.
                </p>
            </div>
        </div>

        <div style={
            {
                marginLeft: "2rem",
                marginTop: "5rem",
                display: "grid",
                gridTemplateRows: "1fr 1fr 1fr ",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr ",
                gap: "0px",
                height: "100%"
            }
        }>
            <div style={
                {
                    display: "flex",
                    marginLeft: "10rem"
                }
            }>
                <UserCards/>
                <UserCards/>
                <UserCards/></div>
        </div>
        <Footer/>
    </>);
};

export default AboutUs;
