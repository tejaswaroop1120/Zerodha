import React from "react";
function LeftImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return(
    <div className="container">
        <div className="row d-flex align-items-center">
            <div className="col-2"></div>
            <div className="col-6 p-3">
                <img src={imageURL} style={{width:"90%"}}></img>
            </div>
            <div className="col-4">
                <h1 >{productName}</h1>
                <p className="mt-5 mb-5">{productDescription}</p>
                <div className="mb-5">
                    {tryDemo&&<a href={tryDemo}>Try demo →</a>}
                    {learnMore&&<a href={learnMore} className="ms-5">Learn more →</a>}
                </div>
                <div>
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"></img></a>
                    <a href={appStore}  className="ms-5"><img src="media/images/appStoreBadge.svg"></img></a>
                </div>
            </div>
            
        </div>
    </div>
  );
}

export default LeftImage;
