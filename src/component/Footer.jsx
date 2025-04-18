import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <footer
          className="bg-white text-dark py-4 
    mt-5 fw-bold border-top border-3"
        >
          <div className="container text-center">
            <h4 className="mb-1">Created by Ali </h4>
            <p className="mb-0">
              <a
                href="https://alikhan7398.github.io/react-ecommerce/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
