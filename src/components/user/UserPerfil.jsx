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
} from "@material-ui/core";
import { useContext } from "react";
import { UserContext } from "../Context/useContext";
import SettingsIcon from "@material-ui/icons/Settings";
import { colorButton } from "../Login/Styles/LoginStyles";
// import { Pagination } from "@material-ui/lab";
import CardAddNewProduct from "./components/cardProduct/CardAddNewProduct";
import globalStyles from "../GlobalStyles/globalStyles";
import EditProfileUserPage from "./components/editProfile/EditProfileUserPage";
import CardProduct from "./components/cardProduct/CardProduct";
import { HttpContext } from "../Context/httpContext";
import { ArticuloPage } from "../articulos/ArticuloPage";

const UserPerfil = () => {
  const { getUserData, dataUser } = useContext(UserContext);
  const { get } = useContext(HttpContext);
  const dataOfUser = dataUser();
  const [allProduct, setAllProduct] = useState([]);

  const getAllProduct = async () => {
    const allProducts = await get(`/api/product/allproducts/${dataOfUser.id}`);
    if (!allProducts.ok) return console.log("error");
    setAllProduct(allProducts.getAllProduct);
  };

  const [openEditProfileModal, setOpenEditProfileModal] = useState(false);
  const [openModalCreateProduct, setOpenModalCreateProduct] = useState(false);
  const [valueEditt, setValueEditt] = useState()

  console.log(openModalCreateProduct);


 const handleClickOpenModal = () => {
  setOpenModalCreateProduct(true)
 }

 const handleClosetModalArticle = () => {
  setOpenModalCreateProduct(false)
 }


  const [userData, setUserData] = useState();

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
    getAllProduct();
    getUserData(dataOfUser.id);
  }, []);

  
  return (
    <Container style={{ padding: "1rem" }}>
      <Paper variant={10} style={{ padding: "2rem" }}>
        <Grid container spacing={2} style={{ marginBottom: "2rem" }}>
          <Grid item>
            {/* Poner una condicion, si el ususario tiene foto renderiza este avatar sino renderiza el de la letra
              que es el de abajo que esta comentado*/}
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8iVTbxjuWrbh4TKqQq7N_i51ftTZsY9y4WA&usqp=CAU"
              // src={`${userData.ImgProfileUri}`}
              style={{ width: "10rem", height: "10rem" }}
            />

            {/* <Avatar
                style={{ width: "10rem", height: "10rem" }}
              >
                <Typography variant="h1">{userData.name.slice(0, 2).toUpperCase()}</Typography>
              </Avatar> */}
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6" component="div">
                  {/* {userData.name.toUpperCase()} */}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  magni eum recusandae totam, delectus voluptate. Minus, maiores
                  voluptatem saepe esse accusantium assumenda atque, sint
                  nesciunt ad tempore architecto. Nulla provident aperiam
                </Typography>
              </Grid>
              <Grid item container direction="row">
                <Typography
                  variant="body2"
                  style={{ marginRight: "2rem", fontWeight: "bold" }}
                >
                  <Chip label="Seguidores : 10" variant="outlined" />
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginRight: "2rem", fontWeight: "bold" }}
                >
                  <Chip label="Productos : 5" variant="outlined" />
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginRight: "2rem", fontWeight: "bold" }}
                >
                  <Chip label="Trueques Realizados : 14" variant="outlined" />
                </Typography>
              </Grid>
            </Grid>

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
        </Grid>
        <EditProfileUserPage
          openEditProfileModal={openEditProfileModal}
          handleCloseModalProfile={handleCloseModalProfile}
        />

        <Divider />

        <Grid
          style={{
            backgroundColor: `${globalStyles.backgroundColorFooter}`,
            marginTop: "1rem",
          }}
          container
          justifyContent="space-evenly"
        >
          <Grid item>
            <CardAddNewProduct
              setOpenModalCreateProduct={setOpenModalCreateProduct}
              openModalCreateProduct={openModalCreateProduct}
            />
          </Grid>

          {[allProduct ?? []].map((value) => (
            <Grid item>
              <CardProduct
                key={value}
                value={value}
                setValueEditt={setValueEditt}
                openModalCreateProduct={openModalCreateProduct}
                handleClickOpenModal={handleClickOpenModal}
                handleClosetModalArticle={handleClosetModalArticle}
              />
            </Grid>
          ))}
        </Grid>
        <ArticuloPage
        open={openModalCreateProduct}
        handleClosetModalArticle={handleClosetModalArticle}
        value={valueEditt}
      />
      </Paper>
    </Container>
  );
};

export default UserPerfil;
