import { makeStyles, useTheme } from "@material-ui/core/styles";

export const footerStyles = makeStyles((theme) => ({
  footerDivPrincipal: {
    weight: "100%",
    height: "100px",
    backgroundColor: "#C0C9AF",
    display: "grid",
    gridTemplateRows: "100px 100px",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "5px",
  },
  pSocialMedias: {
    color: "#1F7345",
    fontSize: "20px",
    textAlign: "center",
    marginTop: "20px",
    fontWeight: "bold",
  },
  divIconsSocialMedias: {
    display: "flex",
    paddingLeft: "154px",
  },
  iconsStyles: {
    width: "40px",
    height: "40px",
  },
  copyStyles: {
    marginLeft: "0.5rem",
  },
  pCopyStyle: {
    color: "#1F7345",
    fontSize: "15px",
    textAlign: "center",
    marginTop: "50px",
    fontWeight: "bold",
  },
  iconCopy: {
    height: "15px",
    width: "15px",
    display: "inline-block",
    marginLeft: "2px",
  },
  contactDivStyles: {
    marginLeft: "10px",
    marginTop: "18px",
  },
  pContactanos: {
    color: "#1F7345",
    fontSize: "18px",
    textAlign: "center",
    fontWeight: "bold",
  },
  pEmail: {
    display: "flex",
    color: "#1F7345",
    fontSize: "15px",
    marginLeft: "115px",
  },
  pWsp: {
    display: "flex",
    color: "#1F7345",
    fontSize: "15px",
    marginLeft: "115px",
  },
}));
