import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

import { mapBoxToken } from '../util/index'
import Title from './Title'


export default function Map({ state }) {
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
