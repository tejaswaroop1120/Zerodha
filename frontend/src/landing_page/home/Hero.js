import React from "react";
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
          <button className="btn-solid theme-primary btn-lg p-5">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
