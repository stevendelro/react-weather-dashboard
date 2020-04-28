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

export default function DailyRain({ state }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    state.weather.daily.data.forEach(day => {
      setChartData(prev => [
        ...prev,
        {
          weekday: day.weekday,
          rain: Number((day.precipProbability * 100)),
        },
      ])
    })
  }, [state.weather.daily.data])

  return (
    <>
      <Title>Rain</Title>
      <ResponsiveContainer minHeight='200px'>
        <BarChart
          data={chartData}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}>
          <XAxis dataKey='weekday' />
          <YAxis unit='%' domain={['dataMin', 100]} />
          <CartesianGrid strokeDasharray='3 3' />
          <Bar
            dataKey='rain'
            name='High'
            fill='#49001C'
            unit='%'
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
