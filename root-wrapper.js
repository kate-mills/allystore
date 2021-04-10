import * as React from 'react'

import { AppProvider } from './src/context/app_context'

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <AppProvider>
        {element}
      </AppProvider>
    </>
  )
}
