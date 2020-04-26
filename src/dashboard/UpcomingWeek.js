import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import serveIcon from '../icons/index'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

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
      <Table >
        <TableBody>
          <TableRow>
            {chartData.map(day => (
              <TableCell key={uuidv4()} align='center'>
                {day.weekday.toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            {chartData.map(day => (
              <TableCell key={uuidv4()} align='center'>
                {serveIcon(day.icon)}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            {chartData.map(day => (
              <TableCell key={uuidv4()} align='center'>
                {day.hi}°F
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            {chartData.map(day => (
              <TableCell key={uuidv4()} align='center'>
                {day.lo}°F
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
