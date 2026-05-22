"use client"

import React, { useState } from "react";
import serviceImage from '@/assets/images/services.jpg'
import serviceImage1 from '@/assets/images/services1.jpg'
import Image, { StaticImageData } from "next/image";
import { Poppins } from "next/font/google";
import FloatingWhatsApp from "@/components/floatingwhatsapp/floatingwhatsapp";
import khatiyanShebaIcon from '@/assets/images/icons/khatiyan_sheba.jpg'
import namjariKhatiyanIcon from '@/assets/images/icons/namjari_khatiyan.jpg'
import namjariShebaIcon from '@/assets/images/icons/namjari_sheba.jpg'
import necCertificateIcon from '@/assets/images/icons/nec_cert.jpg'
import deedWithdrawalIcon from '@/assets/images/icons/deed_withdrawal.jpg'
import moujaMapIcon from '@/assets/images/icons/mouja_map.jpg'
import landSurveyIcon from '@/assets/images/icons/land_survey.jpg'
import mortgageCheckIcon from '@/assets/images/icons/mortgage_check.jpg'
import propertyRegistrationIcon from '@/assets/images/icons/property_registration.jpg'
import documentLockerIcon from '@/assets/images/icons/document_locker.jpg'
import landMarketValueIcon from '@/assets/images/icons/land_price.jpg'
import langDisputeServiceIcon from '@/assets/images/icons/land_dispute_service.jpg'
import copiesOfPastCasesIcon from '@/assets/images/icons/copies_of_past_cases.jpg'
import deedSearchIcon from '@/assets/images/icons/deed_search.jpg'
import propertyVerificationReportIcon from '@/assets/images/icons/property_verification_report.jpg'
import niActIcon from '@/assets/images/icons/check_mamla.jpg'
import deedCheckIcon from '@/assets/images/icons/deed_check.jpg'
import Modal from "@/components/service-modal/service-modal"; 


const poppins = Poppins(
    {
        weight: "800",
        style: "italic",
        subsets: ["latin"]
    }
);
interface Service {
    title: string;
    icon: StaticImageData;
    description: string;
}
const services: Service[] = [
    {
        title: "Khatiyan Sheba",
        icon: khatiyanShebaIcon,
        description: "Sure Deed provides comprehensive Khatiyan Sheba services, assisting users in obtaining updated land ownership records. Whether you need a new Khatiyan or an update, we guide you through the process effortlessly."
    },
    {
        title: "Namzari Khatiyan",
        icon: namjariKhatiyanIcon,
        description: "If you're looking for official proof of property mutation, Sure Deed ensures that you get an accurate Namzari Khatiyan without the usual delays. We manage all necessary steps to help you access this essential document."

    },
    {
        title: "Namzari Sheba",
        icon: namjariShebaIcon,
        description:"Our Namzari Sheba helps you legally transfer property ownership records after a sale, inheritance, or other transfer. Sure Deed streamlines this often complex process for a smooth, hassle-free experience."
    },
    {
        title: "N.E.C Certificate",
        icon: necCertificateIcon,
        description: "The N.E.C Certificate confirms that there are no legal claims or disputes over a property. Sure Deed simplifies obtaining this critical document, ensuring your property transactions are secure."
    },
    {
        title: "Deed Withdrawal",
        icon: deedWithdrawalIcon,
        description: "Sure Deed makes collecting the original deed from the government office convenient. We handle the bureaucratic steps, ensuring you receive the deed without needing multiple trips to government offices."
    },
    {
        title: "Mowja Map",
        icon: moujaMapIcon,
        description:"Our Mowja Map service provides users with detailed land plot maps, helping you understand property boundaries and neighboring plots. This service is essential for property purchases, disputes, or development projects."
    },
    {
        title: "Land Survey",
        icon: landSurveyIcon,
        description: "Accurate land measurement is crucial for disputes, sales, and property development. Sure Deed provides expert land survey services to measure your property boundaries in compliance with legal standards."
    },
    {
        title: "Mortgage Check",
        icon: mortgageCheckIcon,
        description:"Before purchasing land, it’s vital to verify ownership history. Sure Deed offers the Montage Check service to confirm that the property has a clear ownership trail, reducing your risk of fraudulent transactions."
    },
    {
        title: "Property Registration",
        icon: propertyRegistrationIcon,
        description: "Property registration is a key legal requirement for real estate transactions. Sure Deed provides end-to-end assistance, ensuring your property is registered correctly and all necessary documentation is filed."
    },
   
    {
        title: "Land Market Value",
        icon: landMarketValueIcon,
        description:"Sure Deed offers property valuation services, helping you determine the current market value of land. This service is beneficial for both buyers and sellers, ensuring fair pricing for real estate transactions."
    },
    {
        title: "Land Dispute Service",
        icon: langDisputeServiceIcon,
        description:"If you’re involved in a land dispute, Sure Deed provides legal support services to help resolve conflicts. From consultation to documentation support, we guide you through the legal steps needed to settle disputes."
    },
    {
        title: "Copies of Past Cases and Judgments",
        icon: copiesOfPastCasesIcon,
        description:"If you require copies of court judgments or past legal cases involving land or property disputes, Sure Deed offers an easy way to access these records through our platform."
    },
    {
        title: "Deed Search",
        icon: deedSearchIcon,
        description: "Sure Deed offers a Deed Search service that allows you to search and retrieve past deeds or legal records related to a property. We manage the process so that you can obtain the necessary documents quickly."
    },
    {
        title: "Property Verification Reports",
        icon: propertyVerificationReportIcon,
        description:"Before making any real estate investment, it’s essential to verify the property's legal status. Sure Deed’s Property Verification Report provides a comprehensive due diligence check, including the ownership history, pending disputes, and legal clarity."
    },
    {
        title: "N.I Act(Cheque Case)",
        icon: niActIcon,
        description:"Sure Deed provides legal assistance in handling cheque dishonor cases under the Negotiable Instruments Act (N.I Act). If a cheque issued to you has bounced due to insufficient funds, signature mismatch, or other reasons, we help you take the necessary legal steps under Section 138 of the Act. Our service includes consultation, filing of the case, and representation in court."
    },
    {
        title: "Deed Check",
        icon: deedCheckIcon,
        description:"Sure Deed’s Deed Check service allows you to verify the authenticity of legal land documents. This is especially important during property purchases to ensure that all documents are valid and legally binding."
    },
];


export default function Services() {
    
      const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState({ title: "", description: "" });

    const handleServiceClick = (service: Service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };
    return (
        <>
            <section id="service">
                                        <FloatingWhatsApp />

                <div id="hero" className="bg-emerald-50 py-10 flex flex-wrap">
                    <div className="flex flex-1 flex-col text-center justify-center px-10 gap-5">
                        <p style={poppins.style} className="text-2xl font-bold">Comprehensive Land and Legal Document Services</p>
                        <p className="font-sans">
                            Sure Deed offers a wide range of services designed to meet all your land and legal documentation needs. Our app provides a one-stop solution, making it easier than ever to access the services you require.
                        </p>
                    </div>
                    <div className="flex-1 py-2 px-24">
                        <Image className="rounded-full shadow" src={serviceImage1} alt="" />
                    </div>
                </div>
                <div id="hero2" className="py-10 flex flex-wrap flex-row-reverse">
                    <div className="flex flex-1 flex-col text-center justify-center px-10 gap-5">
                        <p style={poppins.style} className="text-2xl font-bold">Simplified Processes</p>
                        <p className="font-sans">
                            Each service is designed to be reliable, efficient, and secure, ensuring you have everything you need at your fingertips. Sure Deed is the only company in Bangladesh to offer such a comprehensive suite of services in a single, easy-to-use app.
                        </p>
                    </div>
                    <div className="flex-1 py-2 px-24">
                        <Image className="rounded-full shadow" src={serviceImage} alt="" />
                    </div>
                </div>
                <div id="services" className="bg-emerald-50 py-10">
                    <p className="text-3xl text-center">Services</p>
                    <div className="flex flex-wrap p-10 gap-4 justify-around">
                    
                    {services.map((service, index) => (
                        <ServiceCard service={service} onClick={() => handleServiceClick(service)} key={index} />
                        ))}

                </div>
                </div>

                 <div className="bg-emerald-50 flex flex-col items-center mt-10 text-center mx-auto max-w-2xl">
    <h2 className="text-2xl font-bold">Document Locker</h2>
    <p className="mt-2 px-4 text-justify mb-4">
        Sure Deed’s Document Locker allows users to store all land and legal documents securely in one place. Access your records anytime, anywhere through our app, ensuring you never lose critical paperwork again.
    </p>
</div>

                <Modal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                    title={selectedService.title} 
                    description={selectedService.description} 
                />

            </section>
        </>
    );
}
function  ServiceCard({ service, onClick }: { service: Service; onClick: () => void }) {
    return (
        <>
             <div onClick={onClick} className="shadow p-4 border bg-white w-10/12 md:w-1/6 cursor-pointer">
            <Image src={service.icon} alt="" className="w-14 pb-4" />
            <p className="font-bold">{service.title}</p>
                </div>
        </>
    );
}