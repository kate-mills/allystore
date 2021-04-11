import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import { FaBars } from 'react-icons/fa'
import { Link } from 'gatsby'
import { links } from '../../../utils/constants'
import CartButtons from './CartBtns'
import { useGlobalContext } from '../../../context/app_context'

import NavSubmenu from './NavSubmenu'

const Navbar = ({ toggleSidebar }) => {
  const { openSubmenu } = useGlobalContext()
  const displaySubmenu = e => {
    const page_name = e.target.textContent // I get this text
    const tempBtn = e.target.getBoundingClientRect() // I get object with coordinates
    const center = (tempBtn.left + tempBtn.right) / 2 // center of anilink
    const bottom = tempBtn.bottom - 3 // bottom of anilink - 3px
    openSubmenu(page_name, { center, bottom })
  }

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <StaticImage
              placeholder="blurred"
              layout="fixed"
              src="../../../images/icon.png"
              alt="Logo"
              width={70}
            />
          </Link>
          <button type="button" className="nav-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <NavSubmenu />
        </div>
        <ul className="nav-links">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.url} onMouseOver={displaySubmenu}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  & {
    align-items: center;
    display: flex;
    height: 7rem;
    justify-content: center;
  }
  & .nav-center {
    max-width: var(--max-width);
    width: 90vw;
    .nav-header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      img {
        height: 70px;
      }
      .nav-toggle {
        background: inherit;
        border-color: transparent;
        color: var(--clr-primary-5d);
        cursor: pointer;
        svg {
          font-size: 2rem;
        }
      }
    }
  }
  & .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    & .nav-center {
      align-items: center;
      display: grid;
      grid-template-columns: auto 1fr auto;
    }
    & .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-black);
        font-size: 1.3rem;
        letter-spacing: var(--spacing);
        line-height: normal;
        padding: 0.5rem;
        text-transform: capitalize;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-9);
          cursor: pointer;
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Navbar
