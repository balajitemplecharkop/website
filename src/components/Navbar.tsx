import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/annadanam", label: "Annadanam" },
  { path: "/seva", label: "Seva" },
  { path: "/development", label: "Development" },
  { path: "/guruji", label: "Guruji" },
  { path: "/gallery", label: "Gallery" },
  { path: "/mantra", label: "Mantra" },
  { path: "/calendar", label: "Calendar" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur border-b border-light-saffron/20 shadow-lg backdrop-blur-md bg-white/80 transition-spiritual" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-2">
          {/* Logo/Branding */}
          <Link href="/" aria-label="Go to Home">
            <div className="flex items-center gap-3 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-peacock-green rounded-lg">
              {/* Vertically center logo and text */}
              <div className="flex items-center">
                <img
                  src="/images/pngtree-balaji-tilak-png-image_6538668.webp"
                  alt="Balaji Mandir Logo"
                  className="w-12 h-12 rounded-full object-contain bg-white shadow-md border border-light-saffron"
                  style={{ background: '#fff' }}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center leading-tight h-10">
                <span className="text-xl md:text-l font-extrabold text-deep-brown tracking-tight leading-snug">Shree Balaji Padmavati Foundation</span>
                <span className="text-xs md:text-sm font-medium text-peacock-green tracking-wide leading-tight"></span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Clean text links, Annadanam button at right */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.filter(item => item.path !== '/annadanam').map((item) => (
              <Link key={item.path} href={item.path} aria-label={item.label}>
                <span
                  className={`transition-spiritual font-medium cursor-pointer px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-peacock-green ${
                    location === item.path
                      ? "text-deep-saffron underline underline-offset-4 decoration-2"
                      : "text-deep-brown hover:text-deep-saffron"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/annadanam" aria-label="Donate Annadanam">
              <Button className={`bg-deep-saffron hover:bg-deep-saffron/90 text-white font-bold rounded-full px-5 py-2 text-base shadow focus:outline-none focus:ring-2 focus:ring-peacock-green transition-spiritual ml-2${location === '/annadanam' ? ' ring-2 ring-deep-saffron' : ''}`}
                tabIndex={0}>
                🍚 Donate Annadanam
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-deep-brown" aria-label="Open Menu">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-spiritual-beige border-light-saffron/20 p-0">
                <div className="flex justify-end p-4">
                  <Button variant="ghost" size="icon" className="text-deep-brown" aria-label="Close Menu" onClick={() => setIsOpen(false)}>
                    <X className="h-7 w-7" />
                  </Button>
                </div>
                <div className="flex flex-col space-y-3 px-6 mt-2">
                  {navItems.filter(item => item.path !== '/annadanam').map((item) => (
                    <Link key={item.path} href={item.path} aria-label={item.label}>
                      <span
                        className={`block py-3 text-lg transition-spiritual font-medium cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-peacock-green px-2 ${
                          location === item.path
                            ? "text-deep-saffron bg-white/80"
                            : "text-deep-brown hover:text-deep-saffron"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <Link href="/annadanam" aria-label="Donate Annadanam">
                    <Button className={`bg-deep-saffron hover:bg-deep-saffron/90 text-white font-bold rounded-full px-5 py-2 text-base shadow focus:outline-none focus:ring-2 focus:ring-peacock-green transition-spiritual mt-2${location === '/annadanam' ? ' ring-2 ring-deep-saffron' : ''}`}
                      tabIndex={0} onClick={() => setIsOpen(false)}>
                      🍚 Donate Annadanam
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
