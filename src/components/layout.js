/* eslint react/jsx-pascal-case: "off" */

import * as React from 'react'
import PropTypes from 'prop-types'

import Footer from './footer'
import Navbar from './navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <div
        className="page"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
