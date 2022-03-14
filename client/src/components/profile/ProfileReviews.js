import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getReviews } from "../../actions/profile";
import { useEffect } from "react";
import ReviewItem from "../reviews/ReviewItem";

const ProfileReviews = ({ reviews, getReviews, id }) => {
  useEffect(() => {
    getReviews(id);
  }, [getReviews]);
  console.log(reviews);
  return (
    <div className='flex flex-col items-center p-4 w-2/3 border-b-2 border-b-gray'>
      <div>REVIEWS</div>
      <div className='flex w-full lg:justify-between flex-wrap xs:items-center flex-col lg:flex-row'>
        {reviews.map((review) => (
          <ReviewItem key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

ProfileReviews.propTypes = {
  getReviews: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: state.profile.reviews,
});

export default connect(mapStateToProps, { getReviews })(ProfileReviews);
