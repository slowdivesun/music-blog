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
        <div className='bg-white p-6 w-3/4 flex flex-col  items-center'>
          <Link to='/writers'>
            <button className='mb-3 w-[300px] transition ease-in-out delay-400 bg-black text-white hover:text-black hover:bg-white border-2 border-black px-8 py-2'>
              Back to writers page
            </button>
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.author._id === profile.author._id && (
              <Link to='/edit-profile'>
                <button className='w-[300px] transition ease-in-out delay-400 bg-black text-white hover:text-black hover:bg-white border-2 border-black px-8 py-2'>
                  Edit Profile
                </button>
              </Link>
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
