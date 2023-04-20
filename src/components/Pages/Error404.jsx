import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";

import { Link } from "react-router-dom";
import {
  buttonNavStyles,
  textItemsNavbar,
} from "../Navigation/styles/NavbarStyles";

const Error404 = () => {
  return (
    <>
      <Paper
        style={{
          margin: "5rem 0 ",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" align="center">
          ERROR 404 😵
        </Typography>
        <Typography variant="h2" align="center">
          Not Found 🌱
        </Typography>

        <Link to={"/mapa"} style={{ marginTop: "3rem 0" }}>
          <Button sx={buttonNavStyles}>
            <Typography variant="button" style={textItemsNavbar}>
              {"Volver a SmartHuerta 👨‍🌾"}
            </Typography>
          </Button>
        </Link>
      </Paper>
    </>
  );
};

export default Error404;
