import { Button } from "@material-ui/core";
import React from "react";
import globalStyles from "../../components/GlobalStyles/globalStyles";

const GreenButton = ({ text, type }) => {
  const colorButton = {
    backgroundColor: `${globalStyles.GreenButton}`,
    color: "black",
    marginBottom: "10%",
  };
  return (
    <Button type={`${type}`} style={colorButton} variant="contained" fullWidth>
      {text}
    </Button>
  );
};

export default GreenButton;
