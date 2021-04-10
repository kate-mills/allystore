import React, { useState, useContext } from 'react'
import { links } from '../utils/constants'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [page, setPage] = useState({ page: '', links: [] })
  const [location, setLocation] = useState({})

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }
  const openSubmenu = (text, coordinates) => {
    const page = links.find(link => link.text === text)
    setPage(page)
    setLocation(coordinates)
    if (page.links.length > 0) {
      setIsSubmenuOpen(true)
    } else {
      setIsSubmenuOpen(false)
    }
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
