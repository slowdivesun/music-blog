import { GET_LIST, GET_LISTS, LIST_ERROR } from "../actions/types";

const initialState = {
  lists: [],
  list: null,
  loading: true,
  error: {},
};

export default function func(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LISTS:
      return {
        ...state,
        lists: payload,
        loading: false,
      };
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
