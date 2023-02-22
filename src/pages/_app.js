import Whatsapp from "@/components/whatsapp";
import "@/styles/globals.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
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
                {/* <meta
                    property="og:image"
                    content="[insert URL of website image]"
                /> */}
                <meta
                    name="twitter:title"
                    content="FiberXOTT - Premium OTT Services at Affordable Pricing"
                />
                <meta
                    name="twitter:description"
                    content="FiberXOTT is a leading provider of premium OTT services, delivering the latest and most popular content at a price that won't break the bank."
                />
                {/* <meta
                    name="twitter:image"
                    content="[insert URL of website image]"
                /> */}
                <meta name="twitter:card" content="summary_large_image" />
                <title>
                    FiberXOTT - Premium OTT Services at Affordable Pricing
                </title>
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                ></link>
            </Head>
            <Whatsapp />
            <Component {...pageProps} />
        </>
    );
}
