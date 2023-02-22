import Head from "next/head";
import React from "react";

const DefaultMetaTags = () => {
    return (
        <Head>
            <meta
                name="description"
                content="FiberXOTT is a leading provider of premium OTT services, delivering the latest and most popular content at a price that won't break the bank."
            />
            <meta
                name="keywords"
                content="OTT services, premium content, affordable pricing, online streaming, fiberxott"
            />
            <meta name="robots" content="index, follow" />
            <meta
                property="og:title"
                content="FiberXOTT - Premium OTT Services at Affordable Pricing"
            />
            <meta
                property="og:description"
                content="FiberXOTT is a leading provider of premium OTT services, delivering the latest and most popular content at a price that won't break the bank."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.fiberxott.com/" />
            <meta
                name="twitter:title"
                content="FiberXOTT - Premium OTT Services at Affordable Pricing"
            />
            <meta
                name="twitter:description"
                content="FiberXOTT is a leading provider of premium OTT services, delivering the latest and most popular content at a price that won't break the bank."
            />

            <meta name="twitter:card" content="summary_large_image" />
            <title>
                FiberXOTT - Premium OTT Services at Affordable Pricing
            </title>
        </Head>
    );
};

export default DefaultMetaTags;
