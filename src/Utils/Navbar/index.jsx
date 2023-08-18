import React from "react";
import {  Image, Navbar as Nav } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import userImg from "../../assets/img/user.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <Nav className="bg-body-tertiary d-flex justify-content-between">
      <Nav.Brand className="d-flex justify-content-center align-items-center">
        <img
          alt=""
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top ms-3"
        />{" "}
        &nbsp; Interview Tool
      </Nav.Brand>
      <div className="me-3 text-lead d-flex justify-content-center" >
        <span className="Lead me-3">
          <Image className="round me-1" width={"30"} src={userImg} />
          <span className="d-none d-md-inline">SuperAdmin</span>
        </span>
        <Link
          to={"/login"}
          onClick={() => {
            props.signout();
            localStorage.clear();
          }}
          className="text-decoration-none text-black"
        >
          Logout
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
