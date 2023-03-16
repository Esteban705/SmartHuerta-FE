import { makeStyles, useTheme } from "@material-ui/core/styles";

export const aboutUsStyles = makeStyles((theme) => ({
  contenedorInfoAU: {
    marginTop: "5rem",
    width: "100%",
    height: "500px",
    backgroundColor: "#A5FCBC",
  },
  tituloPrincipal: {
    color: "#1F7345",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "2rem",
  },
  divParrafos: {
    marginLeft: "1rem",
    marginRight: "1rem",
    textAlign: "left",
  },
  colorParrafo: {
    color: "#1F7345",
  },
  divContenedorCard: {
    width: "100%",
    justifyContent: "center",
    marginLeft: "5rem",
    marginTop: "5rem",
    display: "grid",
    gridTemplateRows: "1fr 1fr 1fr ",
    gridTemplateColumns: "1fr 1fr 1fr",
    height: "800px",
  },
  containerVerMas: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  btnVerMas: {
    backgroundColor: "#777777",
    fontWeight: "bold",
    height: "40px",
    width: "200px",
    border: "none",
    color: "black",
    marginBottom: "2rem",
    textAlign: "center",
    display: "inlineBlock",
    fontSize: "15px",
    borderRadius: "12px",
  },
  parrafosUsuariosTop: {
    color: "black",
  },
  divParrafosUsuariosTop: {
    textAlign: "center",
    fontSize: "20px",
  },
}));
