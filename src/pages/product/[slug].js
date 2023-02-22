import Navbar from "@/components/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AllPlatforms from "@/components/AllPlatforms";
import Footer from "@/components/Footer";
import Link from "next/link";

const ProductPage = ({ Product, Products }) => {
    const [TopPaddingForBanner, setTopPaddingForBanner] = useState(0);
    useEffect(() => {
        try {
            const NavbarHeight = document.querySelector("#Navbar").clientHeight;
            setTopPaddingForBanner(NavbarHeight);
        } catch (e) {}
        return () => {};
    }, []);

    const PriceCardRender = () =>
        Product.items.map((item, index) => {
            return (
                <div className="pricing-card" key={index}>
                    <div className="header">
                        <h2>{item.name}</h2>
                        <h1>
                            ₹{item.price}/
                            {item.count > 1
                                ? item.count + item.period
                                : item.count + item.period.slice(0, -1)}
                        </h1>
                        <p className="my-2">
                            Duration:{" "}
                            <span>
                                {item.count > 1
                                    ? item.count + item.period
                                    : item.count + item.period.slice(0, -1)}
                            </span>
                        </p>
                        <p className="my-2">
                            No. of devices: <span>1 Device</span>
                        </p>
                        <p className="my-2">
                            Description: <span>{item.description}</span>
                        </p>
                        <Link
                            href={`https://wa.me/${
                                process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
                            }?text=Hi%2C%20I%20want%20${
                                Product.name
                            }%20available%20on%20your%20website.%0A*Plan%20details*%0A*Name*%3A%20${
                                item.name
                            }%0A*Price*%3A%20${item.price}%0A*Duration*%3A%20${
                                item.count > 1
                                    ? item.count + item.period
                                    : item.count + item.period.slice(0, -1)
                            }%0A*Description%3A*%20${
                                item.description
                            }%0A%0AIs%20it%20available%3F`}
                        >
                            <button>Get this Deal</button>
                        </Link>
                    </div>
                </div>
            );
        });

    return (
        <section
            id="ProductPage"
            style={{ paddingTop: TopPaddingForBanner + "px" }}
        >
            <Navbar />
            <div className="container">
                <img src={Product.banner} alt="banner" />

                <div className="content my-4">
                    <h1 className="text-2xl font-bold text-center">
                        {Product.name}
                    </h1>
                    <p className="text-sm font-medium text-gray-400 my-4 text-center">
                        {Product.description}
                    </p>

                    <div className="plans">
                        <h1 className="text-center text-2xl font-bold ">
                            Our plans
                        </h1>
                        <div className="pricing-cards">
                            <PriceCardRender />
                        </div>
                    </div>
                    <div className="fraud-report ">
                        <p className="text-[12px] bg-yellow-300 p-2 rounded text-center">
                            <i className="bx bx-info-circle mr-2"></i>
                            This website is under monitoring of{" "}
                            <Link
                                href="https://deepdevelopers.in"
                                className="text-[#673ee6] font-bold underline"
                            >
                                {" "}
                                deepdevelopers.in
                            </Link>{" "}
                            for any issue related to seller contact us at{" "}
                            <a
                                className="text-[#673ee6] font-bold underline"
                                href="#"
                            >
                                jashandeep1659@gmail.com
                            </a>{" "}
                            we will resolve it.
                        </p>
                    </div>
                </div>
            </div>

            <AllPlatforms Products={Products} />
            <Footer />
        </section>
    );
};
export async function getServerSideProps(context) {
    let Products = await axios.get(process.env.NEXT_PUBLIC_DATABASE_URL);
    Products = Products.data;
    const Product = Products.find((item) => item.slug === context.query.slug);
    if (!Product) {
        return { notFound: true };
    }

    return {
        props: {
            Products,
            Product,
        }, // will be passed to the page component as props
    };
}
export default ProductPage;
