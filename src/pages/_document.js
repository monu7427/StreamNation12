import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-T0LY9K86NR', 'auto');
          ga('send', 'pageview');
        `}
                </Script>
                <Script
                    src="https://www.google-analytics.com/analytics.js"
                    strategy="afterInteractive"
                />

                {/* <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-T0LY9K86NR"
                ></script> */}

                {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'YOUR_TRACKING_ID');
          `,
                    }}
                /> */}
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
