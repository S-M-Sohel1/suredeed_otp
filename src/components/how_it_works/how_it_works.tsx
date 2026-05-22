import Image from "next/image";
import React from "react";
import dropIcon from '@/assets/images/icons/drop.svg';
import brainIcon from '@/assets/images/icons/brain.svg';
import timerIcon from '@/assets/images/icons/timer.svg';

import slsImage from '@/assets/images/sells-by-country.png';
import checkMarkIcon from '@/assets/images/icons/checkmark-circle.svg';
import collaborationImage from '@/assets/images/collaboration.png';
import shapeImage from '@/assets/images/icons/feature-shape.svg';
import introThumb from '@/assets/images/intro-thumbnail.png';
import playIcon from '@/assets/images/icons/play-icon.svg';

export default function HowItWorks() {
    return (
        <>
            <section className="section services">
                <div className="container">
                    <h2 className="mb-1 mt-12 text-center text-3xl font-extrabold leading-tight text-gray-900">How it works</h2>
                    <div className="items-center md:flex md:flex-row">
                        <div className="md:w-1/2 md:flex md:justify-center">
                            <div className="tab-content">
                                <div className="tab-content-panel">
                                    <Image
                                        alt="image"
                                        className=""
                                        src={slsImage}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-6 lg:col-5 lg:mt-0 md:justify-center">
                            <div className="px-3">
                                <h2 className="text-2xl font-semibold font-sans">
                                    Download the App
                                </h2>
                                <p className="mt-4">
                                    Get our app from the App Store or Google Play.
                                </p>
                                {/* <ul className="tab-nav -ml-4 mt-8 border-b-0" data-tab-nav>
                                <li className="tab-nav-item active" data-tab="0">
                                <Image
                                alt="image" className="mr-3" src={dropIcon}  />
                                Habit building essential choose habit
                                </li>
                                <li className="tab-nav-item" data-tab="1">
                                <Image
                                alt="image" className="mr-3" src={brainIcon}  />
                                Get an overview of Habit Calendars.
                                </li>
                                <li className="tab-nav-item" data-tab="2">
                                <Image
                                alt="image" className="mr-3" src={timerIcon}  />
                                Start building with Habitify platform
                                </li>
                            </ul> */}
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5 mt-12 items-center lg:mt-0 md:flex md:flex-row-reverse">
                        <div className="md:w-1/2">
                            <div className="relative">
                                <Image
                                    alt="image" className="w-full object-contain" src={collaborationImage} />
                                <Image
                                    alt="image"
                                    className="absolute bottom-6 left-1/2 -z-[1] -translate-x-1/2"
                                    src={shapeImage}

                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-6 md:m-12">
                            <div className="px-3">
                                <h2 className="text-2xl font-semibold font-sans">
                                    Select Your Service
                                </h2>
                                <p className="mt-4">
                                    Choose the service you need from our comprehensive list.
                                </p>
                                {/* <ul className="mt-6 text-dark lg:-ml-4">
                            <li className="mb-2 flex items-center rounded px-4">
                            <Image
                             alt="image"
                                className="mr-3"
                                src={checkMarkIcon}
                                
                            />
                            Supporting more than 119 country world
                            </li>
                            <li className="mb-2 flex items-center rounded px-4">
                            <Image
                             alt="image"
                                className="mr-3"
                                src={checkMarkIcon}
                                
                            />
                            Open transaction with more than currencies
                            </li>
                            <li className="flex items-center rounded px-4">
                            <Image
                             alt="image"
                                className="mr-3"
                                src={checkMarkIcon}                                
                            />
                            Customer Service with 79 languages
                            </li>
                        </ul> */}
                            </div>
                        </div>
                    </div>
                    <div className="items-center md:flex md:flex-row">
                        <div className="md:w-1/2 md:flex md:justify-center">
                            <div className="tab-content">
                                <div className="tab-content-panel">
                                    <Image
                                        alt="image"
                                        className=""
                                        src={slsImage}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-6 lg:col-5 lg:mt-0 md:justify-center">
                            <div className="px-3">
                                <h2 className="text-2xl font-semibold font-sans">
                                    Submit Your Documents

                                </h2>
                                <p className="mt-4">
                                    Upload your documents securely through the app.

                                </p>
                                {/* <ul className="tab-nav -ml-4 mt-8 border-b-0" data-tab-nav>
                                <li className="tab-nav-item active" data-tab="0">
                                <Image
                                alt="image" className="mr-3" src={dropIcon}  />
                                Habit building essential choose habit
                                </li>
                                <li className="tab-nav-item" data-tab="1">
                                <Image
                                alt="image" className="mr-3" src={brainIcon}  />
                                Get an overview of Habit Calendars.
                                </li>
                                <li className="tab-nav-item" data-tab="2">
                                <Image
                                alt="image" className="mr-3" src={timerIcon}  />
                                Start building with Habitify platform
                                </li>
                            </ul> */}
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5 mt-12 items-center lg:mt-0 md:flex md:flex-row-reverse">
                        <div className="md:w-1/2">
                            <div className="relative">
                                <Image
                                    alt="image" className="w-full object-contain" src={collaborationImage} />
                                <Image
                                    alt="image"
                                    className="absolute bottom-6 left-1/2 -z-[1] -translate-x-1/2"
                                    src={shapeImage}

                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-6 md:m-12">
                            <div className="px-3">
                                <h2 className="text-2xl font-semibold font-sans">
                                    Receive Your Documents at Home

                                </h2>
                                <p className="mt-4">
                                    We deliver the processed documents to your doorstep.
                                </p>
                                {/* <ul className="mt-6 text-dark lg:-ml-4">
                            <li className="mb-2 flex items-center rounded px-4">
                            <Image
                             alt="image"
                                className="mr-3"
                                src={checkMarkIcon}
                                
                            />
                            Supporting more than 119 country world
                            </li>
                            <li className="mb-2 flex items-center rounded px-4">
                            <Image
                             alt="image"
                                className="mr-3"
                                src={checkMarkIcon}
                                
                            />
                            Open transaction with more than currencies
                            </li>
                            <li className="flex items-center rounded px-4">
                            <Image
                             alt="image"
                                className="mr-3"
                                src={checkMarkIcon}                                
                            />
                            Customer Service with 79 languages
                            </li>
                        </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}