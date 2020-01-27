/* eslint-disable react/prop-types */
import React from 'react'
import { BrowserRouter, BrowserRouterProps } from 'react-router-dom'

import resolveBasename from './resolveBasename'

const IpfsRouter: React.FC<BrowserRouterProps> = props => {
  const path = window?.location?.pathname ?? '/'
  const basename = resolveBasename(path)

  return <BrowserRouter {...props} basename={basename}></BrowserRouter>
}

export default IpfsRouter
