import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Fragment } from "react";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='flex flex-row justify-between w-full'>
      <li className='text-xs'>
        <a onClick={logout} href='#!'>
          LOGOUT
        </a>
      </li>
      <li className='text-xs'>
        <Link to='/writers'>WRITERS</Link>
      </li>
      <li className='text-xs'>
        <Link to='dashboard' href='#!'>
          DASHBOARD
        </Link>
      </li>
      <li className='text-xs'>
        <Link to='/' href='#!'>
          REVIEWS
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className='flex flex-row justify-between w-full'>
      <li className='text-xs'>
        <Link to='/writers'>WRITERS</Link>
      </li>
      <li className='text-xs'>
        <Link to='/login'>WRITE</Link>
      </li>
      <li className='text-xs'>
        <Link to='/' href='#!'>
          REVIEWS
        </Link>
      </li>
    </ul>
  );
  return (
    <div className='sticky top-0 shadow-md'>
      <div className='p-6 mx-auto bg-white flex items-center space-x-4 w-full justify-around top-0 sticky h-[15vh] sm:h-[15vh]'>
        <div className='flex flex-col md:flex-row items-center w-3/4 justify-between'>
          <div className='text-3xl font-serif md:w-2/3'>DiveRush</div>
          <div className='md:w-1/3 flex items-end w-full mt-3 md:justify-around'>
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
