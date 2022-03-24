import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllLists } from "../../actions/list";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Lists = ({ list: { lists }, getAllLists }) => {
  useEffect(() => {
    getAllLists();
  }, [getAllLists]);
  console.log(lists);
  return (
    <div className='bg-white p-6 w-3/4 flex min-h-[85vh] sm:min-h-[85vh] flex-col items-center'>
      {lists.map((l) => (
        <div className='flex w-full flex-col sm:flex-row justify-between items-center mb-4'>
          <div>
            <div>{l.name}</div>
            <div className='flex flex-col'>
              <small>{l.entries.length} items</small>
              <small>BY: {l.author.name}</small>
            </div>
          </div>
          <div>
            <Link
              to={`/list/${l._id}`}
              className='transition ease-in-out delay-400 bg-black text-white hover:text-black hover:bg-white border-2 border-black px-8 py-2'
            >
              Go to List
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

Lists.propTypes = {};

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps, { getAllLists })(Lists);
