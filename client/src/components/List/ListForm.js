import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllReviews } from "../../actions/review";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ListForm = ({ getAllReviews, review: { reviews } }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [entries, setEntries] = useState([]);
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    getAllReviews();
  }, [getAllReviews]);

  useEffect(() => {
    setAllReviews(reviews);
  }, [reviews]);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onAdd = (e, id) => {
    e.preventDefault();
    let review = allReviews.find((e) => e._id === id);
    setEntries([review, ...entries]);
    setAllReviews(allReviews.filter((r) => r._id !== id));
  };

  const onRemove = (e, id) => {
    e.preventDefault();
    let review = entries.find((e) => e._id === id);
    setEntries(entries.filter((r) => r._id !== id));
    setAllReviews([review, ...allReviews]);
  };

  const onSubmit = (e) => {};

  return (
    <div className='bg-white p-6 w-3/4 flex flex-col items-center'>
      <form>
        <input type='text' placeholder='' />
      </form>
      <div
        className={
          entries.length > 0 ? `w-full border-b-gray-300 border-b-2` : `w-full`
        }
      >
        {entries.map((r) => (
          <Fragment>
            <div
              key={r._id}
              className='flex w-full flex-col sm:flex-row justify-between items-center mb-4'
            >
              <div>
                <div className='text-xl'>{r.title}</div>
                <div className='font-light'>{r.artist}</div>
              </div>
              <button
                type='button'
                className='transition ease-in-out delay-400 bg-black text-white hover:text-black hover:bg-white border-2 border-black px-8 py-2'
                onClick={(e) => onRemove(e, r._id)}
              >
                Remove
              </button>
            </div>
          </Fragment>
        ))}
      </div>
      <div className='w-full'>
        {allReviews.map((r) => (
          <Fragment>
            <div
              key={r._id}
              className='flex w-full flex-col sm:flex-row justify-between items-center mb-4'
            >
              <div>
                <div className='text-xl'>{r.title}</div>
                <div className='font-light'>{r.artist}</div>
              </div>
              <button
                type='button'
                className='transition ease-in-out delay-400 bg-black text-white hover:text-black hover:bg-white border-2 border-black px-8 py-2'
                onClick={(e) => onAdd(e, r._id)}
              >
                Add
              </button>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

ListForm.propTypes = {
  review: PropTypes.object.isRequired,
  getAllReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  review: state.review,
});

export default connect(mapStateToProps, { getAllReviews })(ListForm);
