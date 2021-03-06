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

export default function HourCloud({ state }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    state.weather.hourly.data.forEach(hour => {
      setChartData(prev => [
        ...prev,
        {
          time: hour.thisHour,
          cloudCover: Number((hour.cloudCover * 100).toFixed(0)),
        },
      ])
    })
  }, [state.weather.hourly.data])

  return (
    <>
      <Title>Cloud Cover</Title>
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
            <linearGradient id='cloudGradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='1%' stopColor='#999999' stopOpacity={0.8} />
              <stop offset='99%' stopColor='#999999' stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='time' />
          <YAxis unit='%' domain={[0, 100]} />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='cloudCover'
            stroke='#191919'
            fill='url(#cloudGradient)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}
