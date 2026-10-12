import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-lg-8">
          <h1 className="mb-4">Open a Zerodha Account</h1>

          <p className="mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
            and F&amp;O trades.
          </p>

          <Link
            to="/signup"
            className="btn btn-primary btn-lg px-4 py-3"
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;