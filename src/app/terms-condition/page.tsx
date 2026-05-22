"use client"; 
import Footer from "@/components/footer/footers";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";

import missionIcon from '@/assets/images/mission-graphics.png';
import visionIcon from '@/assets/images/vision.png';
import valuesIcon from '@/assets/images/values.png';
import { log } from "console";

export default function PrivacyPolicy() {
    return (
        <>
            <style jsx>{`
                .container {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 10px;
                    text-align: justify;
                }
                h1, h2 {
                    font-weight: bold;
                }
                p {
                    margin: 0.5em 0;
                }
                ul {
                    margin: 0.5em 0;
                    padding-left: 20px;
                }
            `}</style>

            <section className="container">
                <h1 className="text-center large-text"><b>Terms and Conditions</b></h1>
                <p>Last updated: October 15, 2024</p>

                <p>Welcome to Sure Deed! These terms and conditions ("Terms") govern your access to and use of the Sure Deed website (www.suredeed.com), mobile app, and related services ("Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with these Terms, you must not use our Services.</p>

                <h2>1. Acceptance of Terms</h2>
                <p>By using Sure Deed’s website or mobile app, you confirm that you have read, understood, and agreed to these Terms and our Privacy Policy. You must be at least 18 years old to use our Services.</p>

                <h2>2. Services Provided</h2>
                <p>Sure Deed provides a platform for users to access a variety of land and legal services, including but not limited to:</p>
                <ul>
                    <li>Khaiyan Sheba</li>
                    <li>Namzari Sheba</li>
                    <li>Namzari Khatiyan</li>
                    <li>Montage Check</li>
                    <li>Mowja Map</li>
                    <li>N.E.C Certificate</li>
                    <li>Deed Search</li>
                    <li>Land Survey</li>
                    <li>Deed Withdrawal</li>
                    <li>Copies of Past Cases and Judgments</li>
                    <li>Property Registration</li>
                    <li>Property Verification Report</li>
                    <li>Land Price Value</li>
                    <li>Land Dispute Service</li>
                    <li>Document Locker</li>
                    <li>Deed Check</li>
                </ul>
                <p>The scope of services may vary based on the availability of resources and your location.</p>

                <h2>3. User Responsibilities</h2>
                <p>As a user of Sure Deed:</p>
                <ul>
                    <li>You agree to provide accurate and up-to-date information while registering or using any of our services.</li>
                    <li>You must maintain the confidentiality of your login details and are responsible for all activities that occur under your account.</li>
                    <li>You must use the platform only for lawful purposes. Any misuse of the platform for fraudulent or illegal purposes may result in termination of your access.</li>
                </ul>

                <h2>4. Fees and Payment</h2>
                <p>Some services offered by Sure Deed may require payment. Fees for such services will be displayed before you place your order. By using a paid service, you agree to pay all associated fees and taxes.</p>
                <p>Fees are subject to change at any time at Sure Deed's discretion.</p>
                <p>In the event of non-payment or payment disputes, Sure Deed reserves the right to suspend or terminate access to the services.</p>

                <h2>5. Document Locker</h2>
                <p>The Document Locker feature allows users to store land and legal documents. Sure Deed takes reasonable measures to secure these documents; however, we do not guarantee the absolute security of the data. You are responsible for maintaining a backup of your documents.</p>

                <h2>6. Intellectual Property</h2>
                <p>All content, trademarks, and intellectual property on the Sure Deed website and app, including text, graphics, logos, images, and software, are owned by Sure Deed or its licensors. You may not use, copy, or reproduce any of this content without our prior written consent.</p>

                <h2>7. Termination</h2>
                <p>Sure Deed reserves the right to suspend or terminate your access to the Services at any time, with or without notice, for any reason, including but not limited to breach of these Terms.</p>

                <h2>8. Disclaimer of Warranties</h2>
                <p>Sure Deed provides its services on an "as is" and "as available" basis. We do not guarantee that the services will be error-free, secure, or uninterrupted. Use of our services is at your own risk.</p>

                <h2>9. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, Sure Deed, its directors, employees, or affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the platform or services.</p>

                <h2>10. Privacy</h2>
                <p>Your use of our Services is also governed by our Privacy Policy, which explains how we collect, use, and disclose your personal information. By using Sure Deed, you consent to the collection and use of information as described in the Privacy Policy.</p>

                <h2>11. Modifications to the Terms</h2>
                <p>Sure Deed reserves the right to modify these Terms at any time. We will notify users of any significant changes via email or through the platform. Continued use of the platform after any such modifications constitutes your acceptance of the revised Terms.</p>

                <h2>12. Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of Bangladesh. Any disputes arising from the use of the Sure Deed platform or services shall be subject to the exclusive jurisdiction of the courts in Bangladesh.</p>

                <h2>13. Contact Information</h2>
                <p>If you have any questions or concerns about these Terms, please contact us at:</p>
                <p>Email: <a href="mailto:support@suredeed.com">support@suredeed.com</a><br />
                Phone: +880 1832650404<br />
                Address:2nd Floor, Shop no:82B, Railway Man City Center,16 Station Road, Chattogram</p>
            </section>
        </>
    );
}
