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
                    We have a refund policy in place for our customers at
                    FiberXOTT. If for any reason, you do not receive your
                    accounts credentials within 15 hours of making payment, you
                    are eligible for a full refund. However, once the accounts
                    credentials have been delivered, we will not be able to
                    grant any refunds. We stand behind the quality of our
                    services and strive to deliver on time to ensure our
                    customers have the best possible experience with us. If you
                    have any questions or concerns, please do not hesitate to
                    reach out to our customer service team, who are always here
                    to assist you.
                </p>
            </div>
        </section>
    );
};

export default RefundPolicy;
