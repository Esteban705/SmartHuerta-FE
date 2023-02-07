import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import DrawerNavbar from "./DrawerNavbar";
import ListItemsNavbar from "./ListItemsNavbar";
import { toolbarXl } from "./styles/NavbarStyles";
import { useLocation } from "react-router";


const pages = ["Mapa", "Usuarios", "Trueques", "Nosotros","Contacto"];

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();



  // const userLog = localStorage.getItem("user");
  // const userLoger = parseInt(localStorage.getItem("user"));

  // console.log(getUserData());
if(!location.pathname.includes("login")) {


  return (
    <AppBar color="white">
      <Container maxWidth="xl">
        <Toolbar disableGutters style={toolbarXl}>
          {isMatch ? (
            <DrawerNavbar pages={pages} />
          ) : (
            <ListItemsNavbar
              pages={pages}
            />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  ); 
} else {
 return (
  <>
  </>
  )
}
};


export default Navbar;
