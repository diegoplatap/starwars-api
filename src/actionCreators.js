import axios from 'axios';
import { CHANGE_PAGE, LOAD_DATA, SHOW_LOADING, HIDE_LOADING } from './actions'

export function loadData(page) {
  return async function(dispatch) {
    dispatch(showLoading())
    const query = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
    dispatch({ type: LOAD_DATA, payload: query.data.results});
    dispatch(hideLoading())
  }
}

export function showLoading() {
  return { type: SHOW_LOADING };
}

export function hideLoading() {
  return { type: HIDE_LOADING };
}

export function changePage(page) {
  return { type: CHANGE_PAGE, payload: page };
}