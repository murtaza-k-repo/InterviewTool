import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import {FaLaptopCode, FaUserTie} from "react-icons/fa";
import {AiOutlineForm} from "react-icons/ai";

const Sidebar = () => {

  const [active, setActive] = useState(null);

  const location = useLocation();


  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div className="container sidebar">
      <ul className="links">
        <Link to="/">
          <li className={`d-flex align-items-center ${active === '/' && 'active'}`}>
            <RxDashboard size={30} /> &nbsp; <span className="d-none d-md-inline"> Dashboard</span>
          </li>
        </Link>
        <Link to="/manage-hr">
          <li className={`d-flex align-items-center ${active === '/manage-hr' && 'active'}`}>
            {" "}
            <HiOutlineBuildingOffice2 size={30} /> &nbsp;{" "}
            <span className="d-none d-md-inline">Manage HR</span>
          </li>
        </Link>
        <Link to="/manage-interviewer">
          <li className={`d-flex align-items-center ${active === '/manage-interviewer' && 'active'}`}><FaUserTie size={30} /> &nbsp;{" "}
            <span className="d-none d-md-inline">Manage Interviewer</span></li>
        </Link>
        <Link to="/manage-technology">
          <li className={`d-flex align-items-center ${active === '/manage-technology' && 'active'}`}><FaLaptopCode size={30} /> &nbsp;{" "}
            <span className="d-none d-md-inline">Manage Technology</span></li>
        </Link>
        <Link to="/manage-form">
          <li className={`d-flex align-items-center ${active === '/manage-form' && 'active'}`}><AiOutlineForm size={30} />&nbsp;{" "}
            <span className="d-none d-md-inline">Manage Form</span></li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
