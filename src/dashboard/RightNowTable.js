import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import moment from 'moment'
import Title from './Title'

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
}))

export default function RightNowTable({ state }) {

  const { currently } = state.weather
  const classes = useStyles()
  return (
    <React.Fragment>
      <Title>Right Now</Title>
      <Table className={classes.table}>
      <caption>It's {(currently.summary).toLowerCase()} with clouds covering about {(currently.cloudCover * 100).toFixed(0)}% of the sky.</caption>
        <TableHead>
          <TableRow>
            <TableCell>Rain</TableCell>
            <TableCell>Wind</TableCell>
            <TableCell>Humidity</TableCell>
            <TableCell>Pressure</TableCell>
            <TableCell>Visibility</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{`${currently.precipProbability.toFixed(0)}%`}</TableCell>
            <TableCell>{`${currently.windSpeed.toFixed(0)}mph`}</TableCell>
            <TableCell>{`${(currently.humidity * 100).toFixed(0)}%`}</TableCell>
            <TableCell>{`${(currently.pressure * 0.0295301).toFixed(2)}in`}</TableCell>
            <TableCell>{`${currently.visibility}mi${currently.visibility === 10 ? '+' : ''}`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
