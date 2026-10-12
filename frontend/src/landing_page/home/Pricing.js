import React from "react";
function Pricing() {
  return (
    <div className="container mt-10">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-5">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
            <div className="row">
                <div className="col text-center border p-10">
                    <h1>₹0</h1>
                    <p>Free equity delivery and direct mutual funds</p>
                </div>
                <div className="col text-center border p-10">
                    <h1>₹20</h1>
                    <p>Intraday and F&O</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
