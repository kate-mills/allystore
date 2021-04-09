import React from 'react'
import {NavigationProvider} from './src/context/navigation_context'

export const wrapRootElement = ({ element }) => {
  return (
  <NavigationProvider>
    {element}
  </NavigationProvider>
  )
}
