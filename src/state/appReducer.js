
const APP_CATSELECTOR_OPEN = 'APP_CATSELECTOR_OPEN'
const APP_CATSELECTOR_CLOSE = 'APP_CATSELECTOR_CLOSE'
const APP_SETLASTART = 'APP_SETLASTART'
const APP_SETCURRENTART = 'APP_SETCURRENTART'

const openCatSelector = function () {
  return {
    type: APP_CATSELECTOR_OPEN,
    payload: {}
  }
}

const closeCatSelector = function () {
  return {
    type: APP_CATSELECTOR_CLOSE,
    payload: {}
  }
}

const selLastArticle = (lastId, currentId) => {
  return {
    type: APP_SETLASTART,
    payload: {
      last: lastId,
      current: currentId
    }
  }
}

const setCurrentArticle = (currentId) => {
  return {
    type: APP_SETCURRENTART,
    payload: currentId
  }
}

export const actions = {
  openCatSelector,
  closeCatSelector,
  selLastArticle,
  setCurrentArticle
}

const initialState = {
  categorySelectorOpen: false,
  lastArticle: null,
  currentArticle: null,
  // currentArticleBis: null
}

export default function  (state = initialState, { type, payload }) {
  if (type === APP_CATSELECTOR_OPEN) {
    return {
      ...state,
      categorySelectorOpen: true
    }
  }
  if (type === APP_CATSELECTOR_CLOSE) {
    return {
      ...state,
      categorySelectorOpen: false
    }
  }
  if (type === APP_SETLASTART) {
    const newState = {
      ...state,
      lastArticle: payload.last !== null ? payload.last : state.currentArticle,
      currentArticle: payload.current !== null ? payload.current : state.currentArticle
    }
    return newState
  }
  if (type === APP_SETCURRENTART) {
    const newState = {
      ...state,
      currentArticle: payload
    }
    return newState
  }
  return state
}
