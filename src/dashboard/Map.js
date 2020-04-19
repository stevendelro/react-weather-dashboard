import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ReactMapGL, { Marker } from 'react-map-gl'

import { mapBoxToken } from '../util/index'
import Title from './Title'

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}))

export default function Map({ state }) {
  const classes = useStyles()
  return (
    <>
      <Title>{state.location.placeName}</Title>
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
    </>
  )
}
