import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const Contact = () => {
    return (
     <>
     
     <section id="Contact" className="bg-blue-200">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Contact Us
                </h1>
                <div className="max-w-md mx-auto">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Contact Seller</h2>
                        <ul>
                            <li className="mb-2">
                                Whatsapp:{" "}
                                <Link
                                    className="text-blue-600 hover:underline"
                                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi`}
                                >
                                    {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
                                </Link>
                            </li>
                            <li className="mb-2">
                                Instagram:{" "}
                                <Link
                                    className="text-purple-600 hover:underline"
                                    href={"https://www.instagram.com/streamnation/"}
                                >
                                    @streamnation
                                </Link>
                            </li>
                            <li className="mb-2">
                                Email:{" "}
                                <Link
                                    className="text-purple-600 hover:underline"
                                    href="mailto:customer.care@streamnation.com"
                                >
                                    customer.care@streamnation.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Developer: Manoj Sharma</h2>
                        <p className="mb-6">
                            For any fraud done by seller or any issue with seller, feel
                            free to contact us. Drop us a mail at{" "}
                            <a className="text-purple-600 hover:underline" href="mailto:monusharma078607@gmail.com">
                                monusharma078607@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
     
     </>
    );
};

export default Contact;
