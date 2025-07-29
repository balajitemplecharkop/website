import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

export default function ShippingExchange() {
  return (
    <div className="pt-24 min-h-screen bg-white flex items-center justify-center">
      <Helmet>
        <title>Shipping & Exchange Policy - Balaji Mandir Charkop</title>
        <meta name="description" content="Read the shipping and exchange policy for prasadam deliveries and physical offerings from Balaji Mandir Charkop." />
        <meta property="og:title" content="Shipping & Exchange Policy - Balaji Mandir Charkop" />
        <meta property="og:description" content="Read the shipping and exchange policy for prasadam deliveries and physical offerings from Balaji Mandir Charkop." />
        <meta property="og:image" content="https://tirupatibalajitemplecharkop.com/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <meta property="og:site_name" content="Balaji Mandir Charkop" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirupatibalajitemplecharkop.com/shipping" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shipping & Exchange Policy - Balaji Mandir Charkop" />
        <meta name="twitter:description" content="Read the shipping and exchange policy for prasadam deliveries and physical offerings from Balaji Mandir Charkop." />
        <meta name="twitter:image" content="https://tirupatibalajitemplecharkop.com/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <meta name="theme-color" content="#eab308" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tirupatibalajitemplecharkop.com/shipping" />
        <link rel="icon" type="image/webp" href="/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/pngtree-balaji-tilak-png-image_6538668.webp" />
      </Helmet>
      <Card className="max-w-2xl w-full mx-4">
        <CardContent className="py-8 px-6 space-y-4">
          <h1 className="text-3xl font-bold text-deep-brown mb-4">Shipping &amp; Exchange Policy</h1>

          <p className="text-deep-brown/80 mb-2">
            <span className="font-semibold">Shree Balaji Padmavati Foundation</span> ("the Trust") ensures a sacred and respectful process for delivery of prasadam and other physical offerings made available through our online seva or donation platforms.
          </p>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">1. Shipping</h2>
          <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
            <li>Prasadam or physical offerings, if included with a seva or donation, will be shipped only within India.</li>
            <li>Dispatch is typically done within 3-5 working days from the date of booking or donation confirmation generally we try our best to ship it as soon as possible.</li>
            <li>We partner with reputed courier services to ensure timely and safe delivery. Tracking details will be shared via email or WhatsApp where applicable.</li>
            <li>Delays may occur during festivals or due to unforeseen logistical challenges. We appreciate your understanding and patience.</li>
          </ul>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">2. Exchange or Replacement</h2>
          <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
            <li>Since items like prasadam and spiritual offerings are perishable or consecrated, they are not eligible for return or exchange.</li>
            <li>In rare cases of damage in transit or delivery of an incorrect item, a replacement may be considered at the sole discretion of the Trust.</li>
            <li>To request a replacement, please contact <span className="font-semibold">support@tirupatibalajitemplecharkop.com</span> within 3 days of receipt, with a clear photo of the item and packaging.</li>
          </ul>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">3. Address Accuracy</h2>
          <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
            <li>Please ensure that the delivery address entered during the seva or donation process is accurate and complete.</li>
            <li>The Trust will not be responsible for delays or non-delivery due to incorrect or incomplete address details.</li>
          </ul>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">4. Contact</h2>
          <p className="text-deep-brown/70">For shipping or exchange-related queries, please contact:<br />
            <span className="font-semibold">Shree Balaji Padmavati Foundation</span><br />
            Email: support@tirupatibalajitemplecharkop.com<br />
            Mumbai, Maharashtra, India
          </p>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">5. Jurisdiction</h2>
          <p className="text-deep-brown/70">This policy is governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.</p>
        </CardContent>
      </Card>
    </div>
  );
}
