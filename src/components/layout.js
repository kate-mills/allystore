/* eslint react/jsx-pascal-case: "off" */

import * as React from 'react'
import PropTypes from 'prop-types'

import { Footer, Navbar, Sidebar } from './Complete'

import { useAppContext } from '../context/app_context'

const Layout = ({ children }) => {
  const { closeSubmenu } = useAppContext()
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpen => !isSidebarOpen)
  }
  return (
    <>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        onFocus={closeSubmenu}
        onMouseOver={closeSubmenu}
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
