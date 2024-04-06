import React from "react";
import "./home.scss";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const Navigate = useNavigate();
  const KnowMore = () => {
    Navigate("about");
  };
  return (<>
    <div className="mainDiv">
      <div className="container">
        <div className="row homeRow">
          <div className="col-lg-6 col-md-12 text-center mb-3 mb-lg-0">
            <img
              src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div className="col-lg-6 col-md-12 text-center mb-3 mb-lg-0">
            <h2 className="UseName">Hello I'm abc xyz</h2>
            <p className="jobDescription">Portfolio manager job description</p>
            <button
              type="button"
              onClick={() => KnowMore()}
              className="btn btn-outline-primary"
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}
