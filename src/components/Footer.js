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
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-blue-500">StreamNation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="quick">
            <h3 className="text-lg font-semibold mb-2 bg-blue-900 rounded-md " >Quick Links</h3>
            <ul>
              {Urls.map((url, index) => (
                <li key={index} className="mb-2">
                  <a href={url.url} className="hover:text-blue-500">
                    {url.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="report">
            <h3 className="text-lg font-semibold mb-2">Customer Trust and Growth Highlights</h3>
            <p className="text-sm text-gray-400">
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
      </div>
      <div className="bg-gray-700 py-4 text-center">
        <p className="text-sm text-gray-400">
          &#169; 2024 by StreamNation.com and Manoj.in
        </p>
      </div>
    </footer>
  );
};

export default Footer;
