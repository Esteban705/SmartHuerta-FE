import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";
import globalStyles from "../../../GlobalStyles/globalStyles";

const EditProfileUserUI = ({
  openEditProfileModal,
  handleCloseModalProfile,
}) => {

  const [imagenPerfil, setImagenPerfil] = useState()
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
          {/* Poner una condicion, si el ususario tiene foto renderiza este avatar sino renderiza el de la letra
              que es el de abajo que esta comentado*/}
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8iVTbxjuWrbh4TKqQq7N_i51ftTZsY9y4WA&usqp=CAU"
            // src={`${userData.ImgProfileUri}`}
            style={{
              width: "10rem",
              height: "10rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          {/* <Avatar
                style={{ width: "10rem", height: "10rem" }}
              >
                <Typography variant="h1">{userData.name.slice(0, 2).toUpperCase()}</Typography>
              </Avatar> */}
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0.5rem",
          }}
        >
          {/* <Button style={{ fontWeight: "bold" }}>
          
          Editar Foto
          </Button> */}
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

      <Grid
        spacing={2}
        justifyContent="center"
        style={{ padding: "2rem" }}
      >
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
            label="Nombre"
            placeholder="Nombre"
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
          />
          <TextField
            fullWidth
            style={{ paddingTop: "1rem", paddingBottom: "0.3rem" }}
            label="Descripcion"
            multiline
            minRows={4}
            defaultValue={""}
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
