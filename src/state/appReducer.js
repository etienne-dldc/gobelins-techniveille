
const APP_CATSELECTOR_OPEN = 'APP_CATSELECTOR_OPEN'
const APP_CATSELECTOR_CLOSE = 'APP_CATSELECTOR_CLOSE'

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

export const actions = {
  openCatSelector,
  closeCatSelector
}

const initialState = {
  categorySelectorOpen: false
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
  return state
}
