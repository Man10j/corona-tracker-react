import React from "react";
import "./Resultcard.css";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";

const Resultcard = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if(!confirmed){
    return "Loading...";
}
  return (
    <div className="resultcard">
    <Grid container spacing={1} justifyContent="center">
              <Grid item component={Card} xs={12} md={3} className="card infected">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={confirmed.value} duration={3} separator="," />
                        </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
              </Grid>

              <Grid item component={Card} xs={12} md={3} className="card recovered">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={recovered.value} duration={3} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                </CardContent>
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="card deaths">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={deaths.value} duration={3} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                </CardContent>
              </Grid>
      </Grid>
    </div>
  );
};
export default Resultcard;
