import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import articlesReducer from './articlesReducer'
import categoriesReducer from './categoriesReducer'
import appReducer from './appReducer'

export default combineReducers({
  routing: routerReducer,
  articles: articlesReducer,
  categories: categoriesReducer,
  app: appReducer
})
