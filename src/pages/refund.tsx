import { Card, CardContent } from "@/components/ui/card";

export default function Refund() {
  return (
    <div className="pt-24 min-h-screen bg-white flex items-center justify-center">
      <Card className="max-w-2xl w-full mx-4">
        <CardContent className="py-8 px-6 space-y-4">
          <h1 className="text-3xl font-bold text-deep-brown mb-4">Cancellation &amp; Refund Policy</h1>
          <p className="text-deep-brown/80 mb-2">
            <span className="font-semibold">Shree Balaji Padmavati Foundation</span> ("the Trust") is committed to fair and transparent processing of all donations and refund requests, in accordance with Indian law.
          </p>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">1. General Policy</h2>
          <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
            <li>All donations made to the Trust are voluntary and non-refundable, except in cases of error or unauthorized transaction.</li>
            <li>Refunds will not be possible if a tax exemption certificate under Section 80G of the Income Tax Act, 1961 has already been issued for the donation.</li>
          </ul>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">2. Requesting a Refund</h2>
          <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
            <li>To request a refund, please email <span className="font-semibold">info@balajimandir.org</span> within 7 days of the donation, stating the reason for the request and providing the following details:
              <ul className="list-disc ml-6">
                <li>Date and amount of donation</li>
                <li>Transaction ID or payment reference</li>
                <li>Donor name and contact details</li>
              </ul>
            </li>
            <li>The Trust may request additional information or documents to process the refund.</li>
          </ul>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">3. Refund Process & Timelines</h2>
          <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
            <li>Valid refund requests will be processed within 15 working days of approval.</li>
            <li>Refunds will be made to the original payment method used for the donation via Razorpay, our payment gateway partner, and are subject to Razorpay's timelines and policies.</li>
            <li>The Trust’s decision on refund requests will be final and binding.</li>
          </ul>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">4. Exceptions</h2>
          <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
            <li>No refund will be made if the donation has already been utilized for a specific project or activity, or if a tax certificate has been issued.</li>
            <li>Refunds are not applicable for any third-party processing fees or charges.</li>
          </ul>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">5. Contact</h2>
          <p className="text-deep-brown/70">For any queries regarding this policy, please contact:<br />
            <span className="font-semibold">Shree Balaji Padmavati Foundation</span><br />
            Email: info@balajimandir.org<br />
            Mumbai, Maharashtra, India
          </p>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">6. Jurisdiction</h2>
          <p className="text-deep-brown/70">This policy is governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.</p>
        </CardContent>
      </Card>
    </div>
  );
} 