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

export default function DailyBarometer({ state }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    state.weather.daily.data.forEach(day => {
      setChartData(prev => [
        ...prev,
        {
          weekday: day.weekday,
          pressure: Number((day.pressure * 0.0295301).toFixed(2)),
        },
      ])
    })
  }, [state.weather.daily.data])

  return (
    <>
      <Title>Barometer</Title>
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
            <linearGradient
              id='dailyBarometerGradient'
              x1='0'
              y1='0'
              x2='0'
              y2='1'>
              <stop offset='1%' stopColor='#2D882D' stopOpacity={0.8} />
              <stop offset='99%' stopColor='#2D882D' stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='weekday' />
          <YAxis unit='in' domain={['dataMin - 0.25', 'dataMax + 0.25']} />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='pressure'
            stroke='#004400'
            fill='url(#dailyBarometerGradient)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}
