import React from "react";

export default function SignUp() {
  return (
    <div>
      {" "}
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <form class="login-form border p-4">
              <h2 class="text-center mb-4">Login</h2>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
