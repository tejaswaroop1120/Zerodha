import React from "react";
function Awards() {
  return (
    <div className="container mt-10 mb-10">
      <div className="row">
        <div className="col-6 p-5 mb-10">
          <img src="media/images/largestBroker.svg"></img>
        </div>
        <div className="col-6 p-5 mb-10">
          <h1>Largest stock broker in India</h1>
          <p className="mb-10">
            2+million Zerodha clients contribute to over 15% of all retail order
            volumes in India daily by trading and investing in:{" "}
          </p>

          <ul>
            <div className="row">
              <div className="col-6">
                <li>
                  <p>Feature and Options</p>
                </li>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
              </div>
              <div className="col-6">
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </div>
            </div>
          </ul>
          <img src="media/images/pressLogos.png" style={{ width: "93%" }}></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
