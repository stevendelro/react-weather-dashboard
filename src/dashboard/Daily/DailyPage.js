import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Map from '../Map'
import DailyTable from './DailyTable'
import DailyTemps from './DailyTemps'
import DailyHumidity from './DailyHumidity'
import DailyClouds from './DailyClouds'
import DailyRain from './DailyRain'
import DailyUV from './DailyUV'
import DailyBarometer from './DailyBarometer'

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

function DailyPage({ state }) {
  const classes = useStyles()
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DailyTable state={state} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <DailyTemps state={state} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <DailyHumidity state={state} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <DailyClouds state={state} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <DailyRain state={state} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <DailyUV state={state} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <DailyBarometer state={state} />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default DailyPage
