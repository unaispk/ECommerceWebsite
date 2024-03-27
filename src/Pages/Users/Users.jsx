import axios from 'axios';
import React from 'react'
import Navbar from '../../Components/Navbar';
import User from '../../Components/User';

const Users = () => {

    return (
        <>
        <Navbar />
        
        <div className="row justify-around mx-6 mb-8 mt-4 ">
              <div className=" col gap-8 ">
                  <User />
              </div>
          </div>
           
        </>
    );
}

export default Users
