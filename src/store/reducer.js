import { SET_SEARCH_MOVIES, SET_POPULAR_MOVIES, SET_DETAILS, CLEAR_DETAILS } from './types'

const initialState = {
  popular: [],
  search: [],
  details: {},
};

const movies = (state = initialState, action) => {

  switch (action.type) {
    case SET_SEARCH_MOVIES:
      return {
        ...state,
       search: action.payload,
      }
    case SET_POPULAR_MOVIES:
      return {
        ...state,
       popular: action.payload,
      }
    case SET_DETAILS:
      return {
        ...state,
       details: action.payload,
      }
      case CLEAR_DETAILS: 
        return ({
          ...state,
          details: initialState.details
        })
    default:
      return state;
  }
}

export default movies;