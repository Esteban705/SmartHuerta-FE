import {
  Button,
  Dialog,
  DialogActions,
  Typography,
  Grid,
  TextField,
  Divider,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import globalStyles from "../../../GlobalStyles/globalStyles";

const ModalCreateNewProduct = ({
  handleCloseModal,
  openModalCreateProduct,
}) => {
  return (
    <Dialog
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
              minRows={8}
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
