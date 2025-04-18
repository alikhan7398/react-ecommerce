import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Register() {
  return (
    <div className="container d-flex justify-content-center align-items-center mb-5 py-5">
      <div className="card shadow p-4">
        <h3 className="text-center mb-4 fw-bolder">Create Account</h3>
        <form>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="name" placeholder="Full Name" />
            <label htmlFor="name">Full Name</label>
          </div>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>

          <div className="form-floating mb-4">
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>

          <button className="btn btn-outline-dark w-100" type="submit">Register</button>
        </form>
        <p className="text-center mt-3">
          Already have an account? 
          <NavLink to="/login">Login here</NavLink>
        </p>
      </div>
    </div>
  )
}
