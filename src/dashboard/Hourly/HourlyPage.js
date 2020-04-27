import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import HourTemp from './HourTemp'
import HourHumidity from './HourHumidity'
import HourUV from './HourUV'
import HourBarometer from './HourBarometer'
import HourCloud from './HourCloud'
import HourRain from './HourRain'
import HourlyTable from './HourlyTable'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

function HourlyPage({ state }) {
  const classes = useStyles()
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <HourTemp state={state} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <HourHumidity state={state} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <HourCloud state={state} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <HourRain state={state} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <HourUV state={state} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <HourBarometer state={state} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <HourlyTable state={state} />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default HourlyPage
