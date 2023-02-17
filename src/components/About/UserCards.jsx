import React from 'react'
import imagenes from '../About/imagenes';


const UserCards = () => {
    return (
        <>
            <div className='card'
                style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "300px",
                        height: "450px",
                        border: "1px solid lightgray",
                        boxShadow: "2px 2px 8px 4px #d3d3d3d1",
                        borderRadius: "15px"


                    }
            }>


                <div className='body'
                    style={
                        {backgroundColor: "#a8a8a8"}
                }>

                    <img alt=""
                        src={
                            imagenes.userIdea
                        }
                        style={
                            {
                                width: "300px",
                                height: "300px"
                            }
                        }/>


                </div>
                <div style={
                    {
                        fontSize: "23px",
                        textAlign: "center",
                        fontFamily: "openSans"

                    }
                }>
                    <p>Juan Perez</p>
                </div>

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
                            Ver Perfil
                        </button>
                    </a>


                </div>
            </div>
        </>

    )
}


export default UserCards
