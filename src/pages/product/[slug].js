import Navbar from "@/components/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";

const ProductPage = ({ Product, Products }) => {
    const [TopPaddingForBanner, setTopPaddingForBanner] = useState(0);
    useEffect(() => {
        try {
            const NavbarHeight = document.querySelector("#Navbar").clientHeight;
            setTopPaddingForBanner(NavbarHeight);
        } catch (e) {}
        return () => {};
    }, []);

    const ProductsRender = () =>
        Products.map((product, index) => {
            return <ProductCard key={index} product={product} />;
        });

    const PriceCardRender = () =>
        Product.items.map((item, index) => {
            return (
                <div className="pricing-card" key={index}>
                    <div className="header">
                        <h2>{item.name}</h2>
                        <h1>
                            ₹{item.price}/
                            {item.count > 1
                                ? item.period
                                : item.period.slice(0, -1)}
                        </h1>
                        <p>
                            Description: <span>{item.description}</span>
                        </p>
                        <button>Get this Deal</button>
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
                            <a href="#">deepdevelopers.in</a> for any problem
                            contact us <a href="#">deepdevelopers.in</a> we will
                            resolves
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
                    <ProductsRender />
                </div>
            </div>
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
