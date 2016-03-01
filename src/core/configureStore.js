import redux, { applyMiddleware, compose, createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import reducer from '../redux'

export default function configureStore () {

  // Compose final middleware and use devtools in debug environment
  // let middleware = (createStore) => createStore
  // if (__DEBUG__) {
  //   const devTools = window.devToolsExtension
  //     ? window.devToolsExtension()
  //     : require('./DevTools').instrument()
  //   middleware = applyMiddleware(devTools)
  // }

  // Create final store and subscribe router in debug env ie. for devtools
  const store = createStore(reducer)

  // if (module.hot) {
  //   module.hot.accept('./redux', () => {
  //     const nextRootReducer = require('./redux').default
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  return store;
} // end createStore
