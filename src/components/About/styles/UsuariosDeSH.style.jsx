import { makeStyles, useTheme } from "@material-ui/core/styles";

export const aboutUsStyles = makeStyles((theme) => ({
  contenedorInfoAU: {
    marginTop: "6rem",
    width: "100%",
    height: "500px",
    backgroundColor: "#CBFCD2 ",
  },
  tituloPrincipal: {
    color: "#1F7345",
    fontSize: "1.8em",
    fontWeight: "500",
    textAlign: "center",
    paddingTop: "2rem",
  },
  divParrafos: {
    alignItems: "center",
    paddingRight: "9em",
    paddingLeft: "10em",
  },
  colorParrafo: {
    marginTop: "1em",
    color: "#1F7345",
    fontSize: "1em",
    textAlign: "left",
    fontWeight: "350",
  },

  textAdvertencia: {
    color: "#1F7345",
    fontWeight: "800",
    fontSize: "0.8em",
    textAlign: "center",
    paddingTop: "4em",
  },

  divContenedorCard: {
    justifyContent: "center",
    marginLeft: "8rem",
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
