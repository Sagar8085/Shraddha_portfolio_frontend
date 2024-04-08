import React, { useState } from "react";
import "./navbar.scss";
import Modal from "react-bootstrap/Modal";
import LoginSignUp from "../../pages/Login/SignIn&SignUp";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg .bg-body">
          <div className="container-fluid">
            <NavLink to="/">
              <a className="navbar-brand" href="">
                Logo
              </a>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navlinks"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <NavLink to="/">
                  {" "}
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </NavLink>
                <NavLink to="blogs">
                  <a className="nav-link" href="#">
                    Blogs
                  </a>
                </NavLink>
                <NavLink to="experience">
                  <a className="nav-link" href="#">
                    Experience
                  </a>
                </NavLink>
                <NavLink to="project">
                  <a className="nav-link" href="#">
                    Project
                  </a>
                </NavLink>
                <NavLink to="about">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </NavLink>
                <NavLink to="contact">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </NavLink>
                <NavLink to="admin">
                  <a className="nav-link" href="">
                    Admin
                  </a>
                </NavLink>
                <button
                  type="button"
                  class="btn btn-outline-primary SignIn_SignUp"
                  onClick={() => setShow(true)}
                >
                  SignIn/SignUp
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          size="xl"
          fullscreen="sm-down"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              <div className="model_title">
                Login and Signup{" "}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1361/1361913.png"
                  className="form_title_userImage"
                />
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginSignUp />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
