import { Dialog, DialogTitle, Paper } from "@material-ui/core";
import React from "react";

export const ArticuloPage = ({ open, handleClosetModalArticle }) => {
  return (
    <div style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <Dialog
        fullScreen
        style={{
          width: "90%",
          height: "90%",
          margin: "auto",
        }}
        onClose={handleClosetModalArticle}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div>

            <div>
            <Paper />
            </div>
            <div>
            </div>

        </div>
      </Dialog>
    </div>
  );
};
