import React, { useState, useEffect } from 'react'
import { getCardinalDirection } from '../util/index'
import { v4 as uuidv4 } from 'uuid'
import serveIcon from '../icons/index'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

export default function DailyTable({ state }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    state.weather.daily.data.forEach(day => {
      setChartData(prev => [
        ...prev,
        {
          weekday: day.weekday,
          date: day.date,
          lo: day.apparentTemperatureLow.toFixed(0),
          hi: day.apparentTemperatureHigh.toFixed(0),
          temperature: [
            day.apparentTemperatureLow.toFixed(0),
            day.apparentTemperatureHigh.toFixed(0),
          ],
          icon: day.icon,
          sunrise: day.sunrise,
          sunset: day.sunset,
          uv: day.uvIndex,
          humidity: (day.humidity * 100).toFixed(0),
          visibility: `${day.visibility.toFixed(1)}${
            day.visibility === 10 ? '+' : ''
          }`,
          pressure: (day.pressure * 0.0295301).toFixed(2),
          wind: `${getCardinalDirection(
            day.windBearing
          )} ${day.windSpeed.toFixed(1)}`,
          cloudCover: (day.cloudCover * 100).toFixed(0),
        },
      ])
    })
  }, [state.weather.daily.data])

  if (chartData.length === 8) {
    chartData.shift()
  }
  return (
    <>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell align='left'>Day</TableCell>
            <TableCell align='center'>Date</TableCell>
            <TableCell align='center'>Weather</TableCell>
            <TableCell align='center'>(°F) High</TableCell>
            <TableCell align='center'>(°F) Low</TableCell>
            <TableCell align='center'>UV Index</TableCell>
            <TableCell align='center'>(%) Humidity</TableCell>
            <TableCell align='center'>(mi) Visibility</TableCell>
            <TableCell align='center'>(in) Pressure</TableCell>
            <TableCell align='center'>(mph) Wind</TableCell>
            <TableCell align='right' size='small'>
              (%) Clouds
            </TableCell>
            <TableCell align='center'>Sunrise</TableCell>
            <TableCell align='center'>Sunset</TableCell>
          </TableRow>
          {chartData.map(day => (
            <TableRow hover={true} key={uuidv4()}>
              <TableCell align='left'>{day.weekday.toUpperCase()}</TableCell>
              <TableCell align='center'>{day.date}</TableCell>
              <TableCell align='center'>{serveIcon(day.icon)}</TableCell>
              <TableCell align='center'>{day.hi}</TableCell>
              <TableCell align='center'>{day.lo}</TableCell>
              <TableCell align='center'>{day.uv}</TableCell>
              <TableCell align='center'>{day.humidity}</TableCell>
              <TableCell align='center'>{day.visibility}</TableCell>
              <TableCell align='center'>{day.pressure}</TableCell>
              <TableCell align='center'>{day.wind}</TableCell>
              <TableCell align='right' size='small'>
                {day.cloudCover}
              </TableCell>
              <TableCell align='center'>{day.sunrise}</TableCell>
              <TableCell align='center'>{day.sunset}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
