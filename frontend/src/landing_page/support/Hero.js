import React from "react";

const quickLinks = [
  { label: "Track account opening", href: "#" },
  { label: "Track segment activation", href: "#" },
  { label: "Intraday margins", href: "#" },
  { label: "Kite user manual", href: "#" },
];

const featuredArticles = [
  "Current Takeovers and Delisting - January 2024",
  "Latest Intraday Leverages - MIS & CO",
];

function Hero() {
  const preventPlaceholderNavigation = (event) => {
    event.preventDefault();
  };

  return (
    <section className="container-fluid px-0" id="supportHero">
      {/* Support portal header */}
      <div className="container py-4" id="supportWrapper">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2">
          <h1 className="h4 mb-0">Support Portal</h1>

          <a
            href="#"
            onClick={preventPlaceholderNavigation}
            className="text-decoration-none"
          >
            Track Tickets
          </a>
        </div>
      </div>

      {/* Main support content */}
      <div className="container py-4 py-md-5">
        <div className="row g-4 g-lg-5">
          {/* Search and quick links */}
          <div className="col-12 col-lg-7">
            <h2 className="h3 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h2>

            <form
              role="search"
              onSubmit={(event) => event.preventDefault()}
              className="mb-3"
            >
              <label htmlFor="supportSearch" className="visually-hidden">
                Search support topics
              </label>

              <input
                id="supportSearch"
                type="search"
                className="form-control form-control-lg"
                placeholder="E.g. How do I activate F&O?"
                autoComplete="off"
              />
            </form>

            <div
              className="d-flex flex-wrap gap-3"
              aria-label="Quick help topics"
            >
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={preventPlaceholderNavigation}
                  className="text-decoration-none"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Featured articles */}
          <div className="col-12 col-lg-5">
            <h2 className="h4 mb-3">Featured</h2>

            <ol className="ps-3 mb-0">
              {featuredArticles.map((article) => (
                <li className="mb-3" key={article}>
                  <a
                    href="#"
                    onClick={preventPlaceholderNavigation}
                    className="text-decoration-none"
                  >
                    {article}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;