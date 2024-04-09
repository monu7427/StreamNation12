import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AllPlatforms from "@/components/AllPlatforms";
import Link from "next/link";
import MainSwiper from "@/components/MainSwiper";
import DefaultMetaTags from "@/components/DefaultMetaTags";

const Home = (props) => {
  const [NavbarHeight, setNavbarHeight] = useState(0);
  const [TopBannerHeight, setTopBannerHeight] = useState(0);
  const [MainBannerHeight, setMainBannerHeight] = useState();

  useEffect(() => {
    axios.get(
      "https://api.countapi.xyz/hit/fiverxott/e74ebe4f-4c0b-4da0-a62d-d1e915da349c"
    );
    try {
      const visited = localStorage.getItem("visited");
      if (!visited) {
        localStorage.setItem("visited", true);
        axios.get(
          "https://api.countapi.xyz/hit/fiberxottunique/a63f0cb8-cbaa-4783-aaca-3713157bfda2"
        );
      }
    } catch (e) {}
    return () => {};
  }, []);

  useEffect(() => {
    try {
      const NavbarHeight = document.querySelector("#Navbar").clientHeight;
      setNavbarHeight(NavbarHeight);
      const TopBannerHeight = document.querySelector("#TopBanner").clientHeight;
      setTopBannerHeight(TopBannerHeight);
      const totalPageHeight = window.innerHeight;
      if (window.innerWidth < 768) {
        setMainBannerHeight(totalPageHeight - NavbarHeight - TopBannerHeight);
      }
    } catch (e) {}

    return () => {};
  }, []);

  return (
    <section id="Home">
    
      <DefaultMetaTags />
      <Navbar />
      <div
        className="main-banner"
        style={{
          minHeight: MainBannerHeight + "px",
        }}
      >
       
        <div className="flex flex-col items-center w-full text-container">
          
          <p className="w-3/4 text-sm font-medium text-center text-gray-400">
           
Are you feeling the pinch of high-priced subscriptions for premium OTT platforms?
          </p>
          <h1 className="w-3/4 text-center">StreamNation.com</h1>
          <h2 className="w-3/4 text-lg font-bold text-center">
            GET 4K NETFLIX SUBSCRIPTION AT JUST 125/- PER MONTH
          </h2>
          <ul>
            <li>
              <i className="bx bx-revision"></i>
              <p>100% Replacement warranty</p>
            </li>
            <li>
              <i className="bx bx-check-shield"></i>{" "}
              <p>Premium quality accounts</p>
            </li>
            <li>
              <i className="bx bx-time-five"></i>
              <p>24h Customer support</p>
            </li>
          </ul>
          <div className="button">
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi%2C%20I%20am%20new%20customer%20is%20the%20prime%20video%20in%2012rs%20offer%20still%20valid.`}
            >
              <button>Grab the deal</button>
            </Link>
            <p className="text-[10px] text-gray-400 text-right">
              only for limited users
            </p>
          </div>
        </div>
         <div className="img-container">
          <MainSwiper />
        </div>
      </div>
      <AllPlatforms Products={props.Products} />
      <Footer />
    </section>
  );
};

export async function getServerSideProps(context) {
  let Products = await axios.get(process.env.NEXT_PUBLIC_DATABASE_URL);
  Products = Products.data;
  return {
    props: {
      Products,
    }, // will be passed to the page component as props
  };
}

export default Home;
