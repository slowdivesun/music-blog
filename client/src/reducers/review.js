import {
  ADD_REVIEW,
  GET_ALL_REVIEWS,
  GET_REVIEW,
  REVIEW_ERROR,
} from "../actions/types";

const initialState = {
  reviews: [],
  review: null,
  loading: true,
  error: {},
};

export default function func(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_REVIEWS:
      return {
        ...state,
        reviews: payload,
        loading: false,
      };
    case GET_REVIEW:
      return {
        ...state,
        review: payload,
        loading: false,
      };
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, payload],
        loading: false,
      };
    case REVIEW_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
