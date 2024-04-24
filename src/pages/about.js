import Navbar from "@/components/Navbar";
import React from "react";

const About = () => {
    return (
        <section id="About" className="bg-blue-200">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-3">About Us</h1>
                    <p className="font-medium text-gray-700">
                        Welcome to StreamNation, a premier provider of top-tier OTT services at competitive prices. With a steadfast commitment to delivering unparalleled viewing experiences, we&apos;ve delighted nearly 10,000 satisfied users with our exceptional services. Our primary goal is to democratize access to the latest and most sought-after content, ensuring it&apos;s within reach for everyone without straining their budget. At StreamNation, our dedicated team comprises industry experts who tirelessly curate the finest content for our customers. We take pride in our outstanding customer service and remain readily available to assist with any inquiries or concerns. Thank you for entrusting StreamNation as your preferred streaming service provider.
                    </p>
                    <p className="mt-4">
                        For inquiries, partnership opportunities, or any other questions, feel free to reach out to us at <a href="mailto:info@streamnation.com" className="text-blue-500">info@streamnation.com</a>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
