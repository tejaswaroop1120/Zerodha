import React from "react";

function Awards() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Section: Largest Broker Image */}
        <div className="col-12 col-md-6 p-4 p-lg-5">
          <img
            src="media/images/largestBroker.svg"
            alt="Zerodha, India's largest stock broker"
            className="img-fluid"
          />
        </div>

        {/* Right Section: Content */}
        <div className="col-12 col-md-6 p-4 p-lg-5">
          <h1 className="mb-4">Largest stock broker in India</h1>

          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* Investment Categories */}
          <div className="row mb-4">
            <div className="col-12 col-sm-6">
              <ul className="mb-0">
                <li>Futures and Options</li>
                <li>Stocks and IPOs</li>
                <li>Commodity derivatives</li>
              </ul>
            </div>

            <div className="col-12 col-sm-6">
              <ul className="mb-0">
                <li>Direct mutual funds</li>
                <li>Currency derivatives</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <img
            src="media/images/pressLogos.png"
            alt="Press coverage logos"
            className="img-fluid w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;