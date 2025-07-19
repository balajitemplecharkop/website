import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms &amp; Conditions - Balaji Mandir Charkop</title>
        <meta name="description" content="Read the terms and conditions for using the Balaji Mandir Charkop website and services." />
        <meta property="og:title" content="Terms &amp; Conditions - Balaji Mandir Charkop" />
        <meta property="og:description" content="Read the terms and conditions for using the Balaji Mandir Charkop website and services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balajimandircharkop.com/terms" />
      </Helmet>
      <div className="pt-24 min-h-screen bg-white flex items-center justify-center">
        <Card className="max-w-2xl w-full mx-4">
          <CardContent className="py-8 px-6 space-y-4">
            <h1 className="text-3xl font-bold text-deep-brown mb-4">Terms &amp; Conditions</h1>
            <p className="text-deep-brown/80 mb-2">
              Welcome to the official website of <span className="font-semibold">Shree Balaji Padmavati Foundation</span> ("the Trust"). By accessing or using this website, you agree to be bound by the following terms and conditions. Please read them carefully.
            </p>

            <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">1. Acceptance of Terms</h2>
            <p className="text-deep-brown/70">By using this website, you accept these terms and conditions in full. If you disagree with any part, please do not use our website.</p>

            <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">2. Use of Website</h2>
            <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
              <li>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else’s use of the website.</li>
              <li>Content on this website is for general information and use only. It is subject to change without notice.</li>
              <li>We reserve the right to modify or discontinue, temporarily or permanently, the website or any part of it without notice.</li>
            </ul>

            <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">3. Donations</h2>
            <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
              <li>All donations made to Shree Balaji Padmavati Foundation are voluntary and non-refundable, except as provided in our Cancellation & Refund Policy.</li>
              <li>Donations are used for charitable purposes as per the objectives of the Trust.</li>
              <li>Donors are responsible for providing accurate information for receipts and tax exemption certificates (if applicable under Section 80G of the Income Tax Act, 1961).</li>
              <li>All online payments are securely processed via Razorpay, a third-party payment gateway. By making a payment, you also agree to Razorpay's terms and privacy policy.</li>
            </ul>

            <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">4. Intellectual Property</h2>
            <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
              <li>All content, trademarks, logos, and materials on this website are the property of Shree Balaji Padmavati Foundation or its licensors.</li>
              <li>No part of this website may be reproduced, distributed, or transmitted in any form without prior written permission from the Trust.</li>
            </ul>

            <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">5. Limitation of Liability</h2>
            <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
              <li>The Trust is not liable for any loss or damage, direct or indirect, arising from the use of this website or any linked external sites.</li>
              <li>We do not guarantee that the website will be free from viruses or other harmful components. Users are responsible for safeguarding their devices.</li>
            </ul>

            <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">6. External Links</h2>
            <p className="text-deep-brown/70">Links to other websites are provided for convenience. The Trust does not endorse or take responsibility for the content or practices of any third-party sites.</p>

            <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">7. Governing Law & Jurisdiction</h2>
            <p className="text-deep-brown/70">These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.</p>

            <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">8. Changes to Terms</h2>
            <p className="text-deep-brown/70">The Trust may revise these terms at any time by updating this page. Please check this page regularly to ensure you are aware of any changes.</p>

            <p className="text-deep-brown/60 text-xs mt-6">For any queries regarding these terms, please contact us at info@balajimandir.org.</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
} 