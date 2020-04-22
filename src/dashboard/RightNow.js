import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  summaryText: {
    flex: 1,
  },
  tempText: {
    marginTop: '1rem',
  },
})

export default function RightNow({ state }) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography
        align='center'
        component='h2'
        variant='h6'
        color='primary'
        gutterBottom>
        {state.location.shortName
          ? state.location.shortName.toUpperCase()
          : state.location.searchedTerm.toUpperCase()}
      </Typography>
      <Typography
        className={classes.tempText}
        align='center'
        component='p'
        variant='h2'>
        {Number(state.weather.currently.temperature).toFixed(0)}°F
      </Typography>
      <Typography
        align='center'
        color='textSecondary'
        className={classes.summaryText}>
        {state.weather.hourly.summary}
      </Typography>
      <Typography align='center' variant='subtitle2' color='textSecondary'>
        {state.weather.currently.today}
      </Typography>
    </React.Fragment>
  )
}
