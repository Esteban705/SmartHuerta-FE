import { makeStyles, useTheme } from "@material-ui/core/styles";

export const generalStyles = makeStyles((theme) => ({
  tittleMisTrueques: {
    color: "black",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "2rem",
    backgroundColor: "#EEFFF3",
  },
  btnVerMas: {
    backgroundColor: "#777777",
    height: "40px",
    width: "200px",
    border: "none",
    color: "black",
    marginBottom: "2rem",
    textAlign: "center",
    display: "inlineBlock",
    fontSize: "20px",
    borderRadius: "12px",
  },
  contenedorBtnVerMas: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "4rem",
    backgroundColor: "#EEFFF3",
  },
  tabEspacio: { height: "950px" },
}));
