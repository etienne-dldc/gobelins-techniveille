console.log('boot')
import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import logger from './core/logger'
import configureStore from './core/configureStore.js'
import Root from './core/RootComponent'
import routes from './core/routes'

// Import style
import './styles/app.scss'

const store = configureStore(hashHistory)
// Create History
const history = syncHistoryWithStore(hashHistory, store)

// Remove splashscreen
const splashscreen = document.getElementById('splashscreen')
if (splashscreen) {
  splashscreen.parentNode.removeChild(splashscreen)
}

// Render the React application to the DOM
ReactDOM.render(
  <Root history={history} store={store} routes={routes} />,
  document.getElementById('root')
)
