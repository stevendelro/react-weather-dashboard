import React, { useEffect, useReducer } from 'react'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import Dashboard from './dashboard/Dashboard'

import { getWeather, getPosition, getLocationData } from './util/index'

const initialState = {
  error: false,
  noWeatherData: true,
  noHistoryData: true,
  noLocationData: true,
  weather: {
    loading: false,
    currently: {},
    hourly: {},
    daily: {},
  },
  location: {
    placeName: '',
    shortName: '',
    latitude: '',
    longitude: '',
    timeSearched: '',
  },
  historyList: [],
}

function App() {
  
  const reducer = (state, action) => {
    const now = moment()
    const getDate = now.format('L')
    const getTime = now.format('LTS')

    switch (action.type) {
      case 'SET_WEATHER':
        // DAILY: Format Timestamp to human legible weekday and day of month
        action.payload.daily.data.forEach(day => {
          day.weekday = moment.unix(day.time).format('ddd')
          day.date = moment.unix(day.time).format('M/D')
          
          // Format Timestamp to extract sunrise/sunset time.
          day.sunrise = moment.unix(day.sunriseTime).format('h:mm')
          day.sunset = moment.unix(day.sunsetTime).format('h:mm')
        })
        // HOURLY: Format Timestamp to hour of day.
        action.payload.hourly.data.forEach(hour => {
          hour.thisHour = moment.unix(hour.time).format('ha')
          hour.tableHour = moment.unix(hour.time).format('h a')

        })
        
        return {
          ...state,
          noWeatherData: false,
          weather: {
            ...state.weather,
            loading: false,
            currently: {
              ...action.payload.currently,
              today: moment
                .unix(action.payload.currently.time)
                .format('dddd, MMMM Do')
            },
            hourly: { ...action.payload.hourly },
            daily: { ...action.payload.daily },
          },
        }
      case 'SET_LOCATION':
        return {
          ...state,
          noLocationData: false,
          weather: {
            ...state.weather,
            loading: true,
          },
          location: {
            placeName: action.payload.placeName,
            latitude: action.payload.latitude,
            longitude: action.payload.longitude,
            shortName: action.payload.shortName,
            searchedTerm: action.payload.searchedTerm
          },
        }
      case 'LOG_LAST_CITY': {
        // Splicing the history list to keep the most recent 7 searches.
        if (state.historyList.length > 7) {
          return {
            ...state,
            noHistoryData: false,
            historyList: [
              ...state.historyList.splice(
                state.historyList.length - 7,
                state.historyList.length
              ),
              {
                key: uuidv4(),
                location: action.payload.location,
                date: getDate,
                timeSearched: getTime,
              },
            ],
          }
        } else {
          return {
            ...state,
            noHistoryData: false,
            historyList: [
              ...state.historyList,
              {
                key: uuidv4(),
                location: action.payload.location,
                timeSearched: getTime,
                date: getDate,
              },
            ],
          }
        }
      }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getPosition()
      .then(({ coords }) => getWeather(coords.latitude, coords.longitude))
      .then(initialWeather => {
        console.log('initialweather', initialWeather)
        dispatch({
          type: 'SET_WEATHER',
          payload: initialWeather,
        })
      })
      .catch(err => console.error(err))
  }, [])

  // Auto fetch the name of the browser's Geolocation coordinates.
  useEffect(() => {
    getPosition()
      .then(({ coords }) =>
        getLocationData(null, coords.latitude, coords.longitude)
      )
      .then(locationData => {
        dispatch({
          type: 'SET_LOCATION',
          payload: locationData,
        })
      })
  }, [])

  // Add the location of the current weather fetch to search history.
  useEffect(() => {
    if (state.location.placeName) {
      dispatch({
        type: 'LOG_LAST_CITY',
        payload: {
          location: state.location.placeName,
        },
      })
    }
  }, [state.location.placeName])

  return (
    <div className='App'>
      <Dashboard state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App
