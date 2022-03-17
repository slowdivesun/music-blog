import { GET_LIST, LIST_ERROR } from "./types";
import axios from "axios";

// Get single list
export const getList = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/list/${id}`);
    console.log(res);
    dispatch({
      type: GET_LIST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LIST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
