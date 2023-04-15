import { makeStyles } from "@material-ui/core";

export const cardAddNewProductStyles = makeStyles({
  root: {
    width: "16rem",
    height: "22rem",
    padding: "0.5rem",
    margin: "0.5rem",
    borderRadius: "0.5rem",
    backgroundColor: "green",
    opacity: "0.6",
    "&:hover": {
      transform: "scale(1.05)",
      opacity: "1",
    },
  },
  content: {
    height: "22rem",
    color: "white",
    textAlign: "center",
  },
  rowRoot: {
    flexGrow: 1,
    width: "90vw",
    height: "15vh",
    display: "flex",
    // padding:"1rem 0"
    margin: "0.5rem 0",
  },
  mobileNewProductContent: {
    backgroundColor: "green",
    color: "white",
    display: "flex",
    textAlign: "center",
    opacity: "0.6",
    "&:hover": {
      transform: "scale(1.05)",
      opacity: "1",
    },
  },
  addProduct: {
    margin: "1.2rem auto",
  },
});

export const cardPerfilStyles = makeStyles((theme) => ({
  cardRoot: {
    width: "16rem",
    height: "22rem",
    padding: "0.5rem",
    margin: "0.5rem",
    borderRadius: "0.5rem",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  cardMedia: {
    height: 140,
  },
  cardContent: {
    height: "10rem",
  },

  mobileRowRoot: {
    flexGrow: 1,
    width: "90vw",
    height: "15vh",
    display: "flex",
    margin: "0.5rem 0",
  },
  rowImage: {
    width: "8rem",
    height: "8rem",
  },
  rowGridInfo: {
    paddingLeft: "0.5rem",
  },
  btnPerfil: {
    height: "30px",
    width: "225px",
    border: "none",
    color: "blue",
    marginBottom: "2rem",
    textAlign: "center",
    display: "inlineBlock",
    fontSize: "14px",
  },
}));
