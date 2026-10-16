import React from "react";

const ticketCategories = [
  {
    title: "Account Opening",
    icon: "fa-plus-circle",
    topics: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account Opening",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa-user-circle",
    topics: [
      "Login credentials",
      "Account modification",
      "Account closure",
      "Profile and contact details",
    ],
  },
  {
    title: "Trading and Markets",
    icon: "fa-line-chart",
    topics: [
      "Kite trading platform",
      "Orders and positions",
      "Margins and pledges",
      "Market hours and holidays",
    ],
  },
  {
    title: "Funds",
    icon: "fa-inr",
    topics: [
      "Add funds",
      "Withdraw funds",
      "Funds statement",
      "Failed fund transfer",
    ],
  },
  {
    title: "Console",
    icon: "fa-bar-chart",
    topics: [
      "Reports and statements",
      "Tax P&L report",
      "Holdings and positions",
      "Portfolio overview",
    ],
  },
  {
    title: "Coin and Mutual Funds",
    icon: "fa-pie-chart",
    topics: [
      "Mutual fund investments",
      "SIP orders",
      "Redemption and withdrawals",
      "Coin platform issues",
    ],
  },
];

function CreateTicket() {
  return (
    <section className="container py-5">
      <div className="row g-4">
        {/* Page heading */}
        <div className="col-12 mb-2">
          <h1 className="fs-2 mb-0">
            To create a ticket, select a relevant topic
          </h1>
        </div>

        {/* Support categories */}
        {ticketCategories.map((category) => (
          <div
            className="col-12 col-md-6 col-lg-4"
            key={category.title}
          >
            <section className="h-100 p-3 p-md-4 border rounded-2">
              <h2 className="fs-5 mb-3">
                <i
                  className={`fa ${category.icon} me-2`}
                  aria-hidden="true"
                />
                {category.title}
              </h2>

              <ul className="list-unstyled mb-0">
                {category.topics.map((topic) => (
                  <li className="mb-2" key={topic}>
                    <a
                      href="#"
                      onClick={(event) => event.preventDefault()}
                      className="text-decoration-none"
                    >
                      {topic}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CreateTicket;