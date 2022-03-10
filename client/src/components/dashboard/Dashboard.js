import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Dashboard = ({
  getCurrentProfile,
  auth,
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  console.log(profile);
  return loading && profile === null ? (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='text-xl'>Loading...</div>
    </div>
  ) : (
    <Fragment>
      <h1 className='text-lg font-semibold'>DASHBOARD</h1>
      {profile !== null ? (
        <Fragment>
          <div>{profile.author.name}</div>
          {profile.bio}
        </Fragment>
      ) : (
        <Fragment>
          <div>{profile.author.name}</div>
          <Link to='add-bio' className=''>
            Add a bio and your socials!
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
