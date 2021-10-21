import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";


export default function FeedNowConfirmation({
                                                open,
                                                handleClose,
                                                onConfirm
                                            }) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div id="alert-dialog-title" className="confirm_ pl-50 pt-20 pr-50">
                    {"Do you want to feed your pet now ?"}
                </div>

                <div className="">
                    <DialogActions>

                        <Button onClick={handleClose} color="primary">
                            <span className="confirm_button_">
                                No
                            </span>

                        </Button>
                        <Button
                            onClick={onConfirm}
                            color="primary"
                            autoFocus
                        >
                             <span className="confirm_button_">
                                Yes
                            </span>
                        </Button>
                    </DialogActions>
                </div>

            </Dialog>
        </div>
    );
}
