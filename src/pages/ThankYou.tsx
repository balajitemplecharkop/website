import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-spiritual-beige px-4 relative overflow-hidden">
      <Helmet>
        <title>Thank You for Your Donation | Balaji Mandir Charkop</title>
        <meta
          name="description"
          content="Thank you for your generous donation. You will receive your 80G Certificate on WhatsApp and email soon."
        />
      </Helmet>
      <div className="bg-white rounded-2xl shadow-spiritual p-8 max-w-md w-full flex flex-col items-center text-center z-10 relative">
        <CheckCircle className="text-peacock-green w-20 h-20 mb-4 drop-shadow-lg" />
        <h1 className="text-3xl font-extrabold text-deep-brown mb-2">
          Thank You for Your Donation!
        </h1>
        <h2 className="text-lg font-semibold text-peacock-green mb-4">
          Your support means the world to us.
        </h2>
        <p className="text-base text-deep-brown/80 mb-6">
          Your generous support helps us continue our mission of service and devotion.
          <br />
          <span className="font-semibold text-peacock-green block mt-2">
            You will receive your <span className="bold">80G Certificate/Receipt</span> on{" "}
            <span className="font-bold">WhatsApp</span> and <span className="font-bold">Email</span> soon.
          </span>
        </p>
        <Link href="/">
          <Button className="bg-peacock-green text-white px-8 py-3 rounded-xl font-semibold shadow-spiritual hover:bg-peacock-green/90 transition">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}