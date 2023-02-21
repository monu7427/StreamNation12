import Link from "next/link";
import React, { useState } from "react";
const Navbar = () => {
    const [NavbarStatus, setNavbarStatus] = useState(false);
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
                    <li className="active link">Home</li>
                    <li className="link">About Us</li>
                    <li className="link">Contact Us</li>
                    <li className="text-red-500 flex items-center  gap-2">
                        Report fraud{" "}
                        <i className="bx bx-info-circle bx-rotate-180"></i>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Navbar;
