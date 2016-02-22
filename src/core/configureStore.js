import { applyMiddleware, compose, createStore } from 'redux'
import { syncHistory } from 'react-router-redux'
import reducer from '../redux'

var store

export default function configureStore ({ initialState = {}, history }) {

  const routerMiddleware = syncHistory(history)

  var __DEBUG__ = true

  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(routerMiddleware)
  if (__DEBUG__) {
    const devTools = window.devToolsExtension
      ? window.devToolsExtension()
      : require('./DevTools').instrument()
    middleware = compose(middleware, devTools)
  }

  // Create final store and subscribe router in debug env ie. for devtools
  store = middleware(createStore)(reducer, initialState)
  if (__DEBUG__) routerMiddleware.listenForReplays(store, ({ router }) => router.location)

  if (module.hot) {
    module.hot.accept('./redux', () => {
      const nextRootReducer = require('./redux').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
} // end createStore
