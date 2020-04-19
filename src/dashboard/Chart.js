import React, { useState, useEffect } from 'react'
import { useTheme } from '@material-ui/core/styles'
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

export default function Chart({ state }) {
  const theme = useTheme()
  const [chartData, setChartData] = useState([])

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div>
          <h2>{payload[0].payload.more.date}</h2>
          <hr />
          <p>High: {payload[0].payload.more.apparentTemperatureHigh.toFixed(0)}°F</p>
          <p>Low: {payload[0].payload.more.apparentTemperatureLow.toFixed(0)}°F</p>
          {/* <p>Range: {payload[0].temperature[0]}°F - {payload[0].temperature[1]}°F </p> */}
          <p>Chance of rain: {payload[0].payload.more.precipProbability * 100}%</p>
          <p>{payload[0].payload.more.summary}</p>
        </div>
      );
    }
  
    return null;
  };

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
          more: day
        }
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
          <Tooltip content={<CustomTooltip/>}/>
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  )
}
