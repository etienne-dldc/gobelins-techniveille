
const APP_CATSELECTOR_OPEN = 'APP_CATSELECTOR_OPEN'
const APP_CATSELECTOR_CLOSE = 'APP_CATSELECTOR_CLOSE'
const APP_SETLASTART = 'APP_SETLASTART'

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

export const actions = {
  openCatSelector,
  closeCatSelector,
  selLastArticle
}

const initialState = {
  categorySelectorOpen: false,
  lastArticle: null,
  currentArticle: null
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
    return {
      ...state,
      lastArticle: payload.last,
      currentArticle: payload.current
    }
  }
  return state
}
