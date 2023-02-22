import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";

const About = () => {
    const [TopPaddingForBanner, setTopPaddingForBanner] = useState(0);
    useEffect(() => {
        try {
            const NavbarHeight = document.querySelector("#Navbar").clientHeight;
            setTopPaddingForBanner(NavbarHeight);
        } catch (e) {}
        return () => {};
    }, []);

    return (
        <section id="About" style={{ paddingTop: TopPaddingForBanner + "px" }}>
            <Navbar />
            <div className="container px-4 py-4">
                <h1 className="text-xl font-black text-center mb-3">
                    About Us
                </h1>
                <p className="font-medium text-gray-400 text-center">
                    Welcome to FiberXOTT, a leading provider of premium OTT
                    services at affordable pricing. With a commitment to
                    providing our customers with the best viewing experience, we
                    have served almost 10,000 satisfied users with our premium
                    services. Our mission is to make the latest and most popular
                    content accessible to everyone at a price that won't break
                    the bank. Our team at FiberXOTT is comprised of experts in
                    the OTT industry who work tirelessly to ensure that our
                    customers have access to the latest and greatest content. We
                    pride ourselves on our exceptional customer service and are
                    always here to help our customers with any questions or
                    concerns. Thank you for choosing FiberXOTT as your go-to
                    provider
                </p>
            </div>
        </section>
    );
};

export default About;
