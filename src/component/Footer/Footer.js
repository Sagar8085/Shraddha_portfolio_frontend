import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        {" "}
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="footer_title">© 2022 Company, Inc</div>
            </div>
            <div className="col">
              <div className="social_media_icon">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
