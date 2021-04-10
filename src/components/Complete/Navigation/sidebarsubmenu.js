import React from 'react'
import { Link } from 'gatsby'

const SidebarSubLinks = ({ links }) => {
  return (
    <ul>
      {links.map((link, index) => {
        return (
          <li key={index}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default SidebarSubLinks
