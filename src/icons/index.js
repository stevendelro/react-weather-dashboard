import React from 'react'
import ClearDay from './icons/ClearDay'
import ClearNight from './icons/ClearNight'
import Cloudy from './icons/Cloudy'
import Fog from './icons/Fog'
import PartlyCloudyDay from './icons/PartlyCloudyDay'
import PartlyCloudyNight from './icons/PartlyCloudyNight'
import Rain from './icons/Rain'
import Sleet from './icons/Sleet'
import Snow from './icons/Snow'
import Wind from './icons/Wind'

const serveIcon = iconName => {
  switch (iconName) {
    case 'clear-day':
      return <ClearDay />

    case 'clear-night':
      return <ClearNight />

    case 'partly-cloudy-day':
      return <PartlyCloudyDay />

    case 'partly-cloudy-night':
      return <PartlyCloudyNight />

    case 'cloudy':
      return <Cloudy />

    case 'rain':
      return <Rain />

    case 'sleet':
      return <Sleet />

    case 'snow':
      return <Snow />

    case 'wind':
      return <Wind />

    case 'fog':
      return <Fog />

    default:
      return <div></div>
  }
}

export default serveIcon
