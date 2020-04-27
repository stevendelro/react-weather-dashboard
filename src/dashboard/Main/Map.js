import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Grid from '@material-ui/core/Grid'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { mapBoxToken } from '../../util/index'
import Title from '../Title'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function Map({ state }) {
  const classes = useStyles()
  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'>
            <Title>{state.location.placeName}</Title>
            {state.weather.daily.summary}
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ReactMapGL
            latitude={state.location.latitude}
            longitude={state.location.longitude}
            zoom={10}
            width='100%'
            height={400}
            mapStyle='mapbox://styles/mapbox/outdoors-v11'
            mapboxApiAccessToken={mapBoxToken}>
            <Marker
              latitude={state.location.latitude}
              longitude={state.location.longitude}>
              <span role='img' aria-label='pinned location'>
                📍
              </span>
            </Marker>
          </ReactMapGL>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  )
}
