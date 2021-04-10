import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import { useGlobalContext } from '../../../context/app_context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    closeSubmenu,
    page: { page, links },
    location,
  } = useGlobalContext()
  const container = useRef(null)

  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [page, location, links])

  return (
   <SubmenuWrapper
      className={`${isSubmenuOpen ? `submenu show` : `submenu hide`}`}
      ref={container}>
        <ul className={`submenu-center columns`}>{links.map((link, index) => {
            const {url, text } = link
            return (
              <li key={index}>
                <Link
                  to={url}
                  className={`sublink`}
                  onClick={closeSubmenu}>
                  {text}
                </Link>
              </li>
            )
          })}
      </ul>
    </SubmenuWrapper>
  )
}

const SubmenuWrapper = styled.aside`
  & {
    background: var(--clr-white);
    padding: 0 0.5rem;
    position: absolute;
    transform: translateX(-17%) translateY(-3%);
    z-index: 1;
  }
  &.submenu.hide { display: unset; }/*none*/
  &.submenu.show { display: unset; }
  & ul li{
    margin-top: 1rem;
  }
  & .sublink{
    border-bottom: 2px solid transparent;
    display: block;
    font-size: 1.3rem;
    letter-spacing: var(--spacing);
    padding: 0 0.5rem 0.5rem;
    text-align: left;
    width: fit-content;
  }
  & .sublink:hover{
    border-bottom: 2px solid var(--clr-primary-9);
    cursor: pointer;
  }
`
export default Submenu
