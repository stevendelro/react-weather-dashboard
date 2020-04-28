import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Map from '../Map'
import CurrentTemp from './CurrentTemp'
import UpcomingWeek from './UpcomingWeek'
import RightNowTable from './RightNowTable'
import Next24Chart from './Next24Chart'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 330,
  },
}))

function HomePage({ state }) {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Map state={state} />
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper className={fixedHeightPaper}>
            <CurrentTemp state={state} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper className={fixedHeightPaper}>
            <UpcomingWeek state={state} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <RightNowTable state={state} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Next24Chart state={state} />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
