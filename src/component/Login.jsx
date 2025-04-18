import React from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 py-4">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h3 className="text-center mb-4">Welcome Back</h3>
        <form>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
            <label htmlFor="password">Password</label>
          </div>

          <button type="submit" className="btn btn-dark w-100 mb-3">
            Login
          </button>

          <p className="text-center">
            Don't have an account?{" "}
            <NavLink to="/register" className="text-decoration-none">
              Register
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
