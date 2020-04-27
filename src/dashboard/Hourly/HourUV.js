import React, { useState, useEffect } from 'react'
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
} from 'recharts'
import Title from '../Title'

export default function HourUV({ state }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    state.weather.hourly.data.forEach(hour => {
      setChartData(prev => [
        ...prev,
        {
          time: hour.thisHour,
          uv: hour.uvIndex,
        },
      ])
    })
  }, [state.weather.hourly.data])

  return (
    <>
      <Title>UV Index</Title>
      <ResponsiveContainer minHeight='200px'>
        <BarChart
          data={chartData}
          syncId='synced'
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}>
          <XAxis dataKey='time' />
          <YAxis tickSize={1} unit='/10' domain={[0, 10]} />
          <CartesianGrid strokeDasharray='3 3' />
          <Bar dataKey='uv' name='High' fill='#F3E723' barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
