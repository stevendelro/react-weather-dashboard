import React from 'react'
import { getCardinalDirection } from '../../util/index'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Title from '../Title'

export default function RightNowTable({ state }) {
  const { currently } = state.weather
  return (
    <React.Fragment>
      <Title>Today</Title>
      <Table>
        <TableBody>
          <TableRow hover={true}>
            <TableCell size='small'>Rain</TableCell>
            <TableCell
              align='right'
              size='small'>{`${currently.precipProbability.toFixed(
              0
            )}%`}</TableCell>
          </TableRow>

          <TableRow hover={true}>
            <TableCell size='small'>Humidity</TableCell>
            <TableCell align='right' size='small'>{`${(
              currently.humidity * 100
            ).toFixed(0)}%`}</TableCell>
          </TableRow>

          <TableRow hover={true}>
            <TableCell size='small'>Visibility</TableCell>
            <TableCell align='right' size='small'>{`${currently.visibility} mi${
              currently.visibility === 10 ? '+' : ''
            }`}</TableCell>
          </TableRow>

          <TableRow hover={true}>
            <TableCell size='small'>Pressure</TableCell>
            <TableCell align='right' size='small'>{`${(
              currently.pressure * 0.0295301
            ).toFixed(2)} in`}</TableCell>
          </TableRow>

          <TableRow hover={true}>
            <TableCell size='small'>Wind</TableCell>
            <TableCell align='right' size='small'>
              {getCardinalDirection(currently.windBearing)}
              {currently.windSpeed.toFixed(1)} mph{' '}
            </TableCell>
          </TableRow>

          <TableRow hover={true}>
            <TableCell size='small'>Cloud Coverage</TableCell>
            <TableCell align='right' size='small'>
              {(currently.cloudCover * 100).toFixed(0)}% of sky
            </TableCell>
          </TableRow>
          <TableRow hover={true}>
            <TableCell size='small'>UV Index</TableCell>
            <TableCell align='right' size='small'>
              {currently.uvIndex}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
