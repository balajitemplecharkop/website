import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <div className="pt-24 min-h-screen bg-white flex items-center justify-center">
      <Helmet>
        <title>Privacy Policy - Balaji Mandir Charkop</title>
        <meta name="description" content="Read the privacy policy for Balaji Mandir Charkop. Learn how we protect your data and privacy." />
        <meta property="og:title" content="Privacy Policy - Balaji Mandir Charkop" />
        <meta property="og:description" content="Read the privacy policy for Balaji Mandir Charkop. Learn how we protect your data and privacy." />
        <meta property="og:image" content="https://tirupatibalajitemplecharkop.com/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <meta property="og:site_name" content="Balaji Mandir Charkop" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirupatibalajitemplecharkop.com/privacy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Balaji Mandir Charkop" />
        <meta name="twitter:description" content="Read the privacy policy for Balaji Mandir Charkop. Learn how we protect your data and privacy." />
        <meta name="twitter:image" content="https://tirupatibalajitemplecharkop.com/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <meta name="theme-color" content="#eab308" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tirupatibalajitemplechokop.com/privacy" />
        <link rel="icon" type="image/webp" href="/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/pngtree-balaji-tilak-png-image_6538668.webp" />
      </Helmet>
      <Card className="max-w-2xl w-full mx-4">
        <CardContent className="py-8 px-6 space-y-4">
          <h1 className="text-3xl font-bold text-deep-brown mb-4">Privacy Policy</h1>
          <p className="text-deep-brown/80 mb-2">
            <span className="font-semibold">Shree Balaji Padmavati Foundation</span> ("the Trust") is committed to protecting your privacy and personal information in accordance with Indian law, including the Information Technology Act, 2000 and applicable rules.
          </p>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">1. Information We Collect</h2>
          <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
            <li>Personal information such as name, address, email, phone number, PAN, and payment details when you make a donation or contact us.</li>
            <li>Technical information such as IP address, browser type, and usage data collected via cookies and analytics tools.</li>
          </ul>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
            <li>To process donations and issue receipts/tax certificates (including under Section 80G of the Income Tax Act, 1961).</li>
            <li>To communicate updates, respond to queries, and provide information about our activities.</li>
            <li>To comply with legal obligations and regulatory requirements.</li>
            <li>To improve our website and services.</li>
          </ul>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">3. Data Security</h2>
          <p className="text-deep-brown/70">We implement reasonable security measures to protect your data. Online transactions are encrypted using SSL. However, no method of transmission over the Internet is 100% secure.</p>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">4. Sharing of Information</h2>
          <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
            <li>We do not sell or rent your personal information to third parties.</li>
            <li>We may share information with service providers (e.g., payment gateways) and government authorities as required by law.</li>
            <li>We may disclose information to comply with legal process or protect the rights, property, or safety of the Trust, its beneficiaries, or the public.</li>
          </ul>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">5. Cookies</h2>
          <p className="text-deep-brown/70">Our website uses cookies to enhance your browsing experience. You may disable cookies in your browser settings, but some features may not function properly.</p>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">5. Payment Processing</h2>
          <p className="text-deep-brown/70">All online payments on this website are processed securely via Razorpay, a third-party payment gateway. Information shared with Razorpay is subject to their privacy policy in addition to ours.</p>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">6. Your Rights</h2>
          <ul className="list-disc ml-6 text-deep-brown/70 space-y-1">
            <li>You may request access to, correction, or deletion of your personal information by contacting us at info@balajimandir.org.</li>
            <li>You may opt out of marketing communications at any time.</li>
          </ul>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">7. Grievance Officer</h2>
          <p className="text-deep-brown/70">In accordance with the Information Technology Act, 2000 and rules made thereunder, the name and contact details of the Grievance Officer are:<br />
            <span className="font-semibold">Grievance Officer</span><br />
            Shree Balaji Padmavati Foundation<br />
            Email: info@balajimandir.org<br />
            Mumbai, Maharashtra, India
          </p>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">8. Changes to this Policy</h2>
          <p className="text-deep-brown/70">We may update this Privacy Policy from time to time. Please review this page periodically for changes.</p>

          <h2 className="text-xl font-semibold text-deep-brown mt-6 mb-2">9. Jurisdiction</h2>
          <p className="text-deep-brown/70">This policy is governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.</p>

          <p className="text-deep-brown/60 text-xs mt-6">For any privacy-related queries, please contact us at info@balajimandir.org.</p>
        </CardContent>
      </Card>
    </div>
  );
} 