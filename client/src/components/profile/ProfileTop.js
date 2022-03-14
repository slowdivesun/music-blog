import React from "react";
import PropTypes from "prop-types";
import user from "../../images/user.png";
import { Fragment } from "react";

const ProfileTop = ({
  profile: {
    bio,
    social,
    author: { name },
  },
}) => {
  return (
    <Fragment>
      <div className='flex flex-col w-2/3 items-center border-b-2 border-b-gray p-6'>
        <img
          src={user}
          className='rounded-full border-2 border-black w-2/5'
          alt='profile-img'
        />
        <div className='my-3 text-4xl'>{name}</div>
        <div>{bio}</div>
      </div>
      <div className='flex flex-col w-2/3 items-center border-b-2 border-b-gray p-6'>
        <div className='text-lg mb-2 '>
          {social &&
            (social.twitter || social.instagram || social.facebook) &&
            "Socials"}
        </div>
        <div>
          {social && social.twitter && <a href={social.twitter}>Twitter</a>}
          {social && social.instagram && (
            <a href={social.instagram}>Insgtagram</a>
          )}
          {social && social.facebook && <a href={social.facebook}>Facebook</a>}
        </div>
      </div>
    </Fragment>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
