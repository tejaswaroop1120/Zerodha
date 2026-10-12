import React from "react";

function Stats() {
  return (
    <div className="container my-5">
      <div className="row align-items-center g-4">
        {/* Left Section: Trust and Features */}
        <div className="col-12 col-lg-6">
          <h1 className="mb-4">Trust with confidence</h1>

          <h2 className="fs-4 mb-3">Customer-first always</h2>
          <p className="mb-4">
            That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-4 mb-3">No spam or gimmicks</h2>
          <p className="mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h2 className="fs-4 mb-3">The Zerodha universe</h2>
          <p className="mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4 mb-3">Do better with money</h2>
          <p className="mb-0">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right Section: Ecosystem Image */}
        <div className="col-12 col-lg-6">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha ecosystem of investment products"
            className="img-fluid w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;