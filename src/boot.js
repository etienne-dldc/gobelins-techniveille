import React from 'react'
import ReactDOM from 'react-dom'
import { createHistory } from 'history'
import configureStore from './core/configureStore.js'
import { useRouterHistory } from 'react-router'
import Root from './core/RootComponent'
import routes from './core/routes'

// Import style
import './styles/app.scss'

const historyConfig = {}
const history = useRouterHistory(createHistory)(historyConfig)
const store = configureStore({ history })

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
