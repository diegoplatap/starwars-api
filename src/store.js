import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { CHANGE_PAGE, LOAD_DATA, SHOW_LOADING, HIDE_LOADING } from './actions'

const initialState = {
  page: 1,
  data: [],
  loading: true
}

const reducer = function(state=initialState, action) {
  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload }
  } else if (action.type === LOAD_DATA) {
    return { ...state, data: action.payload }
  } else if (action.type === SHOW_LOADING) {
    return { ...state, loading: true }
  } else if (action.type === HIDE_LOADING) {
    return { ...state, loading: false }
  }

  return state
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store