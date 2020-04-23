import React, { useState, useEffect } from 'react'
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

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <Paper className={classes.tooltip}>
          <h2>{payload[0].payload.more.date}</h2>
          <hr />
          <p>
            High: {payload[0].payload.more.apparentTemperatureHigh.toFixed(0)}°F
          </p>
          <p>
            Low: {payload[0].payload.more.apparentTemperatureLow.toFixed(0)}°F
          </p>
          {/* <p>Range: {payload[0].temperature[0]}°F - {payload[0].temperature[1]}°F </p> */}
          <p>
            Chance of rain:{' '}
            {(payload[0].payload.more.precipProbability * 100).toFixed(0)}%
          </p>
          <p>{payload[0].payload.more.summary}</p>
        </Paper>
      )
    }

    return null
  }

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
      <ResponsiveContainer>
        <ComposedChart
          data={chartData}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}>
          <XAxis dataKey='weekday' />
          <YAxis unit='°F' />
          <CartesianGrid strokeDasharray='3 3' />
          <Bar dataKey='hi' name='High' fill='#ffe2e2' unit='°F' barSize={20} />
          <Bar dataKey='lo' name='Low' fill='#bad7df' unit='°F' barSize={20} />
          <Area
            dataKey='temperature'
            name='Temp Range'
            unit='°F'
            stroke='#99ddcc'
            fill='#99ddcc'
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  )
}
