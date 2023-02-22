import Link from "next/link";
import React from "react";

const Footer = () => {
    const Urls = [
        { name: "Home", url: "/", context: "/" },
        { name: "About Us", url: "/about", context: "/about" },
        { name: "Contact Us", url: "/contact", context: "/contact" },
        {
            name: "Report Fraud",
            url: "/report-fraud",
            context: "/report-fraud",
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
                <h3>Report Fraud</h3>
                <p>
                    If your are facing any kind of issue with the seller then
                    you can report at <a href="#">jashandeep1659@gmail.com</a>.
                    This site is being monitored by{" "}
                    <a href="#">deepdevelopers.in</a>. So for any fraud issue
                    feel free to contact us.
                </p>
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
