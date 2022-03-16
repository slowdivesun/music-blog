import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getReviewsByGenre } from "../../actions/genre";
import { useEffect } from "react";
import ReviewItem from "../reviews/ReviewItem";

const Genre = ({ getReviewsByGenre, match, review: { reviews } }) => {
  useEffect(() => {
    getReviewsByGenre(match.params.id);
  }, [getReviewsByGenre, match]);
  // console.log(reviews);
  return (
    <div className='bg-white p-6 w-3/4 min-h-full flex flex-col items-center'>
      <div className='border-b-gray border-b-2 w-3/4 flex justify-center'>
        REVIEWS
      </div>
      <div className='flex w-full lg:justify-between sm:flex-wrap sm:items-center sm:flex-row flex-col lg:flex-row'>
        {reviews.map((review) => (
          <ReviewItem key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

Genre.propTypes = {
  getReviewsByGenre: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  review: state.review,
});

export default connect(mapStateToProps, { getReviewsByGenre })(Genre);
