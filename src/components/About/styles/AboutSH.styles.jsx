import { makeStyles } from "@material-ui/core/styles";

export const aboutSHStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(2),
    borderRadius: 10,
    width: "100%",
    height: "30rem",
  },
  leftText: {
    flex: 1,
  },
  rightImage: {
    flex: 1,
    textAlign: "right",
  },
  image: {
    flex: 1,
    width: "500px",
    height: "auto",
  },

  //   contenedorInfoAU: {
  //     marginTop: "6rem",
  //     marginBottom: "4rem",
  //     width: "100%",
  //     height: "900px",
  //   },
  tituloPrincipalAbout: {
    color: "#1F7345",
    fontSize: "2em",
    fontWeight: "700",
    textAlign: "left",
    // paddingTop: "1rem",
    paddingLeft: "1rem",
  },
  colorParrafoAbout: {
    // marginTop: "1em",
    // color: "#1F7345",
    marginLeft: "2em",
    fontSize: "1em",
    textAlign: "left",
    fontWeight: "400",
    position: "absolute",
  },

  fraseSmart: {
    textAlign: "center",
    marginTop: "0.5em",
    fontSize: "1.4em",
  },
}));
