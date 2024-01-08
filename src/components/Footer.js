import Link from "next/link";
import React from "react";

const Footer = () => {
  const Urls = [
    { name: "Home", url: "/", context: "/" },
    { name: "About Us", url: "/about", context: "/about" },
    { name: "Contact Us", url: "/contact", context: "/contact" },
    {
      name: "Report Fraud",
      url: "/contact",
      context: "/contact",
    },
    {
      name: "Refund Policy",
      url: "/refund-policy",
      context: "/refund-policy",
    },
  ];
  return (
    <section id="Footer">
      <h2>Fiberxott.com</h2>
      <div className="main">
        <div className="quick">
          <h3>Quick Links</h3>
          <ul>
            {Urls.map((url, index) => (
              <li key={index}>
                <Link href={url.url}>{url.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="report">
          <h3>Customer Trust and Growth Highlights</h3>
          <p>
            Over the past three years, we have had the privilege of serving an
            ever-growing customer base, exceeding 10,000 satisfied clients. Our
            commitment is evident in the reception of more than 500 daily
            orders, a testament to the trust and satisfaction our customers
            place in us. We take pride in maintaining a consistent 100%
            satisfaction rate, reflecting our dedication to delivering
            exceptional service and building lasting trust.
          </p>
        </div>
      </div>
      <div className="bottom">
        &#169; 2023 by
        <a href="#"> Fiberxott.com </a>
        and
        <a href="#"> Deepdevelopers.in</a>
      </div>
    </section>
  );
};

export default Footer;
