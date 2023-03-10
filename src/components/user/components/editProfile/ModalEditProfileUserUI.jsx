import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  Divider,
  FormControl,
  Grid,
  makeStyles,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { Formik } from "formik";
import React, { useState } from "react";
import { handleUpgradeImg } from "../../../articulos/helpers/transformImg";
import globalStyles from "../../../GlobalStyles/globalStyles";

const useStyles = makeStyles((theme) => ({
  imgProfile: {
    width: "10rem",
    height: "10rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  leterProfile: {
    width: "10rem",
    height: "10rem",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "green ",
  },
}));

const EditProfileUserUI = ({
  userData,
  openEditProfileModal,
  handleCloseModalProfile,
  hanldeSubmitForm,
}) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [dataImg, setDataImg] = useState("");

  const { usuario } = userData;

  const uploadImage = async (image) => {
    if (!image) return;
    console.log(image);

    await handleUpgradeImg(image, setDataImg, dataImg);
  };

  return (
    <Dialog
      style={{}}
      open={openEditProfileModal /* true */}
      onClose={handleCloseModalProfile}
    >
      <Formik
        initialValues={{
          email: usuario.email ?? "",
          name: usuario.name ?? "",
          description: usuario.description ?? "",
        }}
        onSubmit={(values) => {
          hanldeSubmitForm(values, dataImg, usuario._id);
        }}
      >
        {(props) => (
          <form style={{ display: "grid" }} onSubmit={props.handleSubmit}>
            <Grid
              container
              style={{ width: "100%" }}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <FormControl>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: `${globalStyles.backgroundProductsUserColor}`,
                    display: "flex",
                  }}
                >
                  <Grid item>
                    <Avatar
                      src={
                        dataImg[0]?.newEncodedPicture ?? usuario.imgId.dataImg
                      }
                      className={classes.imgProfile}
                    />
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
                      accept="image/*"
                      style={{ display: "none" }}
                      id="icon-button-file"
                      type="file"
                      onChange={(e) =>
                        uploadImage(e.target.files[0])
                      }
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
                      label="Email"
                      type="email"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.email}
                      name="email"
                      style={{
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        color: "black",
                      }}
                      disabled={true}
                    />
                    <TextField
                      fullWidth
                      label="Nombre de usuario"
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name}
                      name="name"
                      style={{
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        color: "black",
                      }}
                    />
                    <TextField
                      fullWidth
                      style={{ paddingTop: "1rem", paddingBottom: "0.3rem" }}
                      label="Descripcion"
                      name="description"
                      multiline
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.description}
                      minRows={4}
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
                        type="submit"
                        onClick={() => console.log("Guardar Configuraciones")}
                        style={globalStyles.colorButtonPrimary}
                        variant="contained"
                      >
                        <Typography
                          variant="button"
                          style={{ fontWeight: "bold" }}
                        >
                          Guardar
                        </Typography>
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
          </form>
        )}
      </Formik>

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
