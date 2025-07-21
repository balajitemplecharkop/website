import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/annadanam", label: "Annadanam" },
    { path: "/seva", label: "Seva" },
    { path: "/development", label: "Development" },
    { path: "/terms", label: "Terms & Conditions" },
    { path: "/privacy", label: "Privacy Policy" },
    { path: "/refund", label: "Cancellation & Refund Policy" },
    { path: "/contact", label: "Contact Us" },
  ];

  const templeInfo = [
    { path: "/guruji", label: "Our Guruji" },
    { path: "/gallery", label: "Gallery" },
    { path: "/mantra", label: "Mantras" },
    { path: "/calendar", label: "Events" },
  ];

  return (
    <footer className="bg-deep-brown text-white relative overflow-hidden">
      {/* Optional: Subtle background gradient overlay for depth */}
      <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse at bottom right, #eab30822 0%, transparent 70%)"}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-white/70 hover:text-deep-saffron transition-spiritual cursor-pointer text-sm font-medium">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Temple Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-wide">Temple Info</h4>
            <ul className="space-y-2">
              {templeInfo.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-white/70 hover:text-deep-saffron transition-spiritual cursor-pointer text-sm font-medium">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-wide">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-deep-saffron mt-0.5 flex-shrink-0" />
                <div className="text-white/80">
                  3-289, Priyadarshini Vidyamandir Marg,<br />
                  opp. Priyadarshani School, Shivkrupa CHS,<br />
                  Sector 7, Kandivali West,<br />
                  Mumbai, Maharashtra 400067
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-deep-saffron flex-shrink-0" />
                <span className="text-white/80">9920716663</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-deep-saffron flex-shrink-0" />
                <span className="text-white/80">charkopbalaji1@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-deep-saffron mt-0.5 flex-shrink-0" />
                <div className="text-white/80">
                  Daily: 5:30 AM - 9:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2025 <span className="font-semibold text-white">Shree Balaji Padmavati Foundation</span>. All rights reserved.<br />
              Trust & Website Owner
            </div>
            <div className="flex items-center space-x-2 text-white/70 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-deep-saffron" />
              <span>by</span>
              <a 
                href="https://github.com/vedantchalke36" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-deep-saffron transition-spiritual font-medium"
              >
                Vedant Chalke
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-2 md:space-y-0 md:space-x-6 text-white/70 text-xs">
          </div>
        </div>
      </div>
    </footer>
  );
}