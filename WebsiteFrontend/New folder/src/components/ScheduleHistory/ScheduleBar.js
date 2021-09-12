import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  schedule_bar: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  },
}));

export default function ScheduleBar({ title, description, status }) {
  const classes = useStyles();
  return (
    <div className="row">
      <Grid container className={classes.schedule_bar}>
        <Grid item md={3} xs={0}></Grid>

        <Grid item md={6} xs={12}>
          <Alert severity={status} variant="filled">
            <AlertTitle>{title}</AlertTitle>
            {description}
          </Alert>
        </Grid>
      </Grid>
    </div>
  );
}
