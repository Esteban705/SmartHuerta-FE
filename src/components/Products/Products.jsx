import React from 'react';
import Footer from '../Footer/Footer';
import ProductsCards from './ProductsCards';


const Products = () => {
    return (
        <> {/* Div contenedor de titulo de Productos */}
            <div>
                <h1 style={
                    {
                        color: "black",
                        fontSize: "30px",
                        fontWeight: "bold",
                        textAlign: "center",
                        paddingTop: "2rem"
                    }
                }>
                    Mis Productos
                </h1>
                <div className='menu-categorias'
                    style={
                        {
                            fontSize: "16px",
                            display: "flex",
                            paddingLeft: "4rem",
                            paddingTop: "2rem"

                        }
                }>
                    <label>Filtrar</label>
                    <select className="categorias" id="categorias">
                        <option value="" selected disabled>Categorias</option>
                        <option value="frutas">Frutas</option>
                        <option value="verduras">Verduras</option>
                        <option value="hortalizas">Hortalizas</option>
                    </select>
                    <div style={
                        {
                            display: "grid",
                            position: "absolute",
                            right: "3rem",
                            top: "11rem"
                        }
                    }>
                        <h3>
                            Cantidad de Productos: 5
                        </h3>
                    </div>
                </div>


            </div>

            {/* Div contenedor de Cards */}
            <div style={
                {
                    marginTop: "5rem",
                    width: "100%",
                    height: "1000px",
                    backgroundColor: "#AFFFBE"

                }
            }>
                {/* Cards */}
                <div style={
                    {
                        marginLeft: "4.7rem",
                        paddingTop: "2rem",
                        display: "grid",
                        gridTemplateRows: "1fr 1fr 1fr ",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "50px",
                        height: "1000px"

                    }
                }>
                    <ProductsCards/></div>

            </div>


            {/* Div contenedor del boton "ver mas" */}

            <div style={
                {

                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "4rem"
                }

            }>

                <a href="#">
                    <button style={
                        {
                            backgroundColor: "#777777",
                            height: "40px",
                            width: "200px",
                            border: "none",
                            color: "black",
                            marginBottom: "2rem",
                            textAlign: "center",
                            display: "inlineBlock",
                            fontSize: "20px",
                            borderRadius: "12px"
                        }
                    }>
                        <p>
                            Solicitar trueque
                        </p>
                    </button>
                </a>
            </div>

            <Footer/>


        </>


    )
}

export default Products
