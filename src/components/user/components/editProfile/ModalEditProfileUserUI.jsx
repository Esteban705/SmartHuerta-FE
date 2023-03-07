import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import React, { useState } from "react";
import globalStyles from "../../../GlobalStyles/globalStyles";


const useStyles = makeStyles((theme) => ({
  imgProfile: {
    width: "10rem",
    height: "10rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  leterProfile:{
    width: "10rem",
    height: "10rem",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "green "
  }
}))

const EditProfileUserUI = ({
  userData,
  openEditProfileModal,
  handleCloseModalProfile,
}) => {
  const [imagenPerfil, setImagenPerfil] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();


  return (
    <Dialog
      style={{}}
      // open={true}
      open={openEditProfileModal}
      onClose={handleCloseModalProfile}
    >
      <Grid
        direction="column"
        style={{
          backgroundColor: `${globalStyles.backgroundProductsUserColor}`,
          display: "flex",
        }}
      >
        <Grid item>
          {userData?.usuario.imgId ? (
            <Avatar
              src={userData?.usuario.imgId}
              className={classes.imgProfile}
              // style={userPerfilStyles.imgProfile}
            />
          ) : (
            <Avatar
              // style={userPerfilStyles.leterProfile}
              className={classes.leterProfile}
            >
              <Typography variant="h1">
                {userData?.usuario.name.slice(0, 2).toUpperCase()}
              </Typography>
            </Avatar>
          )}
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0.5rem",
          }}
        >
          <input
            // accept="image/*"
            style={{ display: "none" }}
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <Button
              color="default"
              startIcon={<PhotoCamera />}
              component="span"
            >
              Editar Foto
            </Button>
          </label>
        </Grid>
      </Grid>

      <Grid spacing={2} justifyContent="center" style={{ padding: "2rem" }}>
        <Typography
          variant="h5"
          color="initial"
          style={{ paddingBottom: "1rem" }}
        >
          EDITAR PERFIL
        </Typography>
        <Grid item>
          <TextField
            fullWidth
            style={{
              paddingTop: "0.3rem",
              paddingBottom: "0.3rem",
              color: "black",
            }}
            label="Email"
            placeholder="Email"
            value={userData?.usuario.email}
            disabled={true}
          />
          <TextField
            fullWidth
            style={{
              paddingTop: "0.3rem",
              paddingBottom: "0.3rem",
              color: "black",
            }}
            label="Nombre de usuario"
            placeholder="Nombre de usuario"
            value={userData?.usuario.name}
          />
          <TextField
            fullWidth
            style={{ paddingTop: "1rem", paddingBottom: "0.3rem" }}
            label="Descripcion"
            multiline
            minRows={4}
            defaultValue={userData?.usuario.description}
            variant="outlined"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "0.5rem",
            }}
          >
            <Button
              onClick={() => console.log("Guardar Configuraciones")}
              style={globalStyles.colorButtonPrimary}
              variant="contained"
            >
              <Typography variant="button" style={{ fontWeight: "bold" }}>
                Guardar
              </Typography>
            </Button>
          </div>
        </Grid>
      </Grid>
      <DialogActions>
        <Divider />
        <Button onClick={handleCloseModalProfile} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfileUserUI;
