import React, { useState, useEffect } from 'react'
import serveIcon from '../icons/index'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Title from './Title'
import {
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Bar,
  ComposedChart,
  Legend,
} from 'recharts'

const useStyles = makeStyles(theme => ({
  tooltip: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    allowEscapeViewBox: {
      x: true,
      y: true,
    },
  },
}))

export default function DailyChart({ state }) {
  const classes = useStyles()
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

  return (
    <>
      <Title>Daily Forcast</Title>
      <Table>
        <caption>{state.weather.daily.summary}</caption>
        <TableBody>
          <TableRow>
            {chartData.map(day => (
              <TableCell>{day.weekday}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            {chartData.map(day => (
              <TableCell>{serveIcon(day.icon)}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            {chartData.map(day => (
              <TableCell>
                {day.hi}°F/{day.lo}°F
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
