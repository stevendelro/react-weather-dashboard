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

function ClearNight() {
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
          <circle cx='32.6' cy='36.2' r='20' fill='#F1E5A1'></circle>
          <path
            fill='#F5EEBC'
            d='M12.7 36.2c0 6.5 3.1 12.2 7.9 15.9 1.5.3 3 .5 4.6.5 11 0 20-8.9 20-20 0-6.5-3.1-12.2-7.9-15.9-1.5-.3-3-.5-4.6-.5-11.1 0-20 9-20 20z'></path>
          <circle cx='26.4' cy='26.6' r='2.7' fill='#DBD093'></circle>
          <circle cx='20.2' cy='36.2' r='3.8' fill='#DBD093'></circle>
          <circle cx='29.9' cy='36.2' r='2' fill='#DBD093'></circle>
        </g>
        <g fill='#FFF'>
          <path d='M11.5 25c-1.3.2-1.4.3-1.5 1.5-.2-1.3-.3-1.4-1.5-1.5 1.3-.2 1.4-.3 1.5-1.5.1 1.2.2 1.4 1.5 1.5z'></path>
          <path d='M55.7 26.6c-1.3.2-1.4.3-1.5 1.5-.2-1.3-.3-1.4-1.5-1.5 1.3-.2 1.4-.3 1.5-1.5.1 1.2.2 1.3 1.5 1.5z'></path>
          <path d='M61 34.2c-1.6.2-1.8.4-2 2-.2-1.6-.4-1.8-2-2 1.6-.2 1.8-.4 2-2 .2 1.7.4 1.8 2 2z'></path>
          <path d='M64.8 26.9c-2.1.3-2.3.5-2.6 2.6-.3-2.1-.5-2.3-2.6-2.6 2.1-.3 2.3-.5 2.6-2.6.3 2.1.5 2.3 2.6 2.6z'></path>
          <path d='M18.6 16.5c-1.6.2-1.8.4-2 2-.2-1.6-.4-1.8-2-2 1.6-.2 1.8-.4 2-2 .2 1.6.4 1.8 2 2z'></path>
          <path d='M10.5 18.5c-1.6.2-1.8.4-2 2-.2-1.6-.4-1.8-2-2 1.6-.2 1.8-.4 2-2 .1 1.6.3 1.8 2 2z'></path>
        </g>
      </ResponsiveSVGContent>
    </ResponsiveSVGContainer>
  )
}

export default ClearNight
