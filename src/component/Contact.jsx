import React from "react";

export default function Contact() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "600px" }}>
        <h3 className="text-center mb-4 fw-bolder">Contact Us</h3>
        <form>
          <div className="form-floating mb-3 ">
            <input type="text" className="form-control" id="name" placeholder="Your Name" />
            <label htmlFor="name">Your Name</label>
          </div>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="subject" placeholder="Subject" />
            <label htmlFor="subject">Subject</label>
          </div>

          <div className="form-floating mb-4">
            <textarea
              className="form-control"
              placeholder="Your message"
              id="message"
              style={{ height: "120px" }}
            ></textarea>
            <label htmlFor="message">Your Message</label>
          </div>

          <button type="submit" className="btn btn-dark w-100">Send Message</button>
        </form>
      </div>
    </div>
  );
}
