import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className='p-6 mx-auto bg-white shadow-md flex items-center space-x-4 w-full flex justify-around sticky'>
        <div className='flex flex-row items-center w-3/4 justify-between'>
          <div>Pitchfork</div>
          <Link className='text-xs' to='/login'>
            WRITE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
