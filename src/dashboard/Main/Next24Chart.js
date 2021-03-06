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

export default function Next24Chart({ state }) {
  const [hourlyTemps, setHourlyTemps] = useState([])

  useEffect(() => {
    state.weather.hourly.data.forEach(hour => {
      setHourlyTemps(prev => [
        ...prev,
        {
          hour: hour.thisHour,
          time: hour.time,
          temp: Number(hour.apparentTemperature.toFixed(0)),
        },
      ])
    })
  }, [state.weather.hourly.data])

  return (
    <>
      <Title>24 Hours</Title>
      <ResponsiveContainer>
        <AreaChart
          data={hourlyTemps.slice(0, 25)}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id='temps' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#FFE499' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#FFE499' stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='hour' />
          <YAxis
            unit='°F'
            type='number'
            domain={['dataMin - 5', 'dataMax + 5']}
          />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='temp'
            stroke='#FFBC00'
            fillOpacity={1}
            fill='url(#temps)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}
