import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfiles } from "../../actions/profile";
import { Fragment } from "react";
import ProfileItem from "./ProfileItem";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, []);
  console.log(profiles);
  return (
    <Fragment>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='bg-white min-h-screen p-6 w-3/4 flex flex-col items-center'>
          <h1 className='text-xl w-2/3 border-b-2 border-b-gray mb-3 text-center'>
            Writers
          </h1>
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <ProfileItem key={profile.id} profile={profile}></ProfileItem>
            ))
          ) : (
            <h4>No writers...</h4>
          )}
        </div>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
