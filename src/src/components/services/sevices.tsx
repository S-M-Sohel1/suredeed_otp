import React from "react";
export default function Sevices(){
    return (
        <>
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
            <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Our Services</h2>
            <p className="mb-12 text-lg text-gray-500">We offer a range of services to meet your land and legal documentation needs</p>
            <div className="w-full">
                <div className="flex flex-col w-full mb-10 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-0 text-lg font-bold text-gray-800">খতিয়ান সেবা</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">Comprehensive assistance with land records.                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full ml-0 md:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-0 text-lg font-bold text-gray-800">নামজারি খতিয়ান</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">Efficient name registration services.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full mb-5 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-0 text-lg font-bold text-gray-800">এন. ই .সি সার্টিফিকেট</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">Easy NEC certificate processing..</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-0 text-lg font-bold text-gray-800">দলিল উত্তোলন</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">Secure deed collection services.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full ml-0 md:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-0 text-lg font-bold text-gray-800">প্রপার্টি রেজিস্ট্রেশন</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">Hassle-free property registration.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}