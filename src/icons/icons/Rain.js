import React from 'react'
import styled from 'styled-components'

const ResponsiveSVGContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  vertical-align: middle;
  overflow: hidden;
`

const ResponsiveSVGContent = styled.svg`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
`

function Rain() {
  return (
    <ResponsiveSVGContainer>
      <ResponsiveSVGContent
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        preserveAspectRatio='xMinYMin meet'
        x='0'
        y='0'
        version='1.1'
        viewBox='0 0 70 70'
        xmlSpace='preserve'>
        <g
          fill='none'
          stroke='#33B5D9'
          strokeLinecap='round'
          strokeMiterlimit='10'
          strokeWidth='1.5'>
          <path d='M24.2 40.2L16.1 54.5'></path>
          <path d='M36.8 28.7L24 50.9'></path>
          <path d='M37.8 36.2L27.3 54.5'></path>
          <path d='M40.8 40.2L34.6 51.2'></path>
          <path d='M47.8 38.5L38.4 54.5'></path>
          <path d='M56.3 33.1L46.3 50.9'></path>
          <path d='M58 40.2L49.9 54.5'></path>
        </g>
        <g>
          <circle cx='13' cy='27.7' r='6.5' fill='#D1D3D4'></circle>
          <circle cx='26.4' cy='26' r='5.2' fill='#E6E7E8'></circle>
          <path
            fill='#D1D3D4'
            d='M33.6 31.1c0 1.7-1.4 3-3 3H12.5c-1.7 0-3-1.4-3-3 0-1.7 13-6.5 14.7-6.5 0 0 .5 4.8 3.9.8 1.2-1.5 5.5 4.1 5.5 5.7z'></path>
          <circle cx='31.4' cy='29.1' r='5' fill='#D1D3D4'></circle>
          <path
            fill='#E6E7E8'
            d='M36.3 28.7c-.2-2.4-2.1-4.3-4.5-4.5-2.1.2-3.7 2-3.7 4.1 0 2.3 1.9 4.1 4.1 4.1 2.2 0 3.9-1.6 4.1-3.7zM12.3 21.3c-3 .3-5.4 2.7-5.7 5.7.3 2.6 2.5 4.6 5.1 4.6 2.9 0 5.2-2.3 5.2-5.2 0-2.7-2-4.8-4.6-5.1z'></path>
          <circle cx='19.6' cy='21.8' r='6.9' fill='#D1D3D4'></circle>
          <path
            fill='#E6E7E8'
            d='M25.6 20.1c0-.7-.1-1.5-.3-2.1-1.2-1.8-3.3-3-5.7-3-3.8 0-6.9 3.1-6.9 6.9 0 .6.1 1.2.3 1.8 1.2 1.9 3.3 3.2 5.8 3.2 3.8 0 6.8-3.1 6.8-6.8z'></path>
        </g>
        <g>
          <path
            fill='#A7A9AC'
            d='M65.2 39.5c0 2.5-2.8 4.5-6.3 4.5H21c-3.5 0-6.3-2-6.3-4.5S17.5 35 21 35h37.9c3.4 0 6.3 2 6.3 4.5z'></path>
          <circle cx='37.8' cy='28.8' r='8.2' fill='#E6E7E8'></circle>
          <circle cx='46.9' cy='34.1' r='7.6' fill='#A7A9AC'></circle>
          <path
            fill='#E6E7E8'
            d='M46.9 26.5c-1.8 0-3.4.6-4.7 1.7-.8 1.2-1.3 2.7-1.3 4.3 0 4.2 3.4 7.7 7.7 7.7 1.6 0 3.1-.5 4.3-1.3 1-1.3 1.7-2.9 1.7-4.7-.1-4.3-3.5-7.7-7.7-7.7z'></path>
          <circle cx='60.2' cy='39.1' r='4.9' fill='#A7A9AC'></circle>
          <circle cx='20' cy='37.7' r='6.3' fill='#A7A9AC'></circle>
          <path
            fill='#E6E7E8'
            d='M24.7 36c0-1.7-.7-3.3-1.9-4.3-.8-.5-1.8-.7-2.8-.7-3.5 0-6.3 2.8-6.3 6.3 0 1 .2 1.9.7 2.8 1.1 1.2 2.6 1.9 4.3 1.9 3.3-.1 6-2.8 6-6z'></path>
          <circle cx='27.5' cy='35' r='7.4' fill='#A7A9AC'></circle>
          <path
            fill='#E6E7E8'
            d='M27.5 27.5c-4.1 0-7.4 3.3-7.4 7.4 0 1.4.4 2.8 1.1 3.9 1.3 1.2 3 1.9 4.9 1.9 4 0 7.2-3.2 7.2-7.2 0-1.9-.7-3.6-1.9-4.9-1.2-.7-2.5-1.1-3.9-1.1z'></path>
          <circle cx='55.9' cy='34.1' r='5.3' fill='#A7A9AC'></circle>
          <path
            fill='#E6E7E8'
            d='M56 37.7c2.7 0 4.9-2 5.1-4.6-.3-2.7-2.5-4.7-5.2-4.7-2.4 0-4.4 1.6-5.1 3.8v.4c.1 2.8 2.4 5.1 5.2 5.1z'></path>
          <path
            fill='#E6E7E8'
            d='M60.2 34.1c-2.5 0-4.6 1.9-4.9 4.3.2 2.5 2.3 4.5 4.9 4.5 2.6 0 4.6-1.9 4.9-4.4-.2-2.4-2.3-4.4-4.9-4.4z'></path>
        </g>
      </ResponsiveSVGContent>
    </ResponsiveSVGContainer>
  )
}

export default Rain
