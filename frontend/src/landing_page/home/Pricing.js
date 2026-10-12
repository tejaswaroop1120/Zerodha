import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center g-4">
        {/* Left Section: Pricing Information */}
        <div className="col-12 col-lg-4">
          <h1 className="mb-4">Unbeatable pricing</h1>

          <p className="mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>

        {/* Spacing between sections on large screens */}
        <div className="col-12 col-lg-2" aria-hidden="true"></div>

        {/* Right Section: Pricing Cards */}
        <div className="col-12 col-lg-6">
          <div className="row g-3">
            {/* Free Delivery */}
            <div className="col-12 col-sm-6">
              <div className="h-100 text-center border rounded p-4">
                <h2 className="mb-3">₹0</h2>

                <p className="mb-0">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
            </div>

            {/* Intraday and F&O */}
            <div className="col-12 col-sm-6">
              <div className="h-100 text-center border rounded p-4">
                <h2 className="mb-3">₹20</h2>

                <p className="mb-0">Intraday and F&amp;O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;