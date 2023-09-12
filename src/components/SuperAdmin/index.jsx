import React from 'react'
import Navbar from '../../Utils/Navbar';
import Sidebar from '../../Utils/Sidebar';
import { Outlet, useLocation } from 'react-router';
import { decrypt } from '../Auth/Protected/Decrypt';

const SuperAdmin = () => {

  const location = useLocation();
  const user = new URLSearchParams(location.search).get('redirect');

  
  if(user){
    const decryptedUser = decrypt(user);
    localStorage.setItem('user',decryptedUser);
  }

  return (
    <>
        <Navbar />
        <div className="">
            <div className="row w-100">
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className="col-9">
                    <Outlet />
                </div>
            </div>
        </div>
    </>
  )
}

export default SuperAdmin;