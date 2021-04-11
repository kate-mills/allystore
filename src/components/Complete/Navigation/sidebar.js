import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import { FaTimes } from 'react-icons/fa'
import { Link } from 'gatsby'
import { links } from '../../../utils/constants'

import SidebarSubmenu from './sidebarsubmenu'

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <StaticImage
            placeholder="blurred"
            layout="fixed"
            src="../../../images/icon.png"
            alt="Logo"
            width={67}
          />
          <button
            type="button"
            className="close-sidebar-btn"
            aria-label="Close sidebar"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
          {links.map((link, index) => {
            return (
              <li
                key={index}
                onClick={toggleSidebar}
                onKeyPress={toggleSidebar}
              >
                {' '}
                <Link to={link.url}>{link.text}</Link>
                <SidebarSubmenu links={link.links} />
              </li>
            )
          })}
        </ul>
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-sidebar-btn {
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    font-size: 2rem;
    outline: none;
    transition: var(--transition);
  }
  .close-sidebar-btn:hover {
    color: var(--darkGrey);
  }
  .logo {
    justify-self: center;
    width: 160px;
    min-height: 60px;
    margin-bottom: 0;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    color: var(--clr-black);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-primary-12);
    color: var(--clr-black);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f5f0f1;
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    background: var(--clr-primary-9);
    transform: translate(0);
    z-index: 999;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`
export default Sidebar
