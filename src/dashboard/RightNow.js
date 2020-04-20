import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'

const useStyles = makeStyles({
  summaryText: {
    flex: 1,
  },
  tempText: {
    marginTop: '1rem'
  }
})

export default function RightNow({ state }) {
  const classes = useStyles()
  return (
    <React.Fragment>
        <Typography align='center' component="h2" variant="h6" color="primary" gutterBottom>
        {state.location.shortName.toUpperCase() || state.location.searchedTerm.toUpperCase()}
    </Typography>
      <Typography className={classes.tempText} align='center' component='p' variant='h2'>
        {Number(state.weather.currently.temperature).toFixed(0)}°F
      </Typography>
      <Typography
        align='center'
        color='textSecondary'
        className={classes.summaryText}>
        {state.weather.currently.summary}
      </Typography>
      <Typography align='center' component='subtitle2' color='black'>
        {state.weather.currently.today}
      </Typography>
    </React.Fragment>
  )
}
