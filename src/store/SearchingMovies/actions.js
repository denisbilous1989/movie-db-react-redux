import { SET_SEARCH_MOVIES } from '../types'

export const setSearchMovies = (payload) => {
  return {
    type: SET_SEARCH_MOVIES,
    payload,
  }
}