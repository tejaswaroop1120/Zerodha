import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container mb-10">
      <div className="row text-center">
        <img
          src="/media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        ></img>
        <h1 className="mt-5">Invest in everything</h1>
        <p className="text-secondary">
          Online platform to invest in stocks, IPOs, derivatives, mutual funds,
          ETFs, bonds, and more.
        </p>
        <div className="col-12 mb-10">
          <Link to="/signup">
            <button className="btn-solid btn-primary btn-lg p-5 btn">
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
