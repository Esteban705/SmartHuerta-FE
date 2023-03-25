import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useContext } from "react";
import { UserContext } from "../Context/useContext";
import SettingsIcon from "@material-ui/icons/Settings";
import { colorButton } from "../Login/Styles/LoginStyles";
import CardAddNewProduct from "../Products/cardProduct/CardAddNewProduct";
import ModalEditUserProfile from "./components/editProfile/ModalEditUserProfileServices";
import CardProduct from "../Products/cardProduct/CardProduct";
import { userPerfilStyles } from "./styles/userPerfilStyles";
import { HttpContext } from "../Context/httpContext";

const UserPerfil = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = userPerfilStyles();

  const { loading } = useContext(HttpContext);
  const { getUserData, dataUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const dataOfUser = dataUser();

  const [openEditProfileModal, setOpenEditProfileModal] = useState(false);
  const [userData, setUserData] = useState();

  const handleClosetModalArticle = () => {
    setOpen(false);
  };

  const handleOpenProfilModal = () => {
    setOpenEditProfileModal(true);
  };
  const handleCloseModalProfile = () => {
    setOpenEditProfileModal(false);
  };

  const getUsarData = async () => {
    const data = await getUserData(dataOfUser.id);
    setUserData(data);
    return data;
  };

  useEffect(() => {
    getUsarData();
  }, []);

 
  return (
    <>
      {!loading && (
        <Container className={classes.deskstopRoots}>
          <Paper
            variant={10}
            className={isMatch ? classes.mobilePaper : classes.deskPaper}
          >
            <Grid
              container
              spacing={2}
              className={
                isMatch
                  ? classes.mobileUserDataContainer
                  : classes.deskUserDataContainer
              }
            >
              <Grid item>
                {userData?.usuario.imgId ? (
                  <Avatar
                    src={userData?.usuario.imgId.dataImg}
                    style={{ width: "10rem", height: "10rem" }}
                  />
                ) : (
                  <Avatar
                    style={{
                      width: "10rem",
                      height: "10rem",
                      backgroundColor: "green ",
                    }}
                  >
                    <Typography variant="h1">
                      {userData?.usuario.name.slice(0, 2).toUpperCase()}
                    </Typography>
                  </Avatar>
                )}
              </Grid>
              <Grid
                item
                xs={12}
                sm
                container
                className={classes.mobileInfoUser}
              >
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h6" component="div">
                      {userData?.usuario.name || "undefined user"}
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      style={{ padding: "0.5rem 0 0.5rem 1.5rem" }}
                    >
                      {userData?.usuario.description || "Sin descripcion..."}
                    </Typography>
                  </Grid>
                  {/* Contador de seguidores productos y trueques */}
                  <Grid item container direction="row">
                    <Typography
                      variant="body2"
                      className={
                        isMatch ? classes.mobileCounters : classes.deskCounters
                      }
                    >
                      <Chip label="Seguidores : 10" variant="outlined" />
                    </Typography>
                    <Typography
                      variant="body2"
                      className={
                        isMatch ? classes.mobileCounters : classes.deskCounters
                      }
                    >
                      <Chip label="Productos : 5" variant="outlined" />
                    </Typography>
                    <Typography
                      variant="body2"
                      className={
                        isMatch ? classes.mobileCounters : classes.deskCounters
                      }
                    >
                      <Chip label="Trueques : 14" variant="outlined" />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* editar perfil */}
              <Grid item>
                <Button
                  variant="contained"
                  style={colorButton}
                  endIcon={<SettingsIcon />}
                  onClick={handleOpenProfilModal}
                >
                  <Typography
                    sx={{ cursor: "pointer" }}
                    variant="button"
                    style={{ fontWeight: "bold" }}
                  >
                    EDITAR PERFIL
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <ModalEditUserProfile
              userData={userData}
              openEditProfileModal={openEditProfileModal}
              handleCloseModalProfile={handleCloseModalProfile}
            />
            <Divider />

            <Grid
              className={
                isMatch
                  ? classes.CardProductsContainer
                  : classes.deskCardProductsContainer
              }
              container
              justifyContent="space-evenly"
            >
              <Grid item>
                <div>
                  <CardAddNewProduct />
                </div>
              </Grid>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((key, value) => (
                <Grid item>
                  <CardProduct
                    key={key}
                    productTittle={"manzanas"}
                    productDescription={"manzanas rojas ricas pa"}
                    productImages={""}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      )}
    </>
  );
};

export default UserPerfil;
