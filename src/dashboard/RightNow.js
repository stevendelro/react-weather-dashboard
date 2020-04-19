import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function RightNow({ state }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{state.location.shortName || state.location.searchedTerm}</Title>
      <Typography component="p" variant="h4">
        {Number(state.weather.currently.temperature).toFixed(0)}°F
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {state.weather.currently.summary}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
        {state.weather.currently.today}
        </Link>
      </div>
    </React.Fragment>
  );
}
