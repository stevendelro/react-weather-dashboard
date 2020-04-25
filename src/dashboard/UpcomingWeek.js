import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import serveIcon from '../icons/index'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Title from './Title'

export default function UpcomingWeek({ state }) {
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
          more: day,
          icon: day.icon,
        },
      ])
    })
    
  }, [state.weather.daily.data])

  if (chartData.length === 8) {
    chartData.shift()
  }
  
  return (
    <>
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='flex-start'>
        <Title>Daily Forcast</Title>
      </Grid>
      <Table>
        <caption>{state.weather.daily.summary}</caption>
        <TableBody>
          <TableRow>
            {chartData.map(day => (
              <TableCell key={uuidv4()}>{day.weekday}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            {chartData.map(day => (
              <TableCell key={uuidv4()}>{serveIcon(day.icon)}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            {chartData.map(day => (
              <TableCell key={uuidv4()}>
                {day.hi}°F/{day.lo}°F
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
