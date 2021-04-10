import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'

import { links } from '../utils/constants'
//import { useNavContext } from '../context/navigation_context'

const Navbar = () => {
  //const { openSidebar } = useNavContext()
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <StaticImage
              placeholder="blurred"
              layout="fixed"
              src="../images/icon.png"
              alt="Logo"
              width={67}
            />
          </Link>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => console.log('click')}
            onKeyPress={() => console.log('click')}
            aria-label="Open sidebar"
          >
            <FaBars />
          </button>
        </div>{' '}
        {/* close nav-header */}
        <ul className="nav-links">
          {links.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            )
          })}
        </ul>
      </div>{' '}
      {/* close nav-center */}
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 67px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1.3rem;
        letter-spacing: var(--spacing);
        line-height: normal;
        padding: 0.5rem;
        text-transform: capitalize;
        &:hover {
          cursor: pointer;
          border-bottom: 2px solid var(--clr-primary-9);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Navbar
