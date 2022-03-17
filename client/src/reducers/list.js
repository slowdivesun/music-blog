import { GET_LIST, LIST_ERROR } from "../actions/types";

const initialState = {
  list: null,
  loading: true,
  error: {},
};

export default function func(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LIST:
      return {
        ...state,
        list: payload,
        loading: false,
      };
    case LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
