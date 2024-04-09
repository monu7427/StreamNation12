import Navbar from "@/components/Navbar";
import React from "react";

const RefundPolicy = () => {
    return (
        <section id="About">
            <Navbar />
            <div className="container px-4 py-4">
                <h1 className="text-xl font-black text-center mb-3">
                    Refund Policy
                </h1>
                <p className="font-medium text-gray-400 text-center">
                   
At StreamNation, we uphold a robust refund policy to safeguard the interests of our valued customers. Should you fail to receive your account credentials within 15 hours of payment, you are entitled to a full refund. Once the account credentials have been successfully delivered, we regret that we cannot accommodate further refunds. Our commitment to delivering timely services underscores our dedication to providing an exceptional customer experience. Should you require any assistance or have inquiries, our customer service team is at your disposal and ready to assist you promptly.
                </p>
            </div>
        </section>
    );
};

export default RefundPolicy;
