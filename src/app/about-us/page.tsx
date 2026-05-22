import Footer from "@/components/footer/footers";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import FloatingWhatsApp from "@/components/floatingwhatsapp/floatingwhatsapp";
import missionIcon from '@/assets/images/mission-graphics.png';
import visionIcon from '@/assets/images/vision.png';
import valuesIcon from '@/assets/images/values.png';
import { log } from "console";

const whyValues = [
    {
        icon: missionIcon,
        title: "Comprehensive Services",
        description: "Access a wide range of land and legal document services all in one place."
    },
    {
        icon: visionIcon,
        title: "Simplified Processes",
        description: "Streamlined and user-friendly services designed for your convenience."
    },
    {
        icon: valuesIcon,
        title: "Digital Access",
        description: "Access all services online, anytime, anywhere, through our app."
    },
    {
        icon: missionIcon,
        title: "Enhanced Security",
        description: "Robust measures to protect your data and documents, through our app."
    },
    {
        icon: visionIcon,
        title: "Expert Support",
        description: "Services backed by a team of legal and expoert professionals."
    },
];
const services = [
    "Khatiyan Sheba",
    "Namzari Khatiyan",
    "Namzari Sheba",
    "N.E.C Certificate",
    "Deed Withdrawal",
    "Mowja Map",
    "Land Survey",
    " Mortgage Check",
    "Property Registration",
    "Document Locker",
    "Land Market Value",
    "Land Dispute Service",
    "Copies of Past Cases and Judgments",
    "Deed Search",
    "Property Verification Reports",
    "N.I Act(Cheque Case)",
    "Deed Check"
];

const founders = [
    {
        name:"Abdul Mazid Mustafa",
        designation:"Founder & CEO",
        description:"Abdul Mazid Mustafa has been the driving force behind Sure Deed. With his extensive experience in land and legal services, he envisioned a platform that could revolutionize the industry by offering simplified and secure solutions."
    },
    {
        name:"Mohammed Montacher Mokarrom Sikder ",
        designation:"Co-Founder & COO",
        description:"Mohammed Montacher Mokarrom Sikder brings a wealth of operational expertise to Sure Deed. His commitment to efficiency and excellence ensures that our services meet the highest standards."
    },
    {
        name:"Md Fazlul Hoq",
        designation:"Co-Founder",
        description:"Md Fazlul Hoq plays a pivotal role in shaping the vision of Sure Deed. With a strong background in business development and strategy, he is dedicated to driving innovation and fostering partnerships that enhance our service offerings."

    },
    // {
    //     name:"MD Mohsin Sikder ",
    //     designation:"Chief Legal & Registration Officer",
    //     description:"MD Mohsin Sikder oversees the legal and registration processes, ensuring compliance and accuracy in all our services."
    // }
];
export default function AboutUs() {
    return (
        <>
            <section>
                            <FloatingWhatsApp />

                <div id="hero_section" className="bg-emerald-50 pb-20 flex flex-col">
                    <h1 className="text-center text-4xl pt-20 pb-5">About us</h1>
                    <h2 className="text-center max-w-1/2 font-semibold pb-5">Sure Deed: Transforming Land and Legal Document Services in Bangladesh</h2>
                    <p className="text-center w-1/2 self-center">At Sure Deed, our mission is to simplify and secure land and legal document services for all citizens of Bangladesh. We understand the complexities and bureaucratic delays often associated with these processes, and we aim to provide a comprehensive, app-based solution that enhances convenience, reliability, and security.
                    </p>
                </div>
                <div id="mission" className="flex py-20 flex-col md:flex-row">
                    <div className="flex-1 justify-center self-center p-20">
                        <h1 className="text-3xl font-semibold text-center">Our Mission</h1>
                        <p className="text-center">To streamline and digitize land and legal documentation processes, making them accessible and hassle-free for everyone.</p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image className="" src={missionIcon} alt=""/>
                    </div>
                </div>
                <div id="vision" className="flex py-20 flex-col md:flex-row-reverse bg-emerald-50">
                    <div className="flex-1 justify-center self-center p-20">
                        <h1 className="text-3xl font-semibold text-center">Our Vision</h1>
                        <p className="text-center">To become the leading provider of efficient and secure land and legal document services in Bangladesh.</p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image className="" src={visionIcon} alt="" />
                    </div>
                </div>
                <div id="values" className="flex flex-col-reverse md:flex-row py-20">
                    <div className="flex-1 justify-center self-center ps-4">
                        <h1 className="text-3xl font-semibold text-center">Our Values</h1>
                        <ul className="text-sm list-disc ps-10 pt-6">
                            <li>
                                <span>Convenience:</span> <span>Order any land document and legal services from the comfort of your home.</span>
                            </li>
                            <li>
                                <span>Reliability:</span><span>Expert legal professionals ensure accuracy and reliability.</span>
                            </li>
                            <li>
                                <span>Security:</span><span>Advanced security measures protect user data and documents.</span>
                            </li>
                            <li>
                                <span>Efficiency:</span><span>Elimination of bureaucratic delays and intermediaries.
                                </span>
                            </li>
                        </ul>
                        <p className="text-sm ps-5 pt-4">
                            Sure Deed is the first and only company in Bangladesh to offer all these services on a single platform, accessible through our innovative app. With Sure Deed, you can handle all your land and legal documentation needs seamlessly and securely.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image className="" src={valuesIcon} alt="" />
                    </div>
                </div>
                <div id="why-suredeed" className="bg-emerald-50 py-10">
                    <h1 className="text-3xl font-semibold text-center mb-10">Why Choose Suredeed</h1>
                    <div className="flex px-10 justify-between gap-4 flex-wrap">
                        {whyValues.map((whyValue: any, index: number) => {
                            whyValue.index = index;
                            return <WhyCard whyValue={whyValue} key={index}/>
                        })}
                    </div>
                </div>
                <div id="services" className="py-10">
                    <h1 className="text-3xl font-semibold text-center mb-10">Our Services</h1>
                    <div className="flex px-10 justify-center md:justify-normal gap-5 flex-wrap">
                        {services.map((service: string,index:number)=>{
                            return <ServiceCard service={service} key={index}/>
                        })}
                    </div>
                </div>
                <div id="founders" className="py-10 bg-emerald-50">
                    <h1 className="text-3xl font-semibold text-center mb-10">Our Founders</h1>
                    <div className="flex flex-wrap justify-around px-10">
                        {founders.map((founder:any,index: number)=>{
                            founder.index = index;
                            return <FoundersCard founder={founder} key={index}/>
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
function WhyCard({ whyValue }: any) {
    return (
        <>
            <div className="flex-1 border shadow p-4 flex flex-col justify-between" key={whyValue.index}>
                <Image src={whyValue.icon} alt={whyValue.title} />
                <div className="">
                    <p className="text-center font-semibold pb-5">{whyValue.title}</p>
                    <p className="text-sm text-center">
                        {whyValue.description}
                    </p>
                </div>

            </div>
        </>
    );
}
function ServiceCard({service}:any){
    return (
        <>
            <div className="p-5 shadow-lg border w-3/4 md:w-auto bg-emerald-50 bg-opacity-20" key={service}>
                <p>{service}</p>
            </div>
        </>
    );
}
function FoundersCard({founder}:any){
    return (
        <>
            <div className="border shadow p-10 md:w-1/4 bg-white mb-3" key={founder.index}>
                <p className="text-center text-lg font-bold pb-2">{founder.name}</p>
                <p className="text-center text-base font-medium">{founder.designation}</p>
                <p className="text-center font-sans pt-10">{founder.description}</p>
            </div>
        </>
    );
}