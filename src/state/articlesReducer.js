import articles from '../data/Articles'
import { push } from 'react-router-redux'
import { actions as appActions } from './appReducer'

const next = (currentId) => {
  return (dispatch, getState) => {
    dispatch(appActions.selLastArticle(currentId, currentId+1))
    dispatch(push(`article/${currentId+1}`));
  }
}

const prev = (currentId) => {
  return (dispatch, getState) => {
    dispatch(appActions.selLastArticle(currentId, currentId-1))
    dispatch(push(`article/${currentId-1}`));
  }
}

export const actions = {
  next,
  prev
}




export default function (state = articles, { type, payload }) {
  return state
}
