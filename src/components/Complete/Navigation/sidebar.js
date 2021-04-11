import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import { FaTimes } from 'react-icons/fa'
import { Link } from 'gatsby'
import { links } from '../../../utils/constants'

import SidebarSubmenu from './sidebarsubmenu'
import CartButtons from './CartBtns'

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
        <CartButtons />
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  .sidebar-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
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
  .logo {
    justify-self: center;
    margin-bottom: 0;
    min-height: 60px;
    width: 160px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    color: var(--clr-black);
    display: block;
    font-size: 1.2rem;
    letter-spacing: var(--spacing);
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    padding: 1rem;
    text-align: left;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .links a:hover {
    background: var(--clr-grey-10);
    color: var(--clr-black);
    padding: 1rem 1.5rem;
    padding-left: 2.5rem;
  }
  .sidebar {
    background: var(--clr-white);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    transition: var(--transition);
    transform: translate(-100%);
    width: 100%;
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
    .cart-btn-wrapper {
      margin-left: 2rem;
      svg {
        color: var(--clr-primary-1);
      }
      .cart-value {
        background: var(--clr-primary-4);
      }
    }
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`
export default Sidebar
