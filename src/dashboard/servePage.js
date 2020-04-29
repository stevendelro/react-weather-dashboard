import React from 'react'
import HomePage from './Main/HomePage'
import DailyPage from './Daily/DailyPage'
import HourlyPage from './Hourly/HourlyPage'
import NotFoundPage from './NotFoundPage'
import SearchHistoryPage from './History/SearchHistoryPage'

const servePage = (state, pageName) => {
  switch (pageName) {
    case 'home':
      return <HomePage state={state} />

    case 'daily':
      return <DailyPage state={state} />

    case 'hourly':
      return <HourlyPage state={state} />

    case 'history':
      return<SearchHistoryPage state={state} />

    default:
      return <NotFoundPage />
  }
}

export default servePage
