import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";

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
    <div className='w-screen min-h-[h-screen] flex items-center justify-center'>
      <div className='text-xl'>Loading...</div>
    </div>
  ) : (
    <div className='w-2/3 bg-white p-6 flex items-center flex-col '>
      <h1 className='text-lg font-semibold mb-3'>DASHBOARD</h1>
      {profile !== null ? (
        <Fragment>
          <div className='mb-3'>{profile.author.name}</div>
          {profile.bio}
          <DashboardActions />
        </Fragment>
      ) : (
        <Fragment>
          <Link to='add-bio' className=''>
            Add a bio and your socials
          </Link>
        </Fragment>
      )}
    </div>
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
