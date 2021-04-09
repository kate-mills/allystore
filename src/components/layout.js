/* eslint react/jsx-pascal-case: "off" */

import * as React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={`Skincare Webstore`} />
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
