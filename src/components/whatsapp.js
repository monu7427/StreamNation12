import Link from "next/link";
import React from "react";

const Whatsapp = () => {
    return (
        <section id="whatsapp">
            <Link
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi`}
            >
                <img src="https://cdn.worldvectorlogo.com/logos/whatsapp-3.svg" />
            </Link>
        </section>
    );
};

export default Whatsapp;
