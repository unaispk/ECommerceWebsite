import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'


const Navbar = () => {
  

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-around items-center">

       <Link to={'/'}><p className="text-white font-semibold">Home</p></Link>

       <Link to={'/allcategories'}><p className="text-white font-semibold">Categories</p></Link>


       <Link to={'/users'}><p className="text-white font-semibold">Users</p></Link>
       
      </div>
    </nav>
  );
};

export default Navbar;
