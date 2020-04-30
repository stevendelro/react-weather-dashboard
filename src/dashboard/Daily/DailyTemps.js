import React, { useState, useEffect } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import Title from '../Title'

export default function DailyTemps({ state }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    state.weather.daily.data.forEach(day => {
      setChartData(prev => [
        ...prev,
        {
          weekday: day.weekday,
          High: Number(day.apparentTemperatureHigh.toFixed(0)),
          Low: Number(day.apparentTemperatureLow.toFixed(0)),
        },
      ])
    })
  }, [state.weather.daily.data])

  return (
    <>
      <Title>Temperature</Title>
      <ResponsiveContainer minHeight='200px'>
        <AreaChart
          data={chartData}
          syncId='synced'
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <defs>
            <linearGradient id='dailyHighGradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='1%' stopColor='#FFAAAA' stopOpacity={0.8} />
              <stop offset='99%' stopColor='#FFAAAA' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='dailyLowGradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='1%' stopColor='#669999' stopOpacity={0.8} />
              <stop offset='99%' stopColor='#669999' stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='weekday' />
          <YAxis unit='°F' domain={['dataMin - 5', 'dataMax + 5']} />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='High'
            stroke='#AA3939'
            fill='url(#dailyHighGradient)'
          />
          <Area
            type='monotone'
            dataKey='Low'
            stroke='#226666'
            fill='url(#dailyLowGradient)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}
