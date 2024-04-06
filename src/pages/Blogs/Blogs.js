import React from "react";
import "./blog.scss";

export default function Blogs() {
  const cardloop = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="blogMainDiv">
        <div className="container">
          <div className="row">
            {cardloop.map((index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 text-center mb-3 mb-lg-0"
              >
                <div className="card">
                  <img
                    src="https://img.freepik.com/free-vector/cute-happy-smiling-child-isolated-white_1308-32243.jpg?w=360&t=st=1712395264~exp=1712395864~hmac=01c86733284be3f03c123903f885b8bb4f4150857f6a2e697864616cef98db5e"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="https://www.google.com/" target="blank" className="btn btn-primary">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
