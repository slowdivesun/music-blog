import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import user from "../../images/user.png";

const ProfileItem = ({
  profile: {
    author: { _id, name },
    social,
  },
}) => {
  return (
    <div className='flex flex-col items-center'>
      <img
        className='w-3/5 rounded-full border-black border-2'
        src={user}
        alt='writer-profile'
      />
      <div>
        <Link to={`profile/${_id}`}>
          <div className='text-lg'>{name}</div>
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
