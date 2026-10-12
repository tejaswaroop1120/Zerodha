import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar bg-white border-bottom py-4 sticky-top">
      <div className="container-fluid px-5">

        {/* Zerodha Logo */}
        <Link className="navbar-brand ms-5" to="/">
          <img
            src="/media/images/logo.svg"
            alt="Zerodha"
            width="180"
          />
        </Link>

        {/* Navigation Links and Hamburger */}
        <div className="d-flex align-items-center ms-auto me-5">

          <ul className="navbar-nav flex-row align-items-center gap-4 me-5">
            <li className="nav-item">
              <Link className="nav-link text-secondary fs-5" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-secondary fs-5" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-secondary fs-5" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-secondary fs-5" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-secondary fs-5" to="/support">
                Support
              </Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <button
            className="navbar-toggler border-0 shadow-none p-0"
            type="button"
            aria-label="Menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;