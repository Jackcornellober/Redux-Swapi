import {FETCH_DATA_START} from "../actions";
import {FETCH_DATA_SUCCESS} from "../actions";
import {FETCH_DATA_ERROR} from "../actions";



const initialState = {
  characters: [],
  isFetching: true,
  error: '',
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: action.payload
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        error: 'Uh oh... something happened 😵!'
      };
    default:
      return state;
    
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
  }
};
