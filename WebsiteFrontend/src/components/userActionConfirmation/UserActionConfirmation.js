import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function UserActionConfirmation({
  id,
  open,
  isActive,
  handleClose,
  actionHandler,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div id="alert-dialog-title" className="dialog_title">
          Handling User Access
        </div>
        <DialogContent>
          <div
            className="email_"
            id="alert-dialog-description"
            style={{ fontSize: "12px" }}
          >
            {isActive && "Are you sure you want to disable the user ? "}
            {!isActive && "Are you sure you want to enable the user ? "}{" "}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            style={{ fontFamily: "Jost", fontSize: "13px" }}
          >
            No
          </Button>
          <Button
            onClick={actionHandler}
            color="primary"
            autoFocus
            style={{ fontFamily: "Jost", fontSize: "13px" }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
