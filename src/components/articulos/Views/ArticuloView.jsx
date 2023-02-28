import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { Formik } from "formik";
import { ProductoAddOrEddit } from "./ProductoAddOrEddit";
import { AcordionOfProductsView } from "./AcordionOfProductsView";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/useContext";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const ArticuloView = ({
  handleClosetModalArticle,
  open,
  hanldeSubmitForm,
  getAllCategories,
  getUserHome,
}) => {
  const [dataImg, setDataImg] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [userData, setUserData] = useState()
  const [allHomes, setAllHomes] = useState([]);
  const { dataUser } = useContext(UserContext);

  const getDataToForm = async () => {
    const getDataUser = await dataUser();
    const getCategories = await getAllCategories();
    const gethomesToUser = await getUserHome(getDataUser.id);

    setAllCategories(getCategories.getAllCategories);
    setAllHomes(gethomesToUser);
    setUserData(getDataUser)
  };

  useEffect(() => {
    getDataToForm();
  }, []);

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClosetModalArticle}
      >
        Open dialog
      </Button>
      <Dialog
        fullScreen
        style={{ width: "90%", height: "90%", margin: "auto" }}
        onClose={handleClosetModalArticle}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClosetModalArticle}
        >
          Modal title
        </DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            alignItems: "center",
            background: "#A5FCBC",
          }}
          dividers
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Paper
              style={{
                width: "28%",
                alignItems: "center",
                display: "grid",
              }}
            >
              <ProductoAddOrEddit
                hanldeSubmitForm={hanldeSubmitForm}
                dataImg={dataImg}
                setDataImg={setDataImg}
                allCategories={allCategories}
                allHomes={allHomes}
                userData={userData}
              />
            </Paper>

            <Paper
              style={{
                width: "30%",
                height: "30rem",
                alignItems: "center",
                display: "grid",
              }}
            >
              <AcordionOfProductsView dataImg={dataImg} />
            </Paper>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClosetModalArticle} color="primary">
            Guardar y Salir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
