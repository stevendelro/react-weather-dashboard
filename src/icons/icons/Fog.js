import React from 'react'
import styled from 'styled-components'

function Fog() {
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

  return (
    <ResponsiveSVGContainer>
      <ResponsiveSVGContent
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        preserveAspectRatio='xMinYMin meet'
        x='0'
        y='0'
        enableBackground='new 0 0 512.001 512.001'
        version='1.1'
        viewBox='0 0 512.001 512.001'
        xmlSpace='preserve'>
        <path
          fill='#EDEBED'
          d='M496.471 271.599c-1.822 0-3.67-.424-5.398-1.333l-7.814-4.144c-28.606-15.257-55.628-29.666-110.908-29.666-23.341 0-43.526 2.606-61.719 7.962-6.182 1.826-12.636-1.712-14.451-7.871-1.814-6.167 1.708-12.636 7.875-14.447 20.356-6 42.696-8.917 68.295-8.917 61.098 0 91.987 16.469 121.858 32.401l7.682 4.076c5.689 2.985 7.882 10.023 4.894 15.712-2.079 3.962-6.125 6.227-10.314 6.227z'></path>
        <path
          fill='#DBD9DC'
          d='M232.736 279.341a11.63 11.63 0 01-10.557-6.727c-2.712-5.826-.186-12.75 5.64-15.462 7.788-3.621 15-7.47 22.632-11.545l7.901-4.189c5.693-3 12.731-.788 15.712 4.894 2.989 5.689.795 12.727-4.894 15.712l-7.765 4.121c-7.572 4.038-15.405 8.22-23.769 12.113a11.63 11.63 0 01-4.9 1.083z'></path>
        <path
          fill='#EDEBED'
          d='M139.616 298.515c-61.098 0-91.984-16.477-121.851-32.409l-7.655-4.061c-5.689-2.992-7.882-10.023-4.894-15.712 2.992-5.682 10.011-7.886 15.712-4.894l7.792 4.136c28.602 15.257 55.62 29.666 110.896 29.666 17.068 0 32.204-1.364 46.265-4.159 6.303-1.28 12.432 2.833 13.685 9.136s-2.837 12.432-9.14 13.682c-15.576 3.108-32.197 4.615-50.81 4.615z'></path>
        <path
          fill='#AEA8AF'
          d='M139.616 248.092a311.08 311.08 0 01-19.803-.614c-8.549-.545-15.038-7.924-14.492-16.477.545-8.545 7.811-14.985 16.477-14.492 5.72.371 11.716.553 17.818.553 54.306 0 80.908-14.189 109.071-29.204 30.287-16.151 61.605-32.856 123.665-32.856 62.067 0 93.393 16.704 123.684 32.856l7.659 4.068c7.587 3.977 10.507 13.356 6.526 20.947-3.985 7.598-13.356 10.523-20.951 6.523l-7.837-4.151c-28.166-15.023-54.772-29.212-109.082-29.212-54.302 0-80.904 14.189-109.063 29.204-30.291 16.15-61.608 32.855-123.672 32.855z'></path>
        <path
          fill='#C0BCC1'
          d='M62.06 235.47c-1.803 0-3.636-.318-5.428-.992-15.379-5.742-28.299-12.636-40.791-19.303l-7.542-4c-7.583-3.985-10.5-13.371-6.515-20.954 3.985-7.583 13.352-10.515 20.954-6.515l7.708 4.091c12.136 6.477 23.594 12.591 37.049 17.621 8.026 2.992 12.102 11.932 9.102 19.962-2.329 6.234-8.245 10.09-14.537 10.09z'></path>
        <path
          fill='#AEA8AF'
          d='M172.032 354.863c-7.739 0-14.435-5.78-15.386-13.659-1.023-8.507 5.042-16.235 13.549-17.257 34.822-4.197 56.033-15.507 78.488-27.484 30.287-16.151 61.609-32.856 123.669-32.856 62.067 0 93.393 16.704 123.684 32.856l7.659 4.068c7.587 3.977 10.507 13.356 6.526 20.947-3.985 7.598-13.356 10.515-20.951 6.523l-7.837-4.151c-28.166-15.023-54.772-29.212-109.082-29.212-54.306 0-80.904 14.182-109.067 29.204-23.985 12.788-48.791 26.015-89.378 30.909-.628.074-1.256.112-1.874.112z'></path>
        <path
          fill='#C0BCC1'
          d='M116.351 355.787c-.424 0-.852-.015-1.28-.053-46.431-3.788-73.215-18.076-99.12-31.893l-7.644-4.061C.72 315.795-2.2 306.417 1.784 298.833c3.981-7.591 13.382-10.515 20.947-6.523l7.826 4.151c24.178 12.894 47.015 25.075 87.037 28.348 8.542.697 14.901 8.182 14.201 16.727-.66 8.107-7.452 14.251-15.444 14.251z'></path>
        <path
          fill='#EDEBED'
          d='M496.471 162.994c-1.822 0-3.674-.424-5.401-1.333l-7.723-4.098c-8.685-4.636-16.894-9.015-25.901-13.045-5.867-2.621-8.496-9.507-5.871-15.371 2.617-5.871 9.504-8.5 15.371-5.871 9.75 4.356 18.701 9.136 27.356 13.75l7.595 4.03c5.689 2.992 7.879 10.023 4.886 15.712a11.636 11.636 0 01-10.312 6.226z'></path>
        <g fill='#DBD9DC'>
          <path d='M418.923 131.858c-.72 0-1.451-.068-2.186-.205a199.89 199.89 0 00-14.655-2.212c-6.386-.727-10.973-6.492-10.246-12.879.723-6.379 6.485-11.007 12.875-10.242a221.374 221.374 0 0116.375 2.47c6.314 1.205 10.458 7.295 9.257 13.606-1.06 5.576-5.943 9.462-11.42 9.462zM195.642 183.873c-5.254 0-10.019-3.576-11.303-8.909-1.508-6.242 2.333-12.53 8.583-14.038 23.163-5.591 39.882-14.507 57.586-23.947 27.431-14.629 55.795-29.757 107.741-32.09 6.5-.242 11.86 4.682 12.148 11.098.288 6.424-4.682 11.856-11.102 12.144-46.689 2.098-71.533 15.348-97.836 29.378-18.208 9.712-37.037 19.757-63.083 26.038-.916.22-1.833.326-2.734.326z'></path>
        </g>
        <g fill='#EDEBED'>
          <path d='M139.616 189.91c-61.098 0-91.984-16.477-121.851-32.409l-7.655-4.061c-5.689-2.992-7.882-10.023-4.894-15.712 2.992-5.689 10.011-7.894 15.712-4.894l7.792 4.136c28.602 15.257 55.62 29.666 110.896 29.666 5.212 0 10.182-.129 14.928-.379 6.352-.197 11.89 4.591 12.227 11.015.333 6.417-4.598 11.894-11.015 12.227-5.133.268-10.504.411-16.14.411zM496.471 380.203c-1.822 0-3.674-.424-5.398-1.333l-7.799-4.136c-12.716-6.788-24.727-13.189-39.113-18.401-6.042-2.182-9.167-8.856-6.981-14.901 2.193-6.038 8.856-9.174 14.905-6.977 15.951 5.773 29.265 12.871 42.143 19.742l7.663 4.068c5.689 2.992 7.882 10.023 4.894 15.712a11.642 11.642 0 01-10.314 6.226z'></path>
        </g>
        <g fill='#DBD9DC'>
          <path d='M403.412 346.727c-.439 0-.886-.023-1.333-.076a241.13 241.13 0 00-14.799-1.212c-6.417-.333-11.352-5.803-11.023-12.22.33-6.424 5.795-11.273 12.22-11.023 5.693.295 11.095.742 16.238 1.333 6.386.727 10.97 6.492 10.242 12.879-.674 5.94-5.708 10.319-11.545 10.319zM248.255 380.196a11.637 11.637 0 01-10.314-6.227c-2.989-5.689-.795-12.727 4.894-15.712l7.648-4.061c24.519-13.076 49.871-26.598 92.253-30.962 6.409-.629 12.11 3.985 12.769 10.386.659 6.386-3.989 12.106-10.382 12.765-37.844 3.901-60.109 15.773-83.684 28.348l-7.784 4.129a11.556 11.556 0 01-5.4 1.334z'></path>
        </g>
        <path
          fill='#EDEBED'
          d='M139.616 407.12c-61.098 0-91.984-16.477-121.851-32.409l-7.655-4.061c-5.689-2.992-7.882-10.023-4.894-15.712 2.992-5.682 10.011-7.894 15.712-4.894l7.792 4.136c28.602 15.257 55.62 29.666 110.896 29.666 24.909 0 46.378-3 65.632-9.174 6.114-1.977 12.67 1.409 14.632 7.53s-1.409 12.674-7.526 14.636c-21.591 6.918-45.382 10.282-72.738 10.282z'></path>
      </ResponsiveSVGContent>
    </ResponsiveSVGContainer>
  )
}

export default Fog
