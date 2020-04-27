import React, { useState, useEffect } from 'react'
import { getCardinalDirection } from '../util/index'
import { v4 as uuidv4 } from 'uuid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

export default function HourlyTable({ state }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    state.weather.hourly.data.forEach(hour => {
      setChartData(prev => [
        ...prev,
        {
          hour: hour.tableHour,
          temp: hour.apparentTemperature.toFixed(0),
          rain: hour.precipProbability.toFixed(0),
          summary: hour.summary,
          uv: hour.uvIndex,
          humidity: (hour.humidity * 100).toFixed(0),
          visibility: `${hour.visibility.toFixed(1)}${
            hour.visibility === 10 ? '+' : ''
          }`,
          pressure: (hour.pressure * 0.0295301).toFixed(2),
          wind: `${getCardinalDirection(
            hour.windBearing
          )}${' '}${hour.windSpeed.toFixed(1)}`,
          windGusts: hour.windGust.toFixed(1),
          cloudCover: `${(hour.cloudCover * 100).toFixed(0)}`,
        },
      ])
    })
  }, [state.weather.hourly.data])

  return (
    <>
      <Table>
        <TableBody>
          <TableRow variant='head'>
            <TableCell size='small' align='left'>Time</TableCell>
            <TableCell size='small' align='center'>Weather</TableCell>
            <TableCell size='small' align='center'>(°F) Temp</TableCell>
            <TableCell size='small' align='center'>(%) Rain</TableCell>
            <TableCell size='small' align='center'>UV Index</TableCell>
            <TableCell size='small' align='center'>(%) Humidity</TableCell>
            <TableCell size='small' align='center'>(mi) Visibility</TableCell>
            <TableCell size='small' align='center'>(in) Pressure</TableCell>
            <TableCell size='small' align='center'>(mph) Wind</TableCell>
            <TableCell size='small' align='center'>(mph) Gusts</TableCell>
            <TableCell size='small' align='center'>
              (%) Clouds
            </TableCell>
          </TableRow>
          {chartData.map(hour => (
            <TableRow hover={true} key={uuidv4()}>
              <TableCell size='small' padding='none' align='center'>{hour.hour}</TableCell>
              <TableCell size='small' padding='none'>{hour.summary}</TableCell>
              <TableCell size='small' align='center'>{hour.temp}</TableCell>
              <TableCell size='small' align='center'>{hour.rain}</TableCell>
              <TableCell size='small' align='center'>{hour.uv}</TableCell>
              <TableCell size='small' align='center'>{hour.humidity}</TableCell>
              <TableCell size='small' align='center'>{hour.visibility}</TableCell>
              <TableCell size='small' align='center'>{hour.pressure}</TableCell>
              <TableCell size='small' align='center'>{hour.wind}</TableCell>
              <TableCell size='small' align='center'>{hour.windGusts}</TableCell>
              <TableCell size='small' align='center'>
                {hour.cloudCover}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
