import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden" aria-label="Contact Us">
      {/* Decorative SVG Wave Background */}
      <div className="absolute top-0 left-0 w-full -z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
          <path fill="#E6F4EA" d="M0,80 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Contact Info Card */}
          <Card className="flex-1 shadow-spiritual bg-white rounded-3xl flex flex-col justify-between relative overflow-hidden mb-8 lg:mb-0 h-full">
            <CardContent className="p-6 sm:p-8 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-peacock-green rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="text-white text-2xl sm:text-3xl" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-deep-brown">Contact Us</h3>
              </div>
              <div className="mb-4">
                <p className="text-deep-brown/90 text-base sm:text-lg leading-relaxed">
                  <span className="font-bold">Shree Balaji Padmavati Foundation</span><br />
                  3-289, Priyadarshini Vidyamandir Marg,<br />
                  opp. Priyadarshani School, Shivkrupa CHS,<br />
                  Sector 7, Kandivali West,<br />
                  Mumbai, Maharashtra 400067
                </p>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="text-peacock-green" />
                <span className="font-semibold text-deep-brown">Phone:</span>
                <a href="tel:9920716663" className="text-peacock-green font-bold hover:underline">9920716663</a>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-deep-brown mb-2">Temple Timings</h4>
                <table className="w-full text-base text-deep-brown/90">
                  <tbody>
                    <tr><td className="font-medium">Saturday</td><td className="pl-4">7 am–9 pm</td></tr>
                    <tr><td className="font-medium">Sunday</td><td className="pl-4">6 am–10 pm</td></tr>
                    <tr><td className="font-medium">Monday</td><td className="pl-4">7 am–9 pm</td></tr>
                    <tr><td className="font-medium">Tuesday</td><td className="pl-4">7 am–9 pm</td></tr>
                    <tr><td className="font-medium">Wednesday</td><td className="pl-4">7 am–9 pm</td></tr>
                    <tr><td className="font-medium">Thursday</td><td className="pl-4">7 am–9 pm</td></tr>
                    <tr><td className="font-medium">Friday</td><td className="pl-4">7 am–9 pm</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <Button className="bg-deep-saffron hover:bg-deep-saffron/90 text-white flex-1 px-6 py-3" asChild>
                  <a href="https://maps.app.goo.gl/LbLVkhpMhC4oAaRd9" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-peacock-green text-peacock-green hover:bg-peacock-green hover:text-white flex-1 px-6 py-3"
                  asChild
                >
                  <a href="tel:9920716663">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
              {/* Friendly message */}
              <div className="mt-8 text-center text-peacock-green/80 text-lg font-medium flex items-center justify-center gap-2">

              </div>
            </CardContent>
          </Card>
          {/* Map Card */}
          <div className="flex-1 flex items-stretch justify-center relative">
            <Card className="w-full shadow-spiritual bg-light-green rounded-3xl overflow-hidden relative flex flex-col h-full justify-center">
              <CardContent className="p-0 w-full h-full flex-1 flex flex-col justify-center">
                {/* Map Badge - responsive position */}
                <div className="bg-peacock-green text-white px-4 py-1 rounded-full shadow text-sm font-semibold absolute top-4 left-4 z-10">
                  Find Us Here
                </div>
                <div className="w-full h-[220px] xs:h-[260px] sm:h-[320px] md:h-full md:min-h-[320px] rounded-3xl overflow-hidden flex items-center justify-center p-2 md:rounded-none md:p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19484.32628345523!2d72.83089!3d19.223041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b134352dddb7%3A0xb2b600c33698fb2f!2sShree%20Balaji%20Mandir!5e1!3m2!1sen!2sin!4v1752331114486!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '200px', borderRadius: '1.5rem', width: '100%' }}
                    className="md:rounded-none"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shree Balaji Mandir Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
