import { css, Global } from '@emotion/react';
import React from 'react'
import Navbar from './navbar';

const Layout = (props) => {
  return (
    <>
      <Global styles={css`
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }   
      `} />
      <Navbar />
      <div className='container mx-auto px-4 mt-5'>{props.children}</div>
    </>
  )
}

export default Layout;