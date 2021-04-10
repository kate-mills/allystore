import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const SidebarSubLinks = ({ links }) => {
  return (
    <SidebarSubmenuWrapper>
      {links.map((link, index) => {
        return (
          <li key={index}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        )
      })}
    </SidebarSubmenuWrapper>
  )
}

const SidebarSubmenuWrapper = styled.ul`
  margin-left: 2rem;
`

export default SidebarSubLinks
