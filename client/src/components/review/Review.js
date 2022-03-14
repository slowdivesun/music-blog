import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getReview } from "../../actions/review";
import Moment from "react-moment";

const Review = ({ getReview, review: { review, loading }, match }) => {
  useEffect(() => {
    getReview(match.params.id);
  }, [getReview]);

  return review === null || loading ? (
    <div>Loading...</div>
  ) : (
    <div className='bg-white p-6 w-3/4 flex flex-col items-center'>
      <div className='flex flex-col lg:flex-row sm:flex-col w-full justify-around items-center'>
        <div className='flex flex-col items-center'>
          <div className='font-serif text-4xl text-center'>{review.title}</div>
          <div>{review.artist}</div>
        </div>
        <div
          className={
            review.score >= 8
              ? `my-3 text-5xl border-8 rounded-full flex items-center justify-center w-[30px] h-[30px] border-red-600 p-10 text-red-600`
              : `my-3 text-5xl border-8 rounded-full flex items-center justify-center w-[30px] h-[30px] border-black p-10 text-black`
          }
        >
          {review.score}
        </div>
      </div>
      <div className='flex flex-col w-full border-b-2 border-b-gray-100 items-center my-5'>
        <small>BY: {review.author.name}</small>
        <small>
          DATE: <Moment format='MMMM Do YYYY'>{review.date}</Moment>
        </small>
      </div>
      <div className=''>{review.text}</div>
    </div>
  );
};

Review.propTypes = {
  getReview: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  review: state.review,
});

export default connect(mapStateToProps, { getReview })(Review);
