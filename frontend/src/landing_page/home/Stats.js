import React from "react";
function Stats() {
  return (
    <div className="container mt-10 mb-10">
      <div className="row mt-10">
        <div className="col-6">
          <h1 className="mb-10">Trust with confidence</h1>
          <h2 className="mb-5">Customer-first always</h2>
          <p>
            That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h2 className="mb-5 mt-5">No spam or gimmicks</h2>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h2 className="mb-5 mt-5">The Zerodha universe</h2>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="mb-5 mt-5">Do better with money</h2>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img src="media/images/ecosystem.png" style={{ width: "100%" }}></img>
        </div>
      </div>
    </div>
  );
}

export default Stats;
