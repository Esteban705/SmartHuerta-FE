import React, { useState } from "react";
import "./App.css";
import "./assets/main.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { HttpMethods } from "./components/Context/httpContext";
import { UserMethods } from "./components/Context/useContext";
import { HouseMethods } from "./components/Context/houseContext";
import LoginUi from "./components/Login/LoginUi";
import { MapPage } from "./components/map/MapPage";
import Navbar from "./components/Navigation/Navbar";
import { UserPerfilPage } from "./components/user/UserPerfilPage";
import { ArticleMethods } from "./components/Context/articleContext";
import PageNotFound from "./utils/PageNotFound";
import UsuariosDeSH from "./components/About/UsuariosDeSH";
import MisTruequesComponent from "./components/MisTrueques/MisTruequesComponent";
import AboutSH from "./components/About/AboutSH";
import SmartComponentInfo from "./components/About/SmartComponentInfo";

function App() {
  const [logged, setLogged] = useState(true);

  return (
    <HttpMethods>
      <UserMethods>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/Mapa"
            element={
              <HouseMethods>
                <MapPage />
              </HouseMethods>
            }
          />
          <Route
            path="/Perfil"
            element={
              <ArticleMethods>
                <UserPerfilPage />
              </ArticleMethods>
            }
          />
        </Routes>
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
                <Route path="perfil" element={<UserPerfil />} />
                <Route path="usuarios" element={<UsuariosDeSH />}></Route>
                <Route
                  path="mistrueques"
                  element={<MisTruequesComponent />}
                ></Route>
                <Route path="smart" element={<SmartComponentInfo />} />
              </Routes>
            </div>
          </>
        )}{" "}
      </UserMethods>
    </HttpMethods>
  );
}

export default App;
