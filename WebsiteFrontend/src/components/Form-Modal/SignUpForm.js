import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Icofont from "react-icofont";
import Fab from "@material-ui/core/Fab";


const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    // paper: {
    //   backgroundColor: theme.palette.background.paper,
    //   border: '2px solid #000',
    //   boxShadow: theme.shadows[5],
    //   padding: theme.spacing(2, 4, 3),
    // },
}));

export default function SignUpForm(props) {
    const classes = useStyles();

    return (

        <Container component="main" maxWidth="xs">

            {/*<Button variant="contained" color="secondary" onClick={handleOpen}>*/}
            {/*  Open Animated Modal*/}
            {/*</Button>*/}

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open= {props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className="pricing-box" style={{ width: 400 }}>
                        <form >
                            <div >
                                <label htmlFor='name'>Your Name</label>
                                <input
                                    type='text'
                                    id='name'

                                />
                                { (
                                    <p className='error-text'>Name must not be empty.</p>
                                )}
                            </div>
                            <div >
                                <label htmlFor='email'>Your E-Mail</label>
                                <input
                                    type='email'
                                    id='email'

                                />
                                { (
                                    <p className='error-text'>Please enter a valid email.</p>
                                )}
                            </div>
                            <div className='form-actions'>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>



                </Fade>
            </Modal>
        </Container>
    );
}
