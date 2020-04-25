import axios from 'axios'
const BASE_MAPBOX_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places'
export const mapBoxToken =
  'pk.eyJ1Ijoic3RldmVuZGVscm9zYXJpbyIsImEiOiJjanl2Zndpbmwwb3p3M2lta2xyNjlhc3Q0In0.EUeki9FFRcyDIirOGn26vw'

// Returns a object with the browser geolocation coordinates as a promise.
export const getPosition = () => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

// Gets location data by location name or by latitude/longitude coordinates.
export const getLocationData = async (location, latitude, longitude) => {
  let lat, long, placeName, shortName, mapBoxUrl

  if (!location) {
    mapBoxUrl = `${BASE_MAPBOX_URL}/${longitude},${latitude}.json?&access_token=${mapBoxToken}`
  } else {
    mapBoxUrl = `${BASE_MAPBOX_URL}/${encodeURIComponent(
      location
    )}.json?limit=1&access_token=${mapBoxToken}`
  }

  await axios
    .get(mapBoxUrl)
    .then(response => {
      long = response.data.features[0].center[0]
      lat = response.data.features[0].center[1]
      placeName = response.data.features[0].place_name
      shortName = captureFirstStringBeforeComma(
        response.data.features[0].place_name
      )
    })
    .catch(error => console.error('ERROR DURING MAPBOX FETCH: ', error))

  return {
    latitude: lat,
    longitude: long,
    placeName,
    shortName,
  }
}

// Fetches weather by latitude/longitude coordinates.
export const getWeather = async (latitude, longitude) => {
  let weatherData
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const darkSkyToken = '49672afaebb7601daeb3e11bb45cc16f'
  const darkSkiesUrl = `https://api.darksky.net/forecast/${darkSkyToken}/`
  await axios
    .get(`${proxy}${darkSkiesUrl}${latitude},${longitude}?exclude=flags`)
    .then(request => {
      weatherData = request.data
    })
    .catch(error => console.log('ERROR DURING DARKSKY FETCH: ', error))
  return weatherData
}

export function captureFirstStringBeforeComma(str) {
  return str.match(/^(.+?)(?=,)/)[0]
}

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getCardinalDirection(angle) {
  if (typeof angle === 'string') angle = parseInt(angle)
  if (angle <= 0 || angle > 360 || typeof angle === 'undefined') return '☈'
  const arrows = {
    north: '↑',
    north_east: '↗',
    east: '→',
    south_east: '↘',
    south: '↓',
    south_west: '↙',
    west: '←',
    north_west: '↖',
  }
  const directions = Object.keys(arrows)
  const degree = 360 / directions.length
  angle = angle + degree / 2
  for (let i = 0; i < directions.length; i++) {
    if (angle >= i * degree && angle < (i + 1) * degree)
      return arrows[directions[i]]
  }
  return arrows['north']
}
