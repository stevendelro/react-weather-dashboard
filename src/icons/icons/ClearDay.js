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

function ClearDay() {
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
          <circle cx='35' cy='35' r='23.5' fill='#FFE499'></circle>
        </g>
        <g>
          <circle cx='35' cy='35' r='18.1' fill='#FFD766'></circle>
        </g>
        <circle cx='35' cy='35' r='13.6' fill='#FFBC00'></circle>
      </ResponsiveSVGContent>
    </ResponsiveSVGContainer>
  )
}

export default ClearDay
