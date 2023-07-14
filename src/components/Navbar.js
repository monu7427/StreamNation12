import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback } from "react";
const Navbar = () => {
    const [NavbarStatus, setNavbarStatus] = useState(false);
    const [NavbarHeight, setNavbarHeight] = useState(0);
    const [NavbarPosition, setNavbarPosition] = useState("static");
    const [PageScrolled, setPageScrolled] = useState(0);
    if (PageScrolled > NavbarHeight && NavbarPosition !== "fixed") {
        setNavbarPosition("fixed");
    } else if (PageScrolled < NavbarHeight && NavbarPosition !== "static") {
        setNavbarPosition("static");
    }
    useEffect(() => {
        try {
            const NavbarHeight = document.querySelector("#Navbar").clientHeight;
            setNavbarHeight(NavbarHeight);
        } catch (e) {}
        return () => {};
    }, []);

    const router = useRouter();
    const [CurrentURL, setCurrentURL] = useState("");
    useEffect(() => {
        if (router.isReady) {
            setCurrentURL(router.pathname);
        }
        return () => {};
    }, [router.isReady]);

    const Urls = [
        { name: "Home", url: "/", context: "/" },
        { name: "About Us", url: "/about", context: "/about" },
        { name: "Contact Us", url: "/contact", context: "/contact" },
    ];

    const onScroll = useCallback((event) => {
        const { pageYOffset, scrollY } = window;
        setPageScrolled(pageYOffset);
    }, []);

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true });
        };
    }, []);
    return (
        <section id="Navbar" style={{ position: NavbarPosition }}>
            <div className="main-bar">
                <div className="logo">
                    <Link href="/">
                        <img src="/logo.png" alt="logo" />
                    </Link>
                </div>
                <button
                    onClick={() => setNavbarStatus(!NavbarStatus)}
                    className="md:hidden"
                >
                    {NavbarStatus ? (
                        <i className="text-2xl bx bx-x"></i>
                    ) : (
                        <i className="text-2xl bx bx-menu"></i>
                    )}
                </button>
                <ul className="items-center hidden gap-4 md:flex">
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
                </ul>
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
                </ul>
            </div>
        </section>
    );
};

export default Navbar;
