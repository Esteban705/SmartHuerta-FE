import { Dialog, DialogTitle, Paper } from "@material-ui/core";
import React from "react";

export const ArticuloPage = ({ open, handleClosetModalArticle }) => {
  return (
    <div style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: '1%' }}>
      <Dialog
        fullScreen
        style={{
          width: "90%",
          height: "90%",
          margin: "auto",
          justifyContent: 'center',
        }}
        onClose={handleClosetModalArticle}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>

            <div>
            <Paper style={{width: '3rem', height: '4rem', background: 'blue'}} />
            </div>
            <div>
            <Paper style={{width: '3rem', height: '4rem', background: 'black'}} />
            </div>

        </div>
      </Dialog>
    </div>
  );
};
