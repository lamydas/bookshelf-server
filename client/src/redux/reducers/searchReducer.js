import {
    GET_BOOKS,
    NO_MARCHED
  } from "../types";
  
  const initialState = {
      books: [],
  };
  
  function searchReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {

      case GET_BOOKS:
        return {
          ...state,
          books: payload,
          loading: false,
        };
        case NO_MARCHED:
            return {
              ...state,
              books: [],
            };
      default:
        return state;
    }
  }
  
  export default searchReducer;
  