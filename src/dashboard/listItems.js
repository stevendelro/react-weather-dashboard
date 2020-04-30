import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import HistoryIcon from '@material-ui/icons/History'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import DateRangeIcon from '@material-ui/icons/DateRange'
import MovieFilterIcon from '@material-ui/icons/MovieFilter'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle'
import EuroIcon from '@material-ui/icons/Euro'
import TranslateIcon from '@material-ui/icons/Translate'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import GitHubIcon from '@material-ui/icons/GitHub'

export const MainListItems = ({
  setDisplayedPage,
  setAppBarTitle,
  closeDrawer,
  noWeatherData,
  dispatch,
}) => {
  return (
    <div>
      <ListItem>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary='Menu' />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          if (noWeatherData) {
            closeDrawer()
            setDisplayedPage('welcome')
            dispatch({
              type: 'WELCOME_PAGE_DISPLAYED',
            })
          } else {
            closeDrawer()
            setDisplayedPage('home')
            setAppBarTitle('React Weather Dashboard')
          }
        }}>
        <ListItemIcon>
          <LocationOnIcon />
        </ListItemIcon>
        <ListItemText primary='Main' />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          if (noWeatherData) {
            closeDrawer()
            setDisplayedPage('welcome')
            dispatch({
              type: 'WELCOME_PAGE_DISPLAYED',
            })
          } else {
            closeDrawer()
            setDisplayedPage('hourly')
            setAppBarTitle('Hourly Weather')
          }
        }}>
        <ListItemIcon>
          <QueryBuilderIcon />
        </ListItemIcon>
        <ListItemText primary='Hourly' />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          if (noWeatherData) {
            closeDrawer()
            setDisplayedPage('welcome')
            dispatch({
              type: 'WELCOME_PAGE_DISPLAYED',
            })
          } else {
            closeDrawer()
            setDisplayedPage('daily')
            setAppBarTitle('Daily Weather')
          }
        }}>
        <ListItemIcon>
          <DateRangeIcon />
        </ListItemIcon>
        <ListItemText primary='Daily' />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          if (noWeatherData) {
            closeDrawer()
            setDisplayedPage('welcome')
            dispatch({
              type: 'WELCOME_PAGE_DISPLAYED',
            })
          } else {
            closeDrawer()
            setDisplayedPage('history')
            setAppBarTitle('Search History')
          }
        }}>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary='Search History' />
      </ListItem>
      <ListItem
        button
        onClick={() =>
          (window.location.href =
            'https://github.com/stevendelro/react-weather-dashboard')
        }>
        <ListItemIcon>
          <GitHubIcon />
        </ListItemIcon>
        <ListItemText primary='Source Code' />
      </ListItem>
    </div>
  )
}

export const SecondaryListItems = ({ onClickHandler, closeDrawer }) => {
  return (
    <div>
      <ListSubheader inset>Quick Links</ListSubheader>
      <ListItem
        button
        onClick={() => {
          closeDrawer()
          onClickHandler('Los Angeles')
        }}>
        <ListItemIcon>
          <MovieFilterIcon />
        </ListItemIcon>
        <ListItemText primary='Los Angeles' />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          closeDrawer()
          onClickHandler('New York')
        }}>
        <ListItemIcon>
          <LocationCityIcon />
        </ListItemIcon>
        <ListItemText primary='New York' />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          closeDrawer()
          onClickHandler('Tokyo')
        }}>
        <ListItemIcon>
          <AirportShuttleIcon />
        </ListItemIcon>
        <ListItemText primary='Tokyo' />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          closeDrawer()
          onClickHandler('London')
        }}>
        <ListItemIcon>
          <EuroIcon />
        </ListItemIcon>
        <ListItemText primary='London' />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          closeDrawer()
          onClickHandler('Moscow')
        }}>
        <ListItemIcon>
          <AcUnitIcon />
        </ListItemIcon>
        <ListItemText primary='Moscow' />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          closeDrawer()
          onClickHandler('Beijing')
        }}>
        <ListItemIcon>
          <TranslateIcon />
        </ListItemIcon>
        <ListItemText primary='Beijing' />
      </ListItem>
    </div>
  )
}
