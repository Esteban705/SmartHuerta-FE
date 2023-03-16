import React, { useState } from "react";
import "./App.css";
import "./assets/main.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { HttpMethods } from "./components/Context/httpContext";
import { UserMethods } from "./components/Context/useContext";
import { HouseMethods } from "./components/Context/houseContext";
import LoginUi from "./components/Login/LoginUi";
import { MapPage } from "./components/map/MapPage";
import UserPerfil from "./components/user/UserPerfil";
import Navbar from "./components/Navigation/Navbar";
import PageNotFound from "./utils/PageNotFound";
import AboutUs from "./components/About/AboutUs";
import MisTruequesComponent from "./components/MisTrueques/MisTruequesComponent";

function App() {
  const [logged, setLogged] = useState(true);

  return (
    <HttpMethods>
      <UserMethods>
        <Navbar /> {/* Verificamos si usuario está logeado */}
        {!logged ? (
          <>
            <Routes>
              <Route path="/login" index={true} element={<LoginUi />} />
              <Route path="*" element={<Navigate to="login" replace />} />
            </Routes>
          </>
        ) : (
          <>
            <div style={{ marginTop: "4rem" }}>
              {" "}
              {/* Ruta principal "/" = MapPage */}
              <Routes>
                <Route
                  path="/"
                  index={true}
                  element={
                    <HouseMethods>
                      <MapPage />
                    </HouseMethods>
                  }
                />{" "}
                {/* Ruta no encontrada, manda a ruta principal*/}
                <Route path="*" element={<PageNotFound />} /> {/* Rutas */}
                <Route
                  path="/Mapa"
                  element={
                    <HouseMethods>
                      <MapPage />
                    </HouseMethods>
                  }
                />
                <Route path="/perfil" element={<UserPerfil />} />
                <Route path="about" element={<AboutUs />}></Route>
                <Route
                  path="mistrueques"
                  element={<MisTruequesComponent />}
                ></Route>
              </Routes>
            </div>
          </>
        )}{" "}
      </UserMethods>
    </HttpMethods>
  );
}

export default App;
