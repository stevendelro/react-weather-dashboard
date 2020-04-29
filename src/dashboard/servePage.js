import React from 'react'
import WelcomePage from './WelcomePage'
import HomePage from './Main/HomePage'
import DailyPage from './Daily/DailyPage'
import HourlyPage from './Hourly/HourlyPage'
import NotFoundPage from './NotFoundPage'
import SearchHistoryPage from './History/SearchHistoryPage'

const servePage = (state, pageName, location, setLocation, submitHandler) => {
  switch (pageName) {
    case 'home':
      return <HomePage state={state} />

    case 'daily':
      return <DailyPage state={state} />

    case 'hourly':
      return <HourlyPage state={state} />

    case 'history':
      return <SearchHistoryPage state={state} />

    case 'welcome':
      return (
        <WelcomePage
          location={location}
          setLocation={setLocation}
          submitHandler={submitHandler}
        />
      )

    default:
      return <NotFoundPage />
  }
}

export default servePage
