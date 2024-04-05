import React, { useState } from "react";
import "./navbar.scss";
import Modal from "react-bootstrap/Modal";
import LoginSignUp from "../../pages/Login/SignIn&SignUp";

export default function NavigationBar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg .bg-body">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
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
                <a className="nav-link active" aria-current="page" href="home">
                  Home
                </a>
                <a className="nav-link" href="blogs">
                  Blogs
                </a>
                <a className="nav-link" href="experience">
                  Experience
                </a>
                <a className="nav-link" href="project">
                  Project
                </a>
                <a className="nav-link" href="about">
                  About
                </a>
                <a className="nav-link" href="contact">
                  Contact
                </a>
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
