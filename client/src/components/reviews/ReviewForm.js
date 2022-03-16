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

  let { title, artist, genres, score, author, text } = formData;

  useEffect(() => {
    getGenres();
  }, []);
  console.log(genre.genres);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log(genres);
    e.preventDefault();
    addReview({ title, artist, genre: genres, score, author, text });
  };

  const onCheckboxChange = (e) => {
    if (e.target.checked) {
      genres.push(e.target.value);
    } else {
      genres = genres.filter((g) => g !== e.target.value);
    }
    console.log(genres);
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
            <div className='flex flex-row justify-center flex-wrap w-full my-3'>
              {genre.genres.map((g) => (
                <div className='mx-3 my-2'>
                  <input
                    type='checkbox'
                    id={g._id}
                    onChange={(e) => onCheckboxChange(e)}
                    value={g._id}
                  />
                  <label className='ml-1' for={g._id}>
                    {g.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <button
            className='transition ease-in-out delay-400 bg-black text-white hover:text-black hover:bg-white border-2 border-black px-8 py-2'
            type='submit'
          >
            Submit
          </button>
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
