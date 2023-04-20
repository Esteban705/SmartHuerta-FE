import React, {useContext} from "react";
import {
    AppBar,
    Container,
    Toolbar,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import DrawerNavbar from "./DrawerNavbar";
import ListItemsNavbar from "./ListItemsNavbar";
import { toolbarXl } from "./styles/NavbarStyles";
import { UserContext } from "../Context/useContext";
import { useQuery } from "react-query";

const pages = ["mapa", "usuarios", "trueques", "nosotros", "contacto"];
const userSettings = ["Trueques", "Configuraciones", "Logout"];

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const { getUserData, dataUser } = useContext(UserContext);
  const dataOfUser = dataUser();

  const { data: userData, isLoading } = useQuery(
    ["userData", dataOfUser.id],
    () => getUserData(dataOfUser.id)
  );


  return (
    <AppBar color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters style={toolbarXl}>
          {isMatch ? (
            <DrawerNavbar pages={pages} userData={userData} />
          ) : (
            <ListItemsNavbar pages={pages} userData={userData} />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};


export default Navbar;
