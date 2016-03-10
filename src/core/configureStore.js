import redux, { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import ReduxThunk from 'redux-thunk'
import reducer from '../state'

var store = null;

export default function configureStore (history) {

  // Compose final middleware and use devtools in debug environment
  const middleware = routerMiddleware(history)
  const finalCreateStore = compose(
    applyMiddleware(middleware, ReduxThunk),
    (__DEBUG__ && window.devToolsExtension) ? window.devToolsExtension() : f => f
  )(createStore);

  // Create final store and subscribe router in debug env ie. for devtools
  store = finalCreateStore(reducer)

  if (module.hot) {
    module.hot.accept('../state', () => {
      const nextRootReducer = require('../state').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
} // end createStore

export function getStore () {
  return store
} // end getStore
