import React from 'react'
import Navbar from '../../Utils/Navbar';
import Sidebar from '../../Utils/Sidebar';
import { Outlet } from 'react-router';

const SuperAdmin = () => {
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