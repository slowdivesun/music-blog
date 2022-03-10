import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Fragment } from "react";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li className='text-xs'>
        <a onClick={logout} href='#!'>
          LOGOUT
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li className='text-xs'>
        <Link to='/login'>WRITE</Link>
      </li>
    </ul>
  );
  return (
    <div>
      <div className='p-6 mx-auto bg-white shadow-md flex items-center space-x-4 w-full flex justify-around sticky'>
        <div className='flex flex-row items-center w-3/4 justify-between'>
          <div>Pitchfork</div>
          <div>
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
