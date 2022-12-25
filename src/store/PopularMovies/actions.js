import { SET_POPULAR_MOVIES  } from '../types'

export const setPopularMovies = (payload) => {
  return {
    type: SET_POPULAR_MOVIES,
    payload,
  }
}

// export const setMovieDetails = (payload) => {
//   return (
//     {
//       type: SET_DETAILS,
//     payload
//     }
//   )
// }

// export const clearMovieDetails = () => ({ type: CLEAR_DETAILS })