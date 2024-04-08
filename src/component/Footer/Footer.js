import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4 col-md-12 text-center mb-3 mb-lg-0">
              <div className="footer_title">
                @ 2024 mohit-shrivastava. All Rights Reserved.
              </div>
            </div>
            <div className="col-lg-4 col-md-12 text-center mb-3 mb-lg-0">
              <div className="social_media_icon">
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/shraddha_pushpeyaa/"
                  target="_blank"
                  className="social-link"
                >
                  <i className="fab fa-instagram-square"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100084339966866"
                  target="_blank"
                  className="social-link"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/dr-shraddha-khare-875503113/"
                  target="_blank"
                  className="social-link"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 text-center mb-3 mb-lg-0">
              <h2>Contact Information</h2>
              <p>Email: example@example.com</p>
              <p>Phone: 123-456-7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
