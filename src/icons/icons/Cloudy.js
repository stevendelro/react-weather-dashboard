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

function Cloudy() {
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
        <g>
          <g>
            <circle cx='27.7' cy='33.8' r='17.4' fill='#FFE499'></circle>
          </g>
          <g>
            <circle cx='27.7' cy='33.8' r='13.4' fill='#FFD766'></circle>
          </g>
          <circle cx='27.7' cy='33.8' r='10.1' fill='#FFBC00'></circle>
        </g>
        <g>
          <path
            fill='#D1D3D4'
            d='M68.5 33.1c0 2.1-2.4 3.8-5.3 3.8H31.4c-2.9 0-5.3-1.7-5.3-3.8 0-2.1 2.4-3.8 5.3-3.8h31.8c3 0 5.3 1.7 5.3 3.8z'></path>
          <circle cx='45.6' cy='24.1' r='6.9' fill='#FFF'></circle>
          <circle cx='53.2' cy='28.6' r='6.4' fill='#D1D3D4'></circle>
          <path
            fill='#FFF'
            d='M53.2 22.2c-1.5 0-2.9.5-4 1.4-.7 1-1.1 2.3-1.1 3.6 0 3.6 2.9 6.4 6.4 6.4 1.4 0 2.6-.4 3.6-1.1.9-1.1 1.4-2.5 1.4-4 .1-3.4-2.8-6.3-6.3-6.3z'></path>
          <circle cx='64.4' cy='32.8' r='4.1' fill='#D1D3D4'></circle>
          <circle cx='30.6' cy='31.6' r='5.3' fill='#D1D3D4'></circle>
          <path
            fill='#FFF'
            d='M34.5 30.6c0-1.4-.6-2.7-1.6-3.7-.7-.3-1.5-.5-2.3-.5-2.9 0-5.3 2.4-5.3 5.3 0 .8.2 1.6.5 2.3.9 1 2.2 1.6 3.7 1.6 2.8 0 5-2.3 5-5z'></path>
          <circle cx='36.9' cy='29.3' r='6.2' fill='#D1D3D4'></circle>
          <path
            fill='#FFF'
            d='M36.9 23.1c-3.4 0-6.2 2.8-6.2 6.2 0 1.2.3 2.3.9 3.3 1.1 1 2.5 1.6 4.1 1.6 3.4 0 6.1-2.7 6.1-6.1 0-1.6-.6-3-1.6-4.1-1-.6-2.1-.9-3.3-.9z'></path>
          <circle cx='60.8' cy='28.6' r='4.4' fill='#D1D3D4'></circle>
          <path
            fill='#FFF'
            d='M60.9 32.1c2.3 0 4.1-1.7 4.3-3.9-.2-2.2-2.1-4-4.4-4-2 0-3.7 1.4-4.3 3.2v.3c0 2.4 2 4.4 4.4 4.4z'></path>
          <path
            fill='#FFF'
            d='M64.4 28.6c-2.1 0-3.9 1.6-4.1 3.6.2 2.1 1.9 3.8 4.1 3.8 2.1 0 3.9-1.6 4.1-3.7-.2-2.1-2-3.7-4.1-3.7z'></path>
        </g>
        <g>
          <circle cx='9.1' cy='45.9' r='7.6' fill='#D1D3D4'></circle>
          <circle cx='24.9' cy='43.9' r='6.1' fill='#FFF'></circle>
          <path
            fill='#D1D3D4'
            d='M33.4 50c0 2-1.6 3.6-3.6 3.6H8.4c-2 0-3.6-1.6-3.6-3.6s15.4-7.7 17.4-7.7c0 0 .6 5.7 4.6.9 1.5-1.7 6.6 4.8 6.6 6.8z'></path>
          <circle cx='30.8' cy='47.7' r='5.9' fill='#D1D3D4'></circle>
          <path
            fill='#FFF'
            d='M36.6 47.1c-.2-2.8-2.5-5.1-5.4-5.4-2.5.3-4.4 2.3-4.4 4.9 0 2.7 2.2 4.9 4.9 4.9 2.6 0 4.7-1.9 4.9-4.4zM8.3 38.3c-3.6.4-6.4 3.2-6.8 6.8.3 3 2.9 5.4 6.1 5.4 3.4 0 6.1-2.7 6.1-6.1 0-3.1-2.4-5.7-5.4-6.1z'></path>
          <circle cx='16.9' cy='39' r='8.1' fill='#D1D3D4'></circle>
          <path
            fill='#FFF'
            d='M24 36.9c0-.9-.1-1.7-.4-2.5-1.5-2.1-3.9-3.5-6.7-3.5-4.5 0-8.1 3.6-8.1 8.1 0 .7.1 1.5.3 2.2 1.4 2.3 3.9 3.8 6.8 3.8 4.5 0 8.1-3.6 8.1-8.1z'></path>
        </g>
      </ResponsiveSVGContent>
    </ResponsiveSVGContainer>
  )
}

export default Cloudy
