import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Title from './Title'

const useStyles = makeStyles(theme => ({

}))

export default function RightNowTable({ state }) {
  const { currently } = state.weather
  const classes = useStyles()
  return (
    <React.Fragment>
      <Title>Right Now</Title>
      <Table className={classes.table}>
        <caption>
          Right now it's {currently.summary.toLowerCase()}, with clouds covering about{' '}
          {(currently.cloudCover * 100).toFixed(0)}% of the sky.
        </caption>

        <TableBody>
          <TableRow hover={true}>
            <TableCell size='small'>Rain</TableCell>
            <TableCell size='small'>{`${currently.precipProbability.toFixed(
              0
            )}%`}</TableCell>
          </TableRow>
          <TableRow hover={true}>
            <TableCell size='small'>Wind</TableCell>
            <TableCell size='small'>{`${currently.windSpeed.toFixed(0)} mph`}</TableCell>
          </TableRow>
          <TableRow hover={true}>
            <TableCell size='small'>Humidity</TableCell>
            <TableCell size='small'>{`${(currently.humidity * 100).toFixed(0)}%`}</TableCell>
          </TableRow>
          <TableRow hover={true}>
            <TableCell size='small'>Pressure</TableCell>
            <TableCell size='small'>{`${(currently.pressure * 0.0295301).toFixed(
              2
            )} in`}</TableCell>
          </TableRow>
          <TableRow hover={true}>
            <TableCell size='small'>Visibility</TableCell>
            <TableCell size='small'>{`${currently.visibility} mi${
              currently.visibility === 10 ? '+' : ''
            }`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
