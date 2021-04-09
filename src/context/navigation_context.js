import React, { useContext, useReducer, createContext } from 'react'
import reducer from '../reducers/navigation_reducer'
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions'

const initialState = {
  isSidebarOpen: false,
}

const NavigationContext = createContext()

export const NavigationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  return (
    <NavigationProvider.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </NavigationProvider.Provider>
  )
}

export const useNavigationContext = () => {
  return useContext(NavigationContext)
}
