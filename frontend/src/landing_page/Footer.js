import React from "react";

const footerSections = [
  {
    title: "Company",
    links: [
      "About",
      "Philosophy",
      "Press & media",
      "Careers",
      "Zerodha Cares (CSR)",
      "Zerodha.tech",
      "Open source",
      "Referral program",
    ],
  },
  {
    title: "Support",
    links: [
      "Contact us",
      "Support portal",
      "How to file a complaint?",
      "Status of your complaints",
      "Bulletin",
      "Circular",
      "Z-Connect blog",
      "Downloads",
    ],
  },
  {
    title: "Account",
    links: [
      "Open demat account",
      "Minor demat account",
      "NRI demat account",
      "HUF demat account",
      "Commodity",
      "Dematerialisation",
      "Fund transfer",
      "MTF",
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-light border-top">
      <div className="container py-5">
        {/* Footer Navigation */}
        <div className="row g-4 mb-5">
          {/* Logo and Copyright */}
          <div className="col-12 col-sm-6 col-lg-3">
            <img
              src="media/images/logo.svg"
              alt="Zerodha"
              className="img-fluid mb-4"
              style={{ maxWidth: "180px" }}
            />

            <p className="text-secondary small mb-1">
              © 2010 - 2026, Zerodha Broking Ltd.
            </p>

            <p className="text-secondary small mb-0">
              All rights reserved.
            </p>
          </div>

          {/* Company, Support and Account Links */}
          {footerSections.map((section) => (
            <div
              className="col-12 col-sm-6 col-lg-3"
              key={section.title}
            >
              <h2 className="h5 text-secondary mb-3">
                {section.title}
              </h2>

              <ul className="list-unstyled mb-0">
                {section.links.map((label) => (
                  <li className="mb-2" key={label}>
                    <a
                      href="#"
                      className="text-decoration-none text-secondary"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Information */}
        <div className="small text-secondary">
          <p>
            Zerodha Broking Limited: Member of NSE, BSE, MCX &amp; MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Limited – SEBI Registration no.:
            IN-DP-431-2019, CIN: U65929KA2018PLC116815, Registered Address:
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES/SMARTODR: Register on
            SCORES portal &amp; SMARTODR. Mandatory details for filing
            complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
            Benefits: Effective Communication, Speedy redressal of grievances.
          </p>

          <p>
            <a href="#" className="text-secondary">
              Smart Online Dispute Resolution
            </a>
            {" | "}
            <a href="#" className="text-secondary">
              Grievances Redressal Mechanism
            </a>
            {" | "}
            <a href="#" className="text-secondary">
              Project Jagrook by SEBI
            </a>
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly
            from Exchange/Depositories on your mobile/email at the end of the
            day. Issued in the interest of investors. KYC is one time exercise
            while dealing in securities markets - once KYC is done through a
            SEBI registered intermediary (broker, DP, Mutual Fund etc.), you
            need not undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please create a ticket here.
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>

          <p className="mb-0">
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely as a
            distributor for these products. Any disputes arising with respect
            to such distribution activity will not have access to SEBI
            SCORES/ODR, Exchange Investor Grievance Redressal Forum, or
            Arbitration mechanism. Fixed deposits are regulated by the Reserve
            Bank of India (RBI).
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;