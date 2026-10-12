import React from "react";
import { Link } from "react-router-dom";
function Notfound() {
  return (
    <div className="container mb-10">
      <div className="row text-center">
        <h1 className="mt-5">404 not found</h1>
        <p>Sorry! the page you are looking for does not exist</p>
        <div className="col-12 mb-10">
            <Link to="/">
          <button className="btn-solid theme-primary btn-lg p-5">
            Go Home
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
