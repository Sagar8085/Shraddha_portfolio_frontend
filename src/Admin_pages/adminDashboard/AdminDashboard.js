import React from "react";
import "./adminDashboard.scss";
import Table from "react-bootstrap/Table";

export default function AdminDashboard() {
  return (
    <div>
      <div className="container-fluid p-5 bg-white">
        <div className="row justify-content-center">
          <div className="col-md-12">
            {" "}
            <Table striped bordered hover variant="">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
