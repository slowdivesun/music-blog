import axios from "axios";
import { setAlert } from "./alert";
import { ADD_REVIEW, GET_ALL_REVIEWS, GET_REVIEW, REVIEW_ERROR } from "./types";

// Get all reviews
export const getAllReviews = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/reviews");

    dispatch({
      type: GET_ALL_REVIEWS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// make a review
export const addReview = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/reviews", formData, config);

    dispatch({
      type: ADD_REVIEW,
      payload: res.data,
    });

    dispatch(setAlert("Review Posted", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get review by ID
export const getReview = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/reviews/${id}`);

    dispatch({
      type: GET_REVIEW,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
