import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div>
      <Link to='/edit-profile'>
        <button className='transition ease-in-out delay-400 bg-black text-white hover:text-black hover:bg-white border-2 border-black p-4'>
          Edit bio and socials!
        </button>
      </Link>
    </div>
  );
};

export default DashboardActions;
