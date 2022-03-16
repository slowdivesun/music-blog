import React from "react";
import { useState } from "react";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='dashboard' />;
  }

  return (
    <div className='bg-white flex w-4/6 lg:w-6/12 p-6 mt-4'>
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
              Email
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black'
              id='inline-full-name'
              type='text'
              name='email'
              onChange={(e) => onChange(e)}
              value={email}
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='inline-password'
            >
              Password
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black'
              id='inline-password'
              type='password'
              name='password'
              value={password}
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
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
