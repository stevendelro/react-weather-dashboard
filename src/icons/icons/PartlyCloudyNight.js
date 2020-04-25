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

function PartlyCloudyNight() {
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
          <circle cx='23.3' cy='35.1' r='17.5' fill='#F1E5A1'></circle>
          <path
            fill='#F5EEBC'
            d='M5.8 35.1c0 5.7 2.7 10.8 6.9 14 1.3.3 2.6.5 4 .5 9.7 0 17.5-7.9 17.5-17.5 0-5.7-2.7-10.8-6.9-14-1.3-.3-2.6-.5-4-.5-9.6-.1-17.5 7.8-17.5 17.5z'></path>
          <circle cx='17.9' cy='26.6' r='2.4' fill='#DBD093'></circle>
          <circle cx='12.4' cy='35.1' r='3.4' fill='#DBD093'></circle>
          <circle cx='21' cy='35.1' r='1.7' fill='#DBD093'></circle>
        </g>
        <g>
          <path
            fill='#D1D3D4'
            d='M65.3 47.8c0 2.6-3 4.8-6.7 4.8H18.4c-3.7 0-6.7-2.1-6.7-4.8 0-2.6 3-4.8 6.7-4.8h40.2c3.7 0 6.7 2.2 6.7 4.8z'></path>
          <circle cx='36.3' cy='36.5' r='8.8' fill='#FFF'></circle>
          <circle cx='45.9' cy='42.1' r='8' fill='#D1D3D4'></circle>
          <path
            fill='#FFF'
            d='M45.9 34.1c-1.9 0-3.6.7-5 1.8-.9 1.3-1.4 2.9-1.4 4.6 0 4.5 3.6 8.1 8.1 8.1 1.7 0 3.3-.5 4.6-1.4 1.1-1.4 1.8-3.1 1.8-5 0-4.5-3.6-8.1-8.1-8.1z'></path>
          <circle cx='60.1' cy='47.4' r='5.2' fill='#D1D3D4'></circle>
          <circle cx='17.4' cy='46' r='6.7' fill='#D1D3D4'></circle>
          <path
            fill='#FFF'
            d='M22.4 44.6c0-1.8-.8-3.5-2-4.6-.9-.4-1.9-.7-2.9-.7-3.7 0-6.7 3-6.7 6.7 0 1.1.3 2.1.7 2.9 1.2 1.2 2.8 2 4.6 2 3.4 0 6.3-2.8 6.3-6.3z'></path>
          <circle cx='25.3' cy='43' r='7.9' fill='#D1D3D4'></circle>
          <path
            fill='#FFF'
            d='M25.3 35.2c-4.4 0-7.9 3.5-7.9 7.9 0 1.5.4 2.9 1.2 4.1 1.4 1.2 3.2 2 5.2 2 4.2 0 7.7-3.4 7.7-7.7 0-2-.8-3.8-2-5.2-1.3-.7-2.7-1.1-4.2-1.1z'></path>
          <circle cx='55.5' cy='42.1' r='5.6' fill='#D1D3D4'></circle>
          <path
            fill='#FFF'
            d='M55.6 46.5c2.8 0 5.2-2.2 5.5-4.9-.3-2.8-2.7-5-5.6-5-2.6 0-4.7 1.7-5.4 4.1v.4c0 3 2.5 5.4 5.5 5.4z'></path>
          <path
            fill='#FFF'
            d='M60.1 42.1c-2.7 0-4.9 2-5.2 4.6.2 2.7 2.5 4.8 5.2 4.8s4.9-2.1 5.2-4.7c-.3-2.6-2.5-4.7-5.2-4.7z'></path>
        </g>
      </ResponsiveSVGContent>
    </ResponsiveSVGContainer>
  )
}

export default PartlyCloudyNight
