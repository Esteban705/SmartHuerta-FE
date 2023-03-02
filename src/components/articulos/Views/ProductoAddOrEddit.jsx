import {
  Button,
  Chip,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Formik } from "formik";
import React, { useState } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { handleUpgradeImg } from "../helpers/transformImg";
import { HttpContext } from "../../Context/httpContext";
import { useContext } from "react";
import { useEffect } from "react";
import { loader } from "../../../utils/loader";
import { LoadingSkeleton } from "./LoadingSkeleton";

export const ProductoAddOrEddit = ({
  hanldeSubmitForm,
  dataImg,
  setDataImg,
  allCategories,
  allHomes,
  userData,
  prodructData,
}) => {
  const { loading } = useContext(HttpContext);

  const uploadImage = async (image) => {
    if (!image) return;

    await handleUpgradeImg(image, setDataImg, dataImg);
  };

  const handleDeleteImage = (imgName) => {
    const imageAllFilter = dataImg.filter(
      (dataToFilter) => dataToFilter.name !== imgName.name
    );

    setDataImg(imageAllFilter);
  };

  const { getProduct } = prodructData;
  console.log({dataImg})

  return (
    <Formik
      initialValues={{
        productName: getProduct.productName ??  "",
        coments: getProduct.productName ??  "",
        categories: getProduct.categories ??  [],
        home: getProduct.idHome ?? allHomes,
        cantidad:  getProduct.cantidad ??  "",
        userId: userData.id,
      }}
      onSubmit={(values) => {
        hanldeSubmitForm(values, dataImg);
      }}
    >
      {(props) => (
        <form style={{ display: "grid" }} onSubmit={props.handleSubmit}>
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <Grid
              container
              style={{ width: "100%" }}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
               Agregar Producto
              </h1>
              <FormControl
                style={{
                  width: "80%",
                }}
              >
                <TextField
                  id="standard-basic"
                  label="Nombre"
                  type="text"
                  style={{ marginTop: "3%" }}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.productName}
                  name="productName"
                />
                <TextField
                  id="standard-basic"
                  label="Comentarios"
                  type="text"
                  style={{ marginTop: "3%" }}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.coments}
                  name="coments"
                />
                <Autocomplete
                  multiple
                  name="categories"
                  onChange={(e, value) =>
                    props.setFieldValue("categories", value)
                  }
                  id="tags-outlined"
                  options={allCategories}
                  getOptionLabel={(option) => option.name}
                  defaultValue={props.values.categories}
                  getOptionSelected={(option, value) => option._id === value._id}
                  style={{ marginTop: "3%" }}
                  filterSelectedOptions
                  disableCloseOnSelect
                  limitTags={1}
                  size="small"
                  renderInput={(params) => (
                    <TextField {...params} label="Categorias" />
                  )}
                />
                <Autocomplete
                  multiple
                  id="size-small-standard"
                  size="small"
                  style={{ marginTop: "3%" }}
                  options={allHomes}
                  getOptionLabel={(option) => option.name}
                  defaultValue={props.values.home}
                  filterSelectedOptions
                  onChange={(e, value) => props.setFieldValue("home", value)}
                  getOptionSelected={(option, value) => option._id === value._id}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Casa"
                      placeholder="Selecciona Casa"
                    />
                  )}
                />

                <TextField
                  id="standard-basic"
                  label="Cantidad (KG)"
                  type="number"
                  style={{ marginTop: "3%" }}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.cantidad}
                  name="cantidad"
                />

                <div
                  style={{
                    display: " flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%",
                  }}
                >
                  <h1>Subir Imagen</h1>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="icon-button-file"
                    type="file"
                    onChange={(e) => uploadImage(e.target.files[0], props)}
                  />

                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <CloudUploadIcon />
                    </IconButton>
                  </label>
                </div>

                <div style={{ justifyContent: "center" }}>
                  {!!dataImg.length &&
                    dataImg.map((fileData) => (
                      <Chip
                        key={fileData?.name}
                        style={{ marginBottom: "5px", marginLeft: "2%" }}
                        /*  avatar={<ImageIcon/>} */
                        color="primary"
                        size="small"
                        label={fileData?.name.substring(0, 8)}
                        onDelete={(e) => handleDeleteImage(fileData)}
                      />
                    ))}
                </div>
              </FormControl>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  style={{ background: "#3CDE85" }}
                >
                  Guardar
                </Button>
              </div>
            </Grid>
          )}
        </form>
      )}
    </Formik>
  );
};
