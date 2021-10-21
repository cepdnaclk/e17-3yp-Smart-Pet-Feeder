import React, {useState, useCallback, useEffect, useContext} from "react";
import Schedule from "./Schedule";

import ScheduleForm from "../ScheduleForm/ScheduleForm";
import ConfirmationBox from "../ConfirmationBox/ConfirmationBox";
import Loader from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import * as schedulesActions from "../../store/actions/schedules";
import Page500 from "../../pages/error_page/Page500";
import {useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {Tooltip} from "@material-ui/core";
import {forEach} from "react-bootstrap/ElementChildren";
import * as ScheduleActions from "../../store/actions/schedules";
import FeedNowConfirmation from "../ConfirmationBox/FeedNowConfirmation";


const useStyles = makeStyles((theme) => ({

    button: {
        backgroundColor: "#1d9a6c",
        fontSize: 14,
        fontFamily: "Jost",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        // width:"300px",
        // $disabled is a reference to the local disabled
        // rule within the same style sheet.
        // By using &, we increase the specificity.
        "&:hover": {
            backgroundColor: "#1d9a6c",
        },
        "&$disabled": {
            background: "rgba(0, 0, 0, 0.12)",
            color: "white",
            boxShadow: "none",
        },
    },
    disabled: {},
}));

const ActiveSchedules = (props) => {
    const classes = useStyles();
    const schedules = useSelector((state) => state.schedules.schedules);
    const remainingRounds = useSelector((state) => state.status.status.remainingRounds);
    const dispatch = useDispatch();
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const loadSchedules = useCallback(() => {
        setError(null);
        setIsLoading(true);

        return dispatch(schedulesActions.fetchSchedules())
            .then((response) => {
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [dispatch, setIsLoading, setError]);

    useEffect(() => {
        loadSchedules();
    }, [dispatch, loadSchedules]);

    const [scheduleEditData, setScheduleEditData] = React.useState({
        open: false,
    });

    const [scheduleDeleteData, setScheduleDeleteData] = React.useState({
        open: false,
        data: {},
    });

    const editSchedulePop = (id, status) => {
        setScheduleEditData({
            open: true,
            _id: id,
            status: status,
        });
    };

    const deleteSchedulePop = (id, title) => {
        setScheduleDeleteData({
            open: true,

            _id: id,
            title: title,
        });
    };

    const deleteSchedule = (id) => {
        setIsLoading(true);
        dispatch(schedulesActions.deleteSchedule(id));
        setIsLoading(false);
        deleteHandleClose();
    };

    const editHandleClose = () => {
        setScheduleEditData({open: false, data: {}});
    };

    const deleteHandleClose = () => {
        setScheduleDeleteData({open: false, data: {}});
    };

    if (error) {
        history.replace(`${process.env.PUBLIC_URL}/500error`);
        return <React.Fragment/>;
    }


    const num_of_active_schedules = schedules.filter((schedule) => schedule.status).length;


    const feedNowHandler = () => {
        if (num_of_active_schedules >= remainingRounds)
            return;
        dispatch(ScheduleActions.createSchedule("Feed Now", new Date(new Date().getTime() + 120000)));
        setOpenFeedNowConfirm(false);


    }

    const [openFeedNowConfirm, setOpenFeedNowConfirm] = useState(false);
    const feedNowConfirmation = () => {
        setOpenFeedNowConfirm(true);
    }

    const feedNowConfirmClose = () => {
        setOpenFeedNowConfirm(false);
    }


    return (
        <React.Fragment>
            {scheduleEditData.open && (
                <ScheduleForm
                    open={scheduleEditData.open}
                    _id={scheduleEditData._id}
                    status={scheduleEditData.status}
                    handleClose={editHandleClose}
                />
            )}

            {scheduleDeleteData.open && <ConfirmationBox
                id={scheduleDeleteData._id}
                open={scheduleDeleteData.open}
                title={scheduleDeleteData.title}
                handleClose={deleteHandleClose}
                deleteSchedule={deleteSchedule}
            />}

            {openFeedNowConfirm && <FeedNowConfirmation open={openFeedNowConfirm} handleClose={feedNowConfirmClose} onConfirm={feedNowHandler}/>}


            <section className="">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 section-heading">
                            <h2
                                className="text-uppercase"
                                data-aos={"fade-up"}
                                data-aos-delay={100}
                                data-aos-duration={700}
                            >
                                Active Schedules
                            </h2>
                            <h4
                                className="text-uppercase"
                                data-aos={"fade-up"}
                                data-aos-delay={200}
                                data-aos-duration={700}
                            >
                                - Edit Feeding Schedules -
                            </h4>
                        </div>
                    </div>
                    {isLoading && (
                        <div align="center">
                            <Loader type="ThreeDots" color="green" height={100} width={100}/>
                        </div>
                    )}
                    {!isLoading && (

                        <React.Fragment>
                            <div className="row mt-20">
                                <div className="d-flex justify-content-center">
                                    <Tooltip
                                        title={num_of_active_schedules >= remainingRounds ? "All remaining rounds are scheduled or no remaining rounds." : ""}
                                    >
                                        <span>
                                             <Button
                                                 classes={{
                                                     root: classes.button,
                                                     disabled: classes.disabled,
                                                 }}
                                                 className="button__"
                                                 disabled={num_of_active_schedules >= remainingRounds}
                                                 onClick={feedNowConfirmation}
                                             >
                                            FEED YOUR PET NOW

                                        </Button>
                                        </span>

                                    </Tooltip>

                                </div>

                            </div>

                            <div className="row mt-30">
                                {schedules.map((schedule, i) => (
                                    <Schedule
                                        schedule={schedule}
                                        editHandler={editSchedulePop}
                                        deleteHandler={deleteSchedulePop}
                                        key={i}
                                        index={i}
                                        num_of_active_schedules={num_of_active_schedules}
                                    />
                                ))}
                            </div>
                        </React.Fragment>

                    )}
                </div>
            </section>
        </React.Fragment>
    );
};

export default ActiveSchedules;
