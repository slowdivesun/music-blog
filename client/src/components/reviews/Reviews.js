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
  console.log(reviews);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className='flex flex-col items-center min-h-[85vh]'>
      <div className='bg-white p-6 w-3/4 flex flex-col lg:items-center items-center min-h-[85vh]'>
        <div className='border-b-gray border-b-2 w-3/4 flex justify-center'>
          REVIEWS
        </div>
        <div className='flex w-full lg:justify-between sm:flex-wrap sm:items-center sm:flex-row flex-col lg:flex-row'>
          {reviews.map((review) => (
            <ReviewItem key={review._id} review={review} />
          ))}
        </div>

        {auth.isAuthenticated && (
          <Link
            className='transition ease-in-out delay-400 bg-black text-white hover:text-black hover:bg-white border-2 border-black px-8 py-2'
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
