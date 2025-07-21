import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from 'react-helmet-async';
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Here you would send the form data to your backend or email service
    setSubmitted(true);
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Balaji Mandir Charkop</title>
        <meta name="description" content="Contact Shree Balaji Padmavati Foundation for inquiries, feedback, or support. We're here to help!" />
        <meta property="og:title" content="Contact Us - Balaji Mandir Charkop" />
        <meta property="og:description" content="Contact Shree Balaji Padmavati Foundation for inquiries, feedback, or support. We're here to help!" />
        <meta property="og:image" content="https://tirupatibalajitemplecharkop.com/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <meta property="og:site_name" content="Balaji Mandir Charkop" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirupatibalajitemplecharkop.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Balaji Mandir Charkop" />
        <meta name="twitter:description" content="Contact Shree Balaji Padmavati Foundation for inquiries, feedback, or support. We're here to help!" />
        <meta name="twitter:image" content="https://tirupatibalajitemplecharkop.com/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <meta name="theme-color" content="#eab308" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tirupatibalajitemplecharkop.com/contact" />
        <link rel="icon" type="image/webp" href="/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/pngtree-balaji-tilak-png-image_6538668.webp" />
      </Helmet>
      <div className="pt-24 min-h-screen bg-white flex items-center justify-center">
        <Card className="max-w-2xl w-full mx-4">
          <CardContent className="py-8 px-6 space-y-6">
            <h1 className="text-3xl font-bold text-deep-brown mb-4">Contact Us</h1>
            <p className="text-deep-brown/80 mb-4">Have a question, feedback, or want to get in touch? Use the contact details below to reach us.</p>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-deep-saffron mt-0.5 flex-shrink-0" />
                <div className="text-deep-brown/80">
                  3-289, Priyadarshini Vidyamandir Marg,<br />
                  opp. Priyadarshani School, Shivkrupa CHS,<br />
                  Sector 7, Kandivali West,<br />
                  Mumbai, Maharashtra 400067
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-deep-saffron flex-shrink-0" />
                <span className="text-deep-brown/80">9920716663</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-deep-saffron flex-shrink-0" />
                <span className="text-deep-brown/80">charkopbalaji1@gmail.com</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
} 