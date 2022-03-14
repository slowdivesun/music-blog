import axios from "axios";
import {
  GET_ALL_REVIEWS,
  GET_GENRES,
  GET_REVIEWS,
  REVIEW_ERROR,
} from "./types";

//Get all genres
export const getGenres = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/genres");

    dispatch({
      type: GET_GENRES,
      payload: res.data,
    });
  } catch (err) {}
};

// get review by genre
export const getReviewsByGenre = (genreId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/reviews/genre/${genreId}`);
    console.log(res);
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
