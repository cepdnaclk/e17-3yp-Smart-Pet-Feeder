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

    // <div className="row">
    //     <div class="col-md-4 col-xl-3">
    //       <div class="card bg-c-blue order-card">
    //         <div class="card-block">
    //           <h6 class="m-b-20">Orders Received</h6>
    //           <h2 class="text-right">
    //             <i class="fa fa-cart-plus f-left"></i>
    //             <span>486</span>
    //           </h2>
    //           <p class="m-b-0">
    //             Completed Orders<span class="f-right">351</span>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
}
