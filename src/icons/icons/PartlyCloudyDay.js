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

function PartlyCloudyDay() {
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
            <circle cx='43.5' cy='35' r='21.4' fill='#FFE499'></circle>
          </g>
          <g>
            <circle cx='43.5' cy='35' r='16.5' fill='#FFD766'></circle>
          </g>
          <circle cx='43.5' cy='35' r='12.4' fill='#FFBC00'></circle>
        </g>
        <g>
          <circle cx='13.4' cy='30' r='8.3' fill='#D1D3D4'></circle>
          <circle cx='30.6' cy='27.8' r='6.6' fill='#FFF'></circle>
          <path
            fill='#D1D3D4'
            d='M39.9 34.4c0 2.1-1.7 3.9-3.9 3.9H12.7c-2.1 0-3.9-1.7-3.9-3.9 0-2.1 16.8-8.4 18.9-8.4 0 0 .7 6.2 5.1 1 1.6-1.8 7.1 5.3 7.1 7.4z'></path>
          <circle cx='37' cy='31.9' r='6.4' fill='#D1D3D4'></circle>
          <path
            fill='#FFF'
            d='M43.4 31.3c-.3-3.1-2.7-5.6-5.8-5.8-2.7.3-4.8 2.5-4.8 5.3 0 2.9 2.4 5.3 5.3 5.3 2.8 0 5.1-2.1 5.3-4.8zM12.6 21.7c-3.9.4-7 3.5-7.4 7.4.4 3.3 3.2 5.9 6.6 5.9 3.7 0 6.7-3 6.7-6.7 0-3.4-2.6-6.2-5.9-6.6z'></path>
          <circle cx='22' cy='22.4' r='8.8' fill='#D1D3D4'></circle>
          <path
            fill='#FFF'
            d='M29.7 20.2c0-1-.2-1.9-.4-2.7-1.6-2.3-4.3-3.8-7.3-3.8-4.9 0-8.8 4-8.8 8.8 0 .8.1 1.6.3 2.3 1.5 2.5 4.3 4.2 7.4 4.2 4.9-.1 8.8-4 8.8-8.8z'></path>
        </g>
      </ResponsiveSVGContent>
    </ResponsiveSVGContainer>
  )
}

export default PartlyCloudyDay
