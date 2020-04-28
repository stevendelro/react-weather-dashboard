import React from 'react'
import HomePage from './Main/HomePage'
import DailyPage from './Daily/DailyPage'
import HourlyPage from './Hourly/HourlyPage'
import NotFoundPage from './NotFoundPage'

const servePage = (state, pageName) => {
  switch (pageName) {
    case 'home':
      return <HomePage state={state} />

    case 'daily':
      return <DailyPage state={state} />

    case 'hourly':
      return <HourlyPage state={state} />

    default:
      return <NotFoundPage />
  }
}

export default servePage
