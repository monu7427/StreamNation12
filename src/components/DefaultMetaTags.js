import Head from "next/head";
import React from "react";

const DefaultMetaTags = () => {
    return (
        <Head>
            <meta
                name="description"
                content="StreamNation is a premier provider of top-tier OTT services, offering the latest and most sought-after content at competitive prices."
            />
            <meta
                name="keywords"
                content="OTT services, premium content, affordable pricing, online streaming, streamnation"
            />
            <meta name="robots" content="index, follow" />
            <meta
                property="og:title"
                content="StreamNation - Top-Tier OTT Services at Competitive Prices"
            />
            <meta
                property="og:description"
                content="StreamNation is a premier provider of top-tier OTT services, offering the latest and most sought-after content at competitive prices."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.streamnation.com/" />
            <meta
                name="twitter:title"
                content="StreamNation - Top-Tier OTT Services at Competitive Prices"
            />
            <meta
                name="twitter:description"
                content="StreamNation is a premier provider of top-tier OTT services, offering the latest and most sought-after content at competitive prices."
            />
            <meta name="twitter:card" content="summary_large_image" />
            <title>
                StreamNation - Top-Tier OTT Services at Competitive Prices
            </title>
        </Head>
    );
};

export default DefaultMetaTags;
