import { GET_GENRES, CLEAR_GENRE } from "../actions/types";

const initialState = {
  genres: [],
  loading: true,
  error: false,
};

export default function func(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_GENRES:
      return {
        ...state,
        genres: payload,
        loading: false,
      };
    case CLEAR_GENRE:
      return {
        ...state,
        genres: [],
        loading: false,
      };
    default:
      return state;
  }
}
