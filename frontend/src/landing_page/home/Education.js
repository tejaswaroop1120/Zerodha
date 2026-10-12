import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Section: Education Image */}
        <div className="col-12 col-md-6 p-4 p-lg-5">
          <img
            src="media/images/education.svg"
            alt="Market education"
            className="img-fluid"
          />
        </div>

        {/* Right Section: Education Content */}
        <div className="col-12 col-md-6 p-4 p-lg-5">
          <h1 className="mb-4">Free and open market education</h1>

          <p className="mb-4">
            Varsity, the largest online stock market education book in the world,
            covers everything from the basics to advanced trading.
          </p>

          <p className="mb-4">
            TradingQ&A is one of India's active trading and investment
            communities for market-related queries.
          </p>

          <a
            href="https://zerodha.com/varsity/"
            className="text-decoration-none"
          >
            Explore Varsity
            <i
              className="fa-solid fa-arrow-right ms-1"
              aria-hidden="true"
            ></i>
          </a>

          <br />

          <a
            href="https://tradingqna.com/"
            className="text-decoration-none"
          >
            Visit TradingQ&A
            <i
              className="fa-solid fa-arrow-right ms-1"
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;