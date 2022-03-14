import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllReviews } from "../../actions/review";
import ReviewItem from "./ReviewItem";
import ReviewForm from "./ReviewForm";
import { Link } from "react-router-dom";

const Reviews = ({ getAllReviews, review: { reviews, loading }, auth }) => {
  useEffect(() => {
    getAllReviews();
  }, getAllReviews);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className='flex flex-col items-center '>
      <div className='bg-white p-6 w-3/4 flex flex-col lg:items-center sm:items-center'>
        <div className='border-b-gray border-b-2 w-3/4 flex justify-center'>
          REVIEWS
        </div>
        <div className='flex w-full lg:justify-between flex-wrap xs:items-center flex-col lg:flex-row'>
          {reviews.map((review) => (
            <ReviewItem key={review._id} review={review} />
          ))}
        </div>

        {auth.isAuthenticated && (
          <Link
            className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
            to='/add-review'
          >
            Add Review
          </Link>
        )}
      </div>
    </div>
  );
};

Reviews.propTypes = {
  getAllReviews: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  review: state.review,
  auth: state.auth,
});

export default connect(mapStateToProps, { getAllReviews })(Reviews);
