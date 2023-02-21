import React from "react";

const Footer = () => {
    return (
        <section id="Footer">
            <h2>Fiberxott.com</h2>
            <div className="quick">
                <h3>Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Refund Policy</li>
                    <li>Terms and Conditions</li>
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
