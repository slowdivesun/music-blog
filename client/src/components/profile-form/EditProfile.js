import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useState } from "react";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { Link, withRouter } from "react-router-dom";
import { useEffect } from "react";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  history,
  getCurrentProfile,
}) => {
  const [formData, setFormData] = useState({
    bio: "",
    twitter: "",
    facebook: "",
    instagram: "",
  });

  useEffect(() => {
    getCurrentProfile();
    console.log(profile);
    setFormData({
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.social.twitter ? "" : profile.social.twitter,
      facebook:
        loading || !profile.social.facebook ? "" : profile.social.facebook,
      instagram:
        loading || !profile.social.instagram ? "" : profile.social.instagram,
    });
  }, [loading]);

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { bio, twitter, instagram, facebook } = formData;
  return (
    <div className='flex items-center justify-center w-70% h-4/5'>
      <div className='w-70% bg-white p-6'>
        <form
          className='w-full flex flex-col items-center'
          onSubmit={(e) => onSubmit(e)}
        >
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3'>
              <label
                className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                htmlFor='inline-full-name'
              >
                Bio
              </label>
            </div>
            <div className='md:w-2/3'>
              <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                id='inline-full-name'
                type='text'
                name='bio'
                onChange={(e) => onChange(e)}
                value={bio}
              />
            </div>
          </div>
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3'>
              <label
                className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                htmlFor='inline-password'
              >
                Twitter URL
              </label>
            </div>
            <div className='md:w-2/3'>
              <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                id='inline-password'
                type='text'
                name='twitter'
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3'>
              <label
                className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                htmlFor='inline-password'
              >
                Instagram URL
              </label>
            </div>
            <div className='md:w-2/3'>
              <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                id='inline-password'
                type='text'
                name='instagram'
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3'>
              <label
                className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                htmlFor='inline-password'
              >
                Facebook URL
              </label>
            </div>
            <div className='md:w-2/3'>
              <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                id='inline-password'
                type='text'
                name='facebook'
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className='md:flex md:items-center'>
            <div className='md:w-1/3'></div>
            <div className='md:w-2/3'>
              <button
                className='transition ease-in-out delay-400 bg-black text-white hover:text-black hover:bg-white border-2 border-black px-8 py-2'
                type='submit'
              >
                <small>SUBMIT</small>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
