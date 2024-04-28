import React from "react";
import "./adminDashboard.scss";
import Table from "react-bootstrap/Table";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div>
      <div className="container-fluid p-5 bg-white">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="adminLinks">
              <NavLink to="/admin/blog">
                {" "}
                <button type="button" class="btn btn-link">
                  Blogs
                </button>
              </NavLink>
              <NavLink to="/admin/project">
                {" "}
                <button type="button" class="btn btn-link">
                  Projects
                </button>
              </NavLink>
              <NavLink to="/admin/profile">
                {" "}
                <button type="button" class="btn btn-link">
                  Profile
                </button>
              </NavLink>
            </div>{" "}
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
