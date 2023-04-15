import React from "react";
import "./App.css";
import "./assets/main.css";
import { Routes, Route, Router } from "react-router-dom";
import { HttpMethods } from "./components/Context/httpContext";
import { UserMethods } from "./components/Context/useContext";
import { HouseMethods } from "./components/Context/houseContext";
import Login from "./components/Login/LoginUi";
import { MapPage } from "./components/map/MapPage";
import Navbar from "./components/Navigation/Navbar";
import { UserPerfilPage } from "./components/user/UserPerfilPage";
import { ArticleMethods } from "./components/Context/articleContext";

function App() {
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
          <Route path="/Perfil" element={
            <ArticleMethods>
          <UserPerfilPage />
          </ArticleMethods>
          } />
        </Routes>
      </UserMethods>
    </HttpMethods>
  );
}

export default App;

