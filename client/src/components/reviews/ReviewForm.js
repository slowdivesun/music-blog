import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addReview } from "../../actions/review";
import { useEffect } from "react";
import { getGenres } from "../../actions/genre";

const ReviewForm = ({ getGenres, addReview, genre }) => {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    genres: [], // change this to genre before sending data
    score: 0,
    author: "",
    text: "",
  });

  const { title, artist, genres, score, author, text } = formData;

  useEffect(() => {
    getGenres();
  }, []);
  console.log(genre.genres);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addReview({ title, artist, genre: genres, score, author, text });
  };

  return (
    <div className='bg-white p-6 w-3/4 flex flex-col items-center'>
      <div>
        <form
          className=' flex flex-col items-center'
          onSubmit={(e) => onSubmit(e)}
        >
          <div className='flex flex-row flex-wrap justify-around'>
            <input
              className='border-2 border-gray my-3 p-3 mx-4'
              type='text'
              name='title'
              placeholder='Title'
              value={title}
              onChange={(e) => onChange(e)}
            />
            <input
              className='border-2 border-gray my-3 p-3'
              type='text'
              name='artist'
              placeholder='Artist'
              value={artist}
              onChange={(e) => onChange(e)}
            />
          </div>

          <input
            className='border-2 border-gray my-3 p-3'
            type='number'
            name='score'
            placeholder='Score'
            value={score}
            min='0'
            max='10'
            onChange={(e) => onChange(e)}
          />
          <textarea
            className='border-2 border-gray my-3 p-1 w-[100%]'
            name='text'
            rows='5'
            placeholder='Write your review'
            value={text}
            onChange={(e) => onChange(e)}
          ></textarea>
          <div className='flex flex-col items-center'>
            <div>GENRES</div>
            <div className='flex flex-row'>
              {genre.genres.map((g) => (
                <div className='mx-3'>
                  <input type='checkbox' onClick={(e) => genres.push(g._id)} />{" "}
                  {g.name}
                </div>
              ))}
            </div>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

ReviewForm.propTypes = {
  addReview: PropTypes.func.isRequired,
  genre: PropTypes.object.isRequired,
  getGenres: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

export default connect(mapStateToProps, { getGenres, addReview })(ReviewForm);
