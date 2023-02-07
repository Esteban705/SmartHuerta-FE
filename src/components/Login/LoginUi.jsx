import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";
import "../../assets/tailwind.css";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import {
  paperLogin,
 
  bgColorLogo, 
 
} from "./Styles/LoginStyles";

import { Grid, Box, Paper } from "@material-ui/core";
import { useContext } from "react";
import { HttpContext } from "../Context/httpContext";
import { UserContext } from "../Context/useContext";
import LoginLogoicon from "./Images/LoginLogo.icon";
import css from "../../cssModules/Login.module.css";


const LoginUi = () => {
  const [loginOption, setLoginOption] = useState("login");
  const { post } = useContext(HttpContext);
  const { saveUser } = useContext(UserContext);

  const changueToLogin = (value) => {
    setLoginOption(value);
  };
  const changueToRegister = (value) => {
    setLoginOption(value);
  };
  

  const registerUser = async (body) => {
    try {
      const data = await post("/api/auth/new", body);
      const userRegister = {
        ...data,
        isNew: true,
      };
      saveUser(userRegister)
      return userRegister;
    } catch (error) {
      console.log(error, "eerrror");
      window.alert("Usuario no registrado Error en el sistema");
    }
  };

  const loginUser = async (body) => {
    try {
      const userData = await post("/api/auth/", body);
      
      saveUser(userData)
      return userData;
    } catch (error) {
      console.log(error, "rror");
      window.alert("Error en el sistema");
    }
  };

  return (
    <>
      <Grid container className={`${styles.bgimage}`}>
        <Paper elevation={10} xs={12} style={paperLogin}>
          <Box style={bgColorLogo}>
            <div>
         <LoginLogoicon/>
            </div>
          </Box>
          {loginOption === "login" ? (
            <LoginForm
              changueToRegister={changueToRegister}
              loginUser={loginUser}
            />
          ) : (
            <RegisterForm
              changueToLogin={changueToLogin}
              registerUser={registerUser}
            />
          )}
        </Paper>
      </Grid>
    </>
  );
};

export default LoginUi;
