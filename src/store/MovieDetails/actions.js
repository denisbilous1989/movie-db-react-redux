import { SET_DETAILS, CLEAR_DETAILS } from "../types";

export const setMovieDetails = (payload) => {
  return {
    type: SET_DETAILS,
    payload,
  }
}

export const clearMovieDetails = () => ({ type: CLEAR_DETAILS })