import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";

const ReviewItem = ({
  review: { _id, text, author, title, artist, score, genre, date },
}) => {
  return (
    <div className='mx-3 my-5 min-w-[200px] flex items-center flex-col xs:w-full sm:w-full lg:w-auto flex-1'>
      <div>{artist}</div>
      <Link className='hover:text-red-600 font-light' to={`/review/${_id}`}>
        <h1 className='text-center'>{title}</h1>
      </Link>
      <div>
        <div className='text-center'>
          <span>
            {genre.map((g, index) => {
              if (index === genre.length - 1) {
                return (
                  <small>
                    <Link className='hover:text-red-600' to={`/genre/${g._id}`}>
                      {g.name}
                    </Link>{" "}
                  </small>
                );
              }
              return (
                <small>
                  <Link className='hover:text-red-600' to={`/genre/${g._id}`}>
                    {g.name} /
                  </Link>{" "}
                </small>
              );
            })}
          </span>
        </div>
        <div className='text-center'>
          <small>
            Author:{" "}
            <Link className='hover:text-red-600 ' to={`/profile/${author._id}`}>
              {author.name}
            </Link>
          </small>
        </div>
      </div>
      <small>
        <Moment format='MMMM Do YYYY'>{date}</Moment>
      </small>
    </div>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  teview: state.review,
});

export default connect(mapStateToProps, {})(ReviewItem);
