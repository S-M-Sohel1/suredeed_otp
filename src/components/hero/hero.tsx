import Image from "next/image";
import React from "react";
import heroImage from '@/assets/images/hero-img.png';
export default function Hero(){
    return (
        <>
          <section className="flex">
            <div className="container">
                <div className="flex md:flex-row md:justify-between flex-col-reverse">
                    <div className="md:w-1/2 flex justify-center items-center">
                        <div className="p-2 text-center md:p-20">
                            <h1 className="text-3xl font-bold">#1 Smart Land & Legal Services Platform in Bangladesh</h1>
                            <h2>Reliable, Secure, and Convenient Services at Your Fingertips</h2>
                            {/* <a href="#" className="download-btn"><i className="bx bxl-play-store"></i> Google Play</a>
                            <a href="#" className="download-btn"><i className="bx bxl-apple"></i> App Store</a> */}
                        </div>
                    </div>
                    <div className="md:w-1/2 p-2 md:p-12 items-center" data-aos="fade-up">
                        <Image src={heroImage} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
          </section>
        </>
    );
}