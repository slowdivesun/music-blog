import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfileById } from "../../actions/profile";
import { Link } from "react-router-dom";
import ProfileTop from "./ProfileTop";
import ProfileReviews from "./ProfileReviews";

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <div>
          <div>Loading...</div>
        </div>
      ) : (
        <div className='bg-white p-6 w-3/4 flex flex-col items-center'>
          <Link to='/writers'>Back to writers page</Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.author._id === profile.author._id && (
              <Link to='/edit-profile'>Edit Profile</Link>
            )}
          <ProfileTop profile={profile} />
          <ProfileReviews id={match.params.id} />
        </div>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
