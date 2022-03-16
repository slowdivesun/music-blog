import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div
        key={alert.id}
        className='bg-red-600 py-3 my-2 px-6 w-[80vw] relaive flex items-center justify-center text-white'
      >
        {alert.msg}
      </div>
    ))
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
