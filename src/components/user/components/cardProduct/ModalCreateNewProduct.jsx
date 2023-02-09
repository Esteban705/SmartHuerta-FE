import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Typography,
  Box,
  Grid,
  TextField,
  InputLabel,
  CardMedia,
  Divider,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import GreenButton from "../../../../shared/helpers/GreenButton";
import globalStyles from "../../../GlobalStyles/globalStyles";
const ModalCreateNewProduct = ({
  handleCloseModal,
  openModalCreateProduct,
}) => {
  const useStyles = makeStyles(() => ({
    root: {
      maxWidth: "16rem",
      height: "22rem",
      padding: "0.2rem",
      margin: "0.5rem 0",
      borderRadius: "0.5rem",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    content: {
      padding: "0 1rem",
    },
  }));

  const classes = useStyles();
  return (
    <Dialog
      // width
      maxWidth={"80vw"}
      open={openModalCreateProduct }
      onClose={handleCloseModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Grid
        container
        style={{ backgroundColor: `${globalStyles.backgroundColorFooter}` }}
      >
        <Grid
          spacing={2}
          justifyContent="center"
          style={{ padding: "2rem", width: "40vw", height: "70vh" }}
        >
          <Typography
            variant="h5"
            color="initial"
            style={{ paddingBottom: "1rem" }}
          >
            Agregar Producto
          </Typography>
          <Grid item>
            <TextField
              fullWidth
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
              label="Nombre del producto"
              placeholder="Nombre del producto"
            />
            <Autocomplete
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
              options={["Fruta", "Verdura", "Otro"]}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField {...params} label="Categoria" />
              )}
            />
            <TextField
              fullWidth
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
              label="Cantidadr"
              placeholder="cantidad"
              type="number"
            />
            <TextField
              fullWidth
              style={{ paddingTop: "1rem", paddingBottom: "0.3rem" }}
              label="Multiline"
              multiline
              rows={8}
              defaultValue={""}
              variant="outlined"
            />
            <div style={{display:'flex', justifyContent: 'center', paddingTop:'0.5rem'}}>
              <Button
                onClick={()=>console.log("Guardar Producto")}
                style={globalStyles.colorButtonPrimary}
                variant="contained"
                autoFocus
              >
                <Typography variant="button" style={{ fontWeight: "bold" }}>
                  Guardar
                </Typography>
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid
          style={{ width: "40vw" }}
          justifyContent="center"
          alignContent="center"
        >
          <Typography variant="h4" color="initial">
            Carrousel de imagenes
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <DialogActions>
        <Button onClick={handleCloseModal} color="black">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalCreateNewProduct;
