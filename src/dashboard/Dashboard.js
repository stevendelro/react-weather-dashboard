import React, { useState } from 'react'
import clsx from 'clsx'
import { fade, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import LinearProgress from '@material-ui/core/LinearProgress'
import ErrorDialogue from './ErrorDialogue'
import { MainListItems, SecondaryListItems } from './listItems'
import servePage from './servePage'

import {
  getLocationData,
  getWeather,
  capitalizeFirstLetter,
} from '../util/index'

function Copyleft() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyleft © '}
      <Link color='inherit' href='https://github.com/stevendelro'>
        Steven Del Rosario
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
const drawerWidth = 195

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  linearProgressBar: {
    width: '100%',
    marginTop: '65px',
  },
}))

export default function Dashboard({
  state,
  dispatch,
  displayedPage,
  setDisplayedPage,
}) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [location, setLocation] = useState('')
  const [appBarTitle, setAppBarTitle] = useState('React Weather Dashboard')

  // This handler is used for the left menu drawer "Quick Links"
  const onClickHandler = async location => {
    const { latitude, longitude, placeName } = await getLocationData(
      location,
      null,
      null
    )
    dispatch({
      type: 'SET_LOCATION',
      payload: {
        placeName,
        latitude,
        longitude,
        searchedTerm: capitalizeFirstLetter(location),
      },
    })
    const weatherData = await getWeather(latitude, longitude)
    dispatch({
      type: 'SET_WEATHER',
      payload: weatherData,
    })
    setDisplayedPage('home')
  }

  // This handler  us used for the AppBar search input.
  const submitHandler = async e => {
    e.preventDefault()
    const { latitude, longitude, placeName } = await getLocationData(
      location,
      null,
      null,
      dispatch
    )
    dispatch({
      type: 'SET_LOCATION',
      payload: {
        placeName,
        latitude,
        longitude,
        searchedTerm: capitalizeFirstLetter(location),
      },
    })
    const weatherData = await getWeather(latitude, longitude, dispatch)
    dispatch({
      type: 'SET_WEATHER',
      payload: weatherData,
    })
    setLocation('')
    setDisplayedPage('home')
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  // This is mainly for weird queries, like a string of symbols. It will fire during fetch errors.
  if (state.error.isTrue) {
    return (
      <ErrorDialogue
        errorMessage={state.error.message}
        searchedTerm={location}
      />
    )
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position='absolute'
        className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}>
            <MenuIcon />
          </IconButton>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            className={classes.title}>
            {appBarTitle}
          </Typography>

          {/* Search will appear in Welcome page if geolocation position is initially denied. */}
          {state.noWeatherData && state.deniedGeolocation ? null : (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <form onSubmit={submitHandler}>
                <InputBase
                  placeholder='Search..'
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                />
              </form>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* Left Menu */}
      <Drawer
        variant='permanent'
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}>
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <MainListItems
            setPage={setDisplayedPage}
            setAppBarTitle={setAppBarTitle}
          />
        </List>
        <Divider />
        <List>
          <SecondaryListItems
            onClickHandler={onClickHandler}
            setAppBarTitle={setAppBarTitle}
          />
        </List>
      </Drawer>

      {/* Progress bar is shown in the main area while fetching data */}
      {state.needsWelcomePage || state.weather.loading ? (
        <LinearProgress
          className={classes.linearProgressBar}
          color='secondary'
        />
      ) : (
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth='lg' className={classes.container}>
            {servePage(
              state,
              displayedPage,
              location,
              setLocation,
              submitHandler
            )}
            <Box pt={4}>
              <Copyleft />
            </Box>
          </Container>
        </main>
      )}
    </div>
  )
}
