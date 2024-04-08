import React from "react";
import "./project.scss";

export default function Projects() {
  return (
    <div>
      {" "}
      <div className="projectMainDiv">
        <div className="container">
          <center>
            {/* <p className="heading_Discover_My_Journey">Discover My Journey</p> */}
          </center>
          <center>
            <h2 className="text-muted">Projects</h2>
          </center>
          {/* ----- */}
          <div className="row projectRow">
            <div className="col-lg-6 col-md-12 text-center mb-3 mb-lg-0 projectColumn">
              <img
                src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"
                alt="Avatar"
                className="avatar"
              />
            </div>
            <div className="col-lg-6 col-md-12 text-center mb-3 mb-lg-0 projectColumn">
              <h2 className="UseName">Encora</h2>
              <p className="projectDescription">
                Encora offers the most sustainable eco-conscious way to enjoy
                takeout food from your favorite food joints and stop the abuse
                of single-use
              </p>
            </div>
          </div>
          {/* ----- */}
          <div className="row projectRow">
            <div className="col-lg-6 col-md-12 text-center mb-3 mb-lg-0 projectColumn">
              <img
                src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"
                alt="Avatar"
                className="avatar"
              />
            </div>
            <div className="col-lg-6 col-md-12 text-center mb-3 mb-lg-0 projectColumn">
              <h2 className="UseName">Waterfront concerts
</h2>
              <p className="projectDescription">
              Based on the live event phenomenon, admin can create a public/private event as per their own and users can join it.
Web application will manage all the event history and application data.
s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
