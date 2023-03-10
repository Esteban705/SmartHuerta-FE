import { makeStyles } from "@material-ui/core";
import globalStyles from "../../GlobalStyles/globalStyles";

export const userPerfilStyles = makeStyles((theme) => ({
  // deskstop
  deskstopRoots: { padding: "1rem", marginTop: "4.5rem" },
  deskPaper: { padding: "2rem" },
  deskUserDataContainer: {
    marginBottom: "2rem",
  },
  deskCounters: {
    fontWeight: "bold",
    margin: "0.5rem 1rem",
  },
  deskCardProductsContainer: {
    backgroundColor: `${globalStyles.backgroundColorFooter}`,
  },
  // mobile
  mobileRoots: {},
  mobilePaper: {},
  mobileUserDataContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  mobileInfoUser: {
    display: "flex",
    justifyContent: "center",
  },
  mobileCounters: {
    fontWeight: "bold",
    margin: "auto",
  },
  CardProductsContainer: {
    backgroundColor: `${globalStyles.backgroundColorFooter}`,
    minHeight: "50vh",
  },
}));
