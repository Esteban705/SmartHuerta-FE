import React from "react";
import "./App.css";
import "./assets/main.css";
import { Routes, Route, Router } from "react-router-dom";
import { HttpMethods } from "./components/Context/httpContext";
import { UserMethods } from "./components/Context/useContext";
import { HouseMethods } from "./components/Context/houseContext";
import Login from "./components/Login/LoginUi";
import { MapPage } from "./components/map/MapPage";
import UserPerfil from "./components/user/UserPerfil";
import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    // asd
    <HttpMethods>
      <UserMethods>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/mapa"
            element={
              <HouseMethods>
                <MapPage />
              </HouseMethods>
            }
          />
          <Route path="/Perfil" element={<UserPerfil />} />
        </Routes>
      </UserMethods>
    </HttpMethods>
  );
}

export default App;

