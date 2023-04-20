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
import UserPerfil from "./components/user/UserPerfil";
import { useEffect } from "react";
import Error404 from "./components/Pages/Error404";

function App() {
  const [logged, setLogged] = useState(true);
  useEffect(() => {
    setLogged(!!localStorage.getItem("user"));
  }, []);

  return (
    // asd
    <HttpMethods>
      <UserMethods>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginUi />} />
          <Route
            path="/mapa"
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
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Navbar />
        {!logged && (
          <>
            <div style={{ marginTop: "4rem" }}>
              <Routes>
                <Route
                  path="/"
                  index={true}
                  element={
                    <HouseMethods>
                      <MapPage />
                    </HouseMethods>
                  }
                />
                <Route path="*" element={<Error404 />} />
                <Route
                  path="/Mapa"
                  element={
                    <HouseMethods>
                      <MapPage />
                    </HouseMethods>
                  }
                />
                <Route
                  path="mistrueques"
                  element={<MisTruequesComponent />}
                ></Route>
                <Route path="smart" element={<SmartComponentInfo />} />
              </Routes>
            </div>
          </>
        )}
      </UserMethods>
    </HttpMethods>
  );
}

export default App;
