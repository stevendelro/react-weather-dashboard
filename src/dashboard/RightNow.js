import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import serveIcon from '../icons/index'

const useStyles = makeStyles({

  iconBox: {
    width: '60%',
  },
  todayDate: {
    marginTop: '20px',
  },
})

export default function RightNow({ state }) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Typography align='center' component='h2' variant='h6' color='primary'>
          {state.weather.currently.today}
        </Typography>

        <Box className={classes.iconBox}>
          {serveIcon(state.weather.currently.icon)}
        </Box>

        <Typography align='center' component='p' variant='h2'>
          {Number(state.weather.currently.temperature).toFixed(0)}°F
        </Typography>
        <Typography
          align='center'
          color='textSecondary'
          gutterBottom>
          {state.weather.hourly.summary}
        </Typography>

      </Grid>
    </React.Fragment>
  )
}
