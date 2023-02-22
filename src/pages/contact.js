import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Contact = () => {
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
                    Contact Us
                </h1>
                <h2 className="text-md font-bold my-2">Contact Seller</h2>
                <ul>
                    <li>
                        Whatsapp:{" "}
                        <Link
                            className="text-[#673ee6]  underline"
                            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi`}
                        >
                            {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
                        </Link>
                    </li>
                    <li>
                        Instagram:{" "}
                        <Link
                            className="text-[#673ee6]  underline"
                            href={"https://www.instagram.com/fiberx_ott/"}
                        >
                            @fiberx_ott
                        </Link>
                    </li>
                </ul>

                <h2 className="text-md font-bold my-2 mt-8">
                    Contact Deep Developers
                </h2>
                <p>
                    For any fraud done by seller or any issue with seller feel
                    free to contact us. Drop mail us at{" "}
                    <a className="text-[#673ee6] underline" href="">
                        jashandeep@gmail.com
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Contact;
