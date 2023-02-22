import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const Navbar = () => {
    const router = useRouter();
    const [CurrentURL, setCurrentURL] = useState("");
    useEffect(() => {
        if (router.isReady) {
            setCurrentURL(router.pathname);
        }
        return () => {};
    }, [router.isReady]);

    const [NavbarStatus, setNavbarStatus] = useState(false);

    const Urls = [
        { name: "Home", url: "/", context: "/" },
        { name: "About Us", url: "/about", context: "/about" },
        { name: "Contact Us", url: "/contact", context: "/contact" },
    ];
    return (
        <section id="Navbar">
            <div className="main-bar">
                <div className="logo">
                    <Link href="/">
                        <img src="/logo.png" alt="logo" />
                    </Link>
                </div>
                <button onClick={() => setNavbarStatus(!NavbarStatus)}>
                    {NavbarStatus ? (
                        <i className="bx bx-x text-2xl"></i>
                    ) : (
                        <i className="bx bx-menu text-2xl"></i>
                    )}
                </button>
            </div>
            <div className={`mobile-menu ${NavbarStatus ? "active" : null}`}>
                <ul>
                    {Urls.map((url, index) => (
                        <li
                            className={`${
                                CurrentURL === url.context ? "active" : null
                            }`}
                            key={index}
                        >
                            <Link href={url.url}>{url.name}</Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/contact"
                            className="text-red-500 flex items-center  gap-2"
                        >
                            Report fraud
                            <i className="bx bx-info-circle bx-rotate-180"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Navbar;
