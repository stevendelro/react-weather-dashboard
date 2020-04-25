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

function Wind() {
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
          <circle cx='54.5' cy='32.2' r='8.5' fill='#D1D3D4'></circle>
          <circle cx='37' cy='30' r='6.8' fill='#F1F2F2'></circle>
          <path
            fill='#D1D3D4'
            d='M27.6 36.7c0 2.2 1.8 3.9 3.9 3.9h23.7c2.2 0 3.9-1.8 3.9-3.9 0-2.2-17.1-8.6-19.3-8.6 0 0-.7 6.3-5.2 1-1.4-1.8-7 5.5-7 7.6z'></path>
          <circle cx='30.5' cy='34.2' r='6.5' fill='#D1D3D4'></circle>
          <path
            fill='#F1F2F2'
            d='M24 33.6c.3-3.2 2.8-5.7 5.9-5.9 2.7.3 4.9 2.6 4.9 5.4 0 3-2.4 5.4-5.4 5.4-2.8-.1-5.1-2.2-5.4-4.9zM55.4 23.8c4 .4 7.1 3.6 7.5 7.5-.4 3.4-3.2 6-6.7 6-3.7 0-6.8-3-6.8-6.8 0-3.4 2.6-6.3 6-6.7z'></path>
          <circle cx='45.8' cy='24.6' r='9' fill='#D1D3D4'></circle>
          <path
            fill='#F1F2F2'
            d='M38 22.2c0-1 .2-1.9.4-2.8 1.6-2.3 4.3-3.9 7.4-3.9 5 0 9 4 9 9 0 .8-.1 1.6-.3 2.4-1.6 2.5-4.4 4.2-7.6 4.2-4.9.1-8.9-3.9-8.9-8.9z'></path>
        </g>
        <g>
          <circle cx='13.1' cy='21.5' r='5.2' fill='#D1D3D4'></circle>
          <circle cx='23.9' cy='20.1' r='4.2' fill='#F1F2F2'></circle>
          <path
            fill='#D1D3D4'
            d='M29.7 24.3c0 1.3-1.1 2.4-2.4 2.4H12.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 10.5-5.3 11.8-5.3 0 0 .4 3.9 3.2.6.9-1.1 4.4 3.4 4.4 4.7z'></path>
          <circle cx='27.9' cy='22.7' r='4' fill='#D1D3D4'></circle>
          <path
            fill='#F1F2F2'
            d='M31.9 22.4c-.2-1.9-1.7-3.5-3.7-3.7-1.7.2-3 1.6-3 3.3 0 1.8 1.5 3.3 3.3 3.3 1.8.1 3.2-1.3 3.4-2.9zM12.6 16.4c-2.5.2-4.4 2.2-4.6 4.6.2 2.1 2 3.7 4.1 3.7 2.3 0 4.2-1.9 4.2-4.2 0-2.1-1.7-3.9-3.7-4.1z'></path>
          <circle cx='18.5' cy='16.8' r='5.5' fill='#D1D3D4'></circle>
          <path
            fill='#F1F2F2'
            d='M23.3 15.4c0-.6-.1-1.2-.3-1.7-1-1.4-2.7-2.4-4.5-2.4-3.1 0-5.5 2.5-5.5 5.5 0 .5.1 1 .2 1.5 1 1.6 2.7 2.6 4.7 2.6 2.9 0 5.4-2.5 5.4-5.5z'></path>
        </g>
        <g
          fill='none'
          stroke='#FFF'
          strokeLinecap='round'
          strokeMiterlimit='10'>
          <path d='M57.4 44.7H20.9M57.4 47.4H15.3c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4h1.9M57.4 52.7H29.3c-1.6 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8h1.5'></path>
          <path d='M57.4 49.8H20.3c-1.6 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8h1.5'></path>
        </g>
      </ResponsiveSVGContent>
    </ResponsiveSVGContainer>
  )
}

export default Wind
