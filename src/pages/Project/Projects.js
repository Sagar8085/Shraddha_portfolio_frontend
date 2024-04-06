import React from "react";
import'./project.scss'

export default function Projects() {
  return <div> <div className="projectMainDiv">
  <div className="container">
    <center>
      <p className="heading_Discover_My_Journey">Discover My Journey</p>
    </center>
    <center>
      <h2>About Me</h2>
    </center>
    <div className="row projectRow">
      <div className="col-lg-6 col-md-12 text-center mb-3 mb-lg-0">
        <img
          src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"
          alt="Avatar"
          className="avatar"
        />
      </div>
      <div className="col-lg-6 col-md-12 text-center mb-3 mb-lg-0">
        <h2 className="UseName">Project: Project Name</h2>
        <p className="projectDescription">
          Portfolio manager job description nasnmmmmmmmmmmmmmmmmmmmmmmmmmmmmdans,mdnam,sndm,asndasnd,mnas,md nma,snd,masnd,mnasm, dn lkahdkjhakjhrkjw ehr kjhejk hjkrshfkjshajkahkjdhsjkhfkjs hfjsd hfjh
        </p>
        <button
          type="button"
          onClick={() => alert("pass")}
          className="btn btn-outline-primary"
        >
          Know More
        </button>
      </div>
    </div>
  </div>
</div></div>;
}
