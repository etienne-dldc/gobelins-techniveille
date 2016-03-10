import categories from '../data/categories'

const CATEGORIES_SELECT = 'CATEGORIES_SELECT'

const selectCategory = function (categoryName) {
  var payload = categoryName;
  return {
    type: CATEGORIES_SELECT,
    payload
  }
}

export const actions = {
  selectCategory
}

const initialState = {
  data: categories,
  selected: 'all'
}
export default function (state = initialState, { type, payload } ) {
  if (type === CATEGORIES_SELECT) {
    if (state.selected == payload) {
      payload = 'all'
    }
    return {
      ...state,
      selected: payload
    }
  }
  return state
}
