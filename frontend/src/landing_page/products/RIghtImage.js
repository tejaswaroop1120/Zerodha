import React from "react";
function RightImage({
  imageURL,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-2"></div>
        <div className="col-4">
          <h1>{productName}</h1>
          <p className="mt-5 mb-5">{productDescription}</p>
          <div className="mb-5">
            {learnMore && (
              <a href={learnMore} className="ms-5">
                Learn more →
              </a>
            )}
          </div>
        </div>
        <div className="col-6 p-3">
          <img src={imageURL} style={{ width: "90%" }}></img>
        </div>
        
      </div>
    </div>
  );
}

export default RightImage;
