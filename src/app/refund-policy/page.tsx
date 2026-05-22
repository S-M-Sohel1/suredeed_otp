"use client"; // Ensure this is a client component

import React from "react";

export default function RefundPolicy() {
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
                <h1 class="text-center large-text"><b>Refund Policy</b></h1>
                <p>Last updated: October 15, 2024</p>

                <p>At Sure Deed, we are committed to providing quality land and legal services. This Refund Policy outlines the conditions under which refunds may be granted for services purchased through our website or mobile app.</p>
                
                <h2>1. General Policy</h2>
                <p>Sure Deed offers non-tangible, digital services, and as such, all sales are final once the service is rendered. Refunds are not automatically granted for completed services. However, refunds may be issued under certain circumstances, as described below.</p>
                
                <h2>2. Refund Eligibility</h2>
                <p>You may be eligible for a refund in the following situations:</p>
                <ul>
                    <li><strong>Service Not Delivered:</strong> If you have paid for a service but the service has not been delivered within the specified timeframe due to Sure Deed’s fault, you may be eligible for a full refund.</li>
                    <li><strong>Service Deficiency:</strong> If the service provided does not meet the specified requirements or is incomplete due to an error on our part, we will evaluate the situation and may offer a refund or provide corrective services at no additional cost.</li>
                    <li><strong>Duplicate Payment:</strong> If you accidentally make a duplicate payment for the same service, we will refund the duplicate amount.</li>
                </ul>

                <h2>3. Refund Requests</h2>
                <p>Refund requests must be submitted within 15 days of the service purchase. Requests should be sent to our customer support team and include:</p>
                <ul>
                    <li>Your full name</li>
                    <li>Order reference number</li>
                    <li>Description of the issue or reason for the refund request</li>
                </ul>
                <p>Refund requests can be submitted via:</p>
                <p>Email: <a href="mailto:support@suredeed.com">support@suredeed.com</a><br />
                Phone: [Insert phone number]</p>
                <p>Refunds will only be granted if Sure Deed fails to deliver the requested service.</p>

                <h2>4. Non-Refundable Cases</h2>
                <p>The following cases are non-refundable:</p>
                <ul>
                    <li>Fees paid for government services (such as registration fees or taxes) are non-refundable after they are submitted.</li>
                    <li>Services that have been fully rendered and completed as per the agreed terms.</li>
                    <li>Services where errors or delays occurred due to incorrect or incomplete information provided by the user.</li>
                    <li>Subscription fees for any services that have been used during the subscription period.</li>
                </ul>

                <h2>5. Processing Time</h2>
                <p>Once we receive your refund request, we will review the details and notify you of our decision within 7 business days. If your refund is approved, it will be processed within 14 days. The funds will be returned to your original payment method within this time frame, depending on your financial institution.</p>

                <h2>6. Chargebacks</h2>
                <p>Filing a chargeback with your payment provider for services that have been fully rendered may result in the suspension or termination of your Sure Deed account. If you have concerns about your payment, please contact us before filing a chargeback, and we will be happy to address the issue.</p>

                <h2>7. Changes to the Refund Policy</h2>
                <p>Sure Deed reserves the right to modify this Refund Policy at any time. Changes will be posted on this page, and the revised policy will apply to all transactions made after the date of the update.</p>

                <h2>8. Contact Information</h2>
                <p>For any questions or concerns regarding this Refund Policy, please contact us at:</p>
                <p>Email: <a href="mailto:support@suredeed.com">support@suredeed.com</a><br />
                Phone: +880 1832650404<br />
                Address: 2nd Floor, Shop no:82B, Railway Man City Center,16 Station Road, Chattogram</p>
            </section>
        </>
    );
}
