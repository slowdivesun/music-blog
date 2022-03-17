import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getList } from "../../actions/list";
import { useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const List = ({ getList, list: { loading, list }, match }) => {
  useEffect(() => {
    getList(match.params.id);
  }, [getList, match]);
  console.log(list);
  return list === null || loading ? (
    <div>Loading...</div>
  ) : (
    <Fragment>
      <div className='bg-white p-6 w-3/4 flex flex-col items-center'>
        <div className='text-3xl w-full border-b-gray-300 border-b-2 mb-5 flex justify-center'>
          {list.name}
        </div>
        <div className='w-full'>
          {list.entries.map((e) => (
            <Fragment>
              <div className='flex w-full flex-col sm:flex-row justify-between items-center mb-4'>
                <div>
                  <div className='text-xl'>{e.title}</div>
                  <div className='font-light'>{e.artist}</div>
                </div>
                <Link to={`/review/${e._id}`}>
                  <button className='transition ease-in-out delay-400 bg-black text-white hover:text-black hover:bg-white border-2 border-black px-8 py-2'>
                    Go to Review
                  </button>
                </Link>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

List.propTypes = {
  list: PropTypes.object.isRequired,
  getList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps, { getList })(List);
