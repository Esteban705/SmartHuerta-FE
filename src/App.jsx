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
import Navbar from "./components/Navigation/Navbar"


function App() {
  return (
    <HttpMethods>
      <UserMethods>
        <Router>
          <Navbar />
          {/* <Switch> */}
            <Route path="/login">
              <Login />
            </Route>
            <div style={{ marginTop: "4rem", height: "calc(100vh - 65px)" }}>
              <Route path="/Mapa">
                <MapPage />
              </Route>
              <Route path="/Perfil">
                <UserPerfil />
              </Route>
            </div>
          {/* </Switch> */}
        </Router>
      </UserMethods>
    </HttpMethods>
  );
}

export default App;
