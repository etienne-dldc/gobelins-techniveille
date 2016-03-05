import redux, { applyMiddleware, compose, createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import reducer from '../state'

export default function configureStore () {

  // Compose final middleware and use devtools in debug environment
  const finalCreateStore = compose(
    (__DEBUG__ && window.devToolsExtension) ? window.devToolsExtension() : f => f
  )(createStore);
  // if (__DEBUG__) {
  //   const devTools = window.devToolsExtension
  //     ? window.devToolsExtension()
  //     : require('./DevTools').instrument()
  //   middleware = applyMiddleware(devTools)
  // }

  // Create final store and subscribe router in debug env ie. for devtools
  const store = finalCreateStore(reducer)

  if (module.hot) {
    module.hot.accept('../state', () => {
      const nextRootReducer = require('../state').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
} // end createStore
