import articles from '../data/Articles'
import { push } from 'react-router-redux'
import { actions as appActions } from './appReducer'
import is from 'is_js'

const navigate = (nextId, currentId) => {
  return (dispatch, getState) => {
    dispatch(appActions.selLastArticle(currentId, nextId))
    if (is.number(nextId)) {
      dispatch(push(`/article/${nextId}`));
    } else {
      console.error('Gné ?', nextId);
    }
  }
}

const setCurrent = (currentId) => {
  return (dispatch, getState) => {
    if (getState().app.currentArticle !== currentId) {
      dispatch(appActions.setCurrentArticle(currentId))
    }
  }
}

export const actions = {
  navigate,
  setCurrent
}




export default function (state = articles, { type, payload }) {
  return state
}
