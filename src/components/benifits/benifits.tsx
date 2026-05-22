import Image from "next/image";
import React from "react";
import featureIcon1 from '@/assets/images/icons/feature-icon-1.svg';
import featureIcon2 from '@/assets/images/icons/feature-icon-2.svg';
import featureIcon3 from '@/assets/images/icons/feature-icon-3.svg';
import featureIcon4 from '@/assets/images/icons/feature-icon-4.svg';
import featureIcon5 from '@/assets/images/icons/feature-icon-5.svg';
import featureShape from '@/assets/images/icons/feature-shape.svg';

export default function Benifits(){
    return (
        <>
            <section className="relative px-20">
                <Image
                    className="absolute left-0 top-0 -z-[1] -translate-y-1/2"
                    src={featureShape}
                    alt=""
                />
                <div className="mt-12">
                    <div className="justify-between text-center">
                        <div className="text-2xl font-bold lg:text-4xl">
                            <h2>Key Benifits</h2>
                        </div>
                        <div className="mt-6 lg:col-5 lg:mt-0">
                            <p>
                            
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-3 xl:grid-cols-4">
                        <div
                            className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg"
                        >
                            <div>
                            <h3 className="h4 text-xl lg:text-2xl">Convenience</h3>
                            <p>Access our services from the comfort of your home, without the need for brokers or intermediaries.</p>
                            </div>
                            <span className="icon mt-4">
                            <Image
                                className="objec-contain"
                                src={featureIcon1}
                                alt=""
                            />
                            </span>
                        </div>
                        <div
                            className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg"
                        >
                            <div>
                            <h3 className="h4 text-xl lg:text-2xl">Reliability</h3>
                            <p>Our services are backed by expert legal professionals to ensure accuracy and trustworthiness.</p>
                            </div>
                            <span className="icon mt-4">
                            <Image
                                className="objec-contain"
                                src={featureIcon2}
                                alt=""
                            />
                            </span>
                        </div>
                        <div
                            className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg"
                        >
                            <div>
                            <h3 className="h4 text-xl lg:text-2xl">Security</h3>
                            <p>We implement advanced security measures to protect your data and documents, giving you peace of mind.
                            </p>
                            </div>
                            <span className="icon mt-4">
                            <Image
                                className="objec-contain"
                                src={featureIcon3}
                                alt=""
                            />
                            </span>
                        </div>
                        <div
                            className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg"
                        >
                            <div>
                            <h3 className="h4 text-xl lg:text-2xl">Efficiency</h3>
                            <p>Say goodbye to bureaucratic delays and lengthy procedures. We streamline the process to save you time and hassle.</p>
                            </div>
                            <span className="icon mt-4">
                            <Image
                                className="objec-contain"
                                src={featureIcon4}
                                alt=""
                            />
                            </span>
                        </div>
                    
                    </div>
                </div>
            </section>
        </>
    );
}