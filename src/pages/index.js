import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [TopPaddingForBanner, setTopPaddingForBanner] = useState(0);
    useEffect(() => {
        try {
            const NavbarHeight = document.querySelector("#Navbar").clientHeight;
            setTopPaddingForBanner(NavbarHeight);
        } catch (e) {}
        return () => {};
    }, []);

    return (
        <section id="Home">
            <Navbar />
            <div
                className="main-banner"
                style={{ paddingTop: TopPaddingForBanner + "px" }}
            >
                <div className="img-container">
                    <img src="/images/banner.png" alt="banner" />
                </div>
                <div className="container flex items-center flex-col">
                    <p className="text-center font-medium text-gray-400 text-sm w-3/4">
                        Are you still paying Hundreds in Premium of OTT
                        platform?
                    </p>
                    <h1 className="w-3/4 text-center">Fiberxott.com</h1>
                    <h2 className="w-3/4 text-center text-lg font-bold">
                        Subscriptions starting from ₹19/month
                    </h2>
                    <ul>
                        <li>
                            <i className="bx bx-check-shield"></i>{" "}
                            <p>30days warranty</p>
                        </li>
                        <li>
                            <i className="bx bx-revision"></i>
                            <p>30days free replacement</p>
                        </li>
                        <li>
                            <i className="bx bx-time-five"></i>
                            <p>24h Customer support</p>
                        </li>
                    </ul>
                    <div className="button">
                        <button>Claim 50% off on Netflix</button>
                        <p className="text-[10px] text-gray-400 text-right">
                            only for limited users
                        </p>
                    </div>
                </div>
            </div>
            <div className="all-platforms">
                <h1 className="text-xl font-black text-center">Our Services</h1>
                <ul className="filters">
                    <li className="active">All</li>
                    <li>OTT</li>
                    <li>Music</li>
                </ul>
                <div className="cards">
                    <div className="card">
                        <img
                            src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png"
                            alt="netflix"
                        />
                        <div className="card-content">
                            <h5>Starting from</h5>
                            <h2>₹79/month</h2>
                            <h4>+6 other plans</h4>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png"
                            alt="netflix"
                        />
                        <div className="card-content">
                            <h5>Starting from</h5>
                            <h2>₹79/month</h2>
                            <h4>+6 other plans</h4>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png"
                            alt="netflix"
                        />
                        <div className="card-content">
                            <h5>Starting from</h5>
                            <h2>₹79/month</h2>
                            <h4>+6 other plans</h4>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png"
                            alt="netflix"
                        />
                        <div className="card-content">
                            <h5>Starting from</h5>
                            <h2>₹79/month</h2>
                            <h4>+6 other plans</h4>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png"
                            alt="netflix"
                        />
                        <div className="card-content">
                            <h5>Starting from</h5>
                            <h2>₹79/month</h2>
                            <h4>+6 other plans</h4>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png"
                            alt="netflix"
                        />
                        <div className="card-content">
                            <h5>Starting from</h5>
                            <h2>₹79/month</h2>
                            <h4>+6 other plans</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Home;
