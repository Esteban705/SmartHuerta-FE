import { makeStyles, useTheme } from "@material-ui/core/styles";

export const tabsTruequesStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#A5FCBC",
  },
  marginTabs: {
    margin: "0 2rem",
  },
  cards: {
    marginLeft: "4.7rem",
    paddingTop: "2rem",
    display: "grid",
    gridTemplateRows: "1fr 1fr 1fr ",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "50px",
    height: "1000px",
  },
}));
