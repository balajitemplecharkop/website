import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Utensils, Hammer, Calendar, Heart, Camera, BookOpen, Users, Clock, ArrowRight, Star, MapPin, Phone } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { annadanamGoal } from "@/data/annadanamGoal";
import events from "@/data/temple-events.json";
import { useEffect, useState, lazy, Suspense } from "react";
import { Helmet } from 'react-helmet-async';

const GurujiSection = lazy(() => import("@/components/home/GurujiSection"));
const WaysToContributeSection = lazy(() => import("@/components/home/WaysToContributeSection"));
const WhyVisitUsSection = lazy(() => import("@/components/home/WhyVisitUsSection"));
const UpcomingEventsSection = lazy(() => import("@/components/home/UpcomingEventsSection"));
const ExploreTempleSection = lazy(() => import("@/components/home/ExploreTempleSection"));
const ContactSection = lazy(() => import("@/components/home/ContactSection"));

export default function Home() {
  const heroSlides = [
    {
      image: "/images/12.webp",
      title: "Welcome to Balaji Mandir",
      subtitle: "A sacred space dedicated to spiritual growth and divine blessings",
      badge: "Main Temple"
    },
    {
      image: "/images/13.webp",
      title: "Evening Aarti Ceremony",
      subtitle: "Join us for divine prayers and spiritual awakening every evening",
      badge: "Daily Rituals"
    },
    {
      image: "/images/Fidding-to-Kids.webp",
      title: "Community Service",
      subtitle: "Serving our community with love through Annadanam and seva",
      badge: "Seva & Service"
    },
    {
      image: "/images/Tirupati_Balaji_Temple_d486b6408b.webp",
      title: "Temple Development",
      subtitle: "Help us expand our sacred space to accommodate more devotees",
      badge: "Growth & Development"
    }
  ];

  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Balaji Mandir Charkop - Spiritual Haven</title>
        <meta name="description" content="Experience divine blessings at Balaji Mandir Charkop. Join us for daily Annadanam, temple seva, spiritual guidance, and community service. Serving devotees since 1998." />
        <meta property="og:title" content="Balaji Mandir Charkop - Spiritual Haven" />
        <meta property="og:description" content="Experience divine blessings at Balaji Mandir Charkop. Join us for daily Annadanam, temple seva, spiritual guidance, and community service. Serving devotees since 1998." />
        <meta property="og:image" content="https://tirupatibalajitemplecharkop.com/images/12.webp" />
        <meta property="og:site_name" content="Balaji Mandir Charkop" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirupatibalajitemplecharkop.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Balaji Mandir Charkop - Spiritual Haven" />
        <meta name="twitter:description" content="Experience divine blessings at Balaji Mandir Charkop. Join us for daily Annadanam, temple seva, spiritual guidance, and community service. Serving devotees since 1998." />
        <meta name="twitter:image" content="https://tirupatibalajitemplecharkop.com/images/12.webp" />
        <meta name="theme-color" content="#eab308" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tirupatibalajitemplecharkop.com/" />
        <link rel="icon" type="image/webp" href="/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <link
          rel="preload"
          as="image"
          href="/images/12.webp"
          imageSizes="100vw"
          type="image/webp"
        />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "HinduTemple",
            "name": "Balaji Mandir Charkop",
            "description": "Experience divine blessings at Balaji Mandir Charkop. Join us for daily Annadanam, temple seva, spiritual guidance, and community service. Serving devotees since 1998.",
            "image": "https://tirupatibalajitemplecharkop.com/images/12.webp",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Charkop, Kandivali West",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400067",
              "addressCountry": "IN"
            },
            "url": "https://tirupatibalajitemplecharkop.com/"
          }
        `}</script>
      </Helmet>
      <div className="pt-16">
        {/* Hero Carousel Section */}
        <section className="relative h-[80vh] lg:h-[90vh] overflow-hidden" aria-label="Main Temple Highlights">
          <Carousel
            className="w-full h-full"
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index} className="relative">
                  <div className="relative h-[80vh] lg:h-[90vh]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      width="960"
                      height="450"
                      {...(index !== 0 ? { loading: "lazy" } : {})}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-1000">
                        <Badge className="mb-4 bg-deep-saffron text-white shadow-lg">
                          <Camera className="mr-1 h-3 w-3" />
                          {slide.badge}
                        </Badge>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                          {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                          {slide.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm" />
          </Carousel>
        </section>

        {/* Action Buttons & Quick Stats Section */}
        <section className="py-16 bg-white" aria-label="Quick Actions and Stats">
          <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="space-y-2 sm:space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-deep-brown">Join Our Sacred Community</h2>
                <p className="text-lg text-deep-brown/80">Experience the divine blessings of Lord Balaji through our daily services, community programs, and spiritual activities.</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col w-full space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4">
                <Link href="/annadanam" className="w-full sm:w-auto">
                  <Button className="w-full bg-deep-saffron hover:bg-deep-saffron/90 text-white rounded-xl font-bold shadow-lg py-3 text-base flex items-center justify-center gap-2 transition-all">
                    <span role="img" aria-label="Donate">🍚</span> Donate for Annadanam
                  </Button>
                </Link>
                <Link href="/seva" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full border-2 border-peacock-green text-peacock-green rounded-xl font-bold shadow-lg py-3 text-base flex items-center justify-center gap-2 hover:bg-peacock-green hover:text-white transition-all">
                    <span role="img" aria-label="Heart">💚</span> Book Temple Seva
                  </Button>
                </Link>
                <Link href="/calendar" className="w-full sm:w-auto">
                  <Button variant="ghost" className="w-full border border-light-saffron bg-white text-deep-brown rounded-xl font-bold shadow-lg py-3 text-base flex items-center justify-center gap-2 hover:bg-light-saffron/60 transition-all">
                    <span role="img" aria-label="Calendar">📅</span> View Events
                  </Button>
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="w-full pt-4">
                <div className="hidden md:flex w-full justify-center max-w-4xl mx-auto gap-20 pt-12 pb-12">
                  <div className="flex flex-col items-center w-1/4">
                    <div className="w-10 h-10 rounded-full bg-light-saffron flex items-center justify-center mb-4">
                      <Clock className="text-deep-saffron w-6 h-6" />
                    </div>
                    <span className="text-4xl font-extrabold text-deep-saffron mb-2 block">17+</span>
                    <span className="text-base text-deep-brown/70 uppercase tracking-wider text-center block">Years of Service</span>
                  </div>
                  <div className="flex flex-col items-center w-1/4">
                    <div className="w-10 h-10 rounded-full bg-light-saffron flex items-center justify-center mb-4">
                      <Users className="text-deep-saffron w-6 h-6" />
                    </div>
                    <span className="text-4xl font-extrabold text-deep-saffron mb-2 block">250,000+</span>
                    <span className="text-base text-deep-brown/70 uppercase tracking-wider text-center block">Devotees</span>
                  </div>
                  <div className="flex flex-col items-center w-1/4">
                    <div className="w-10 h-10 rounded-full bg-light-saffron flex items-center justify-center mb-4">
                      <Utensils className="text-deep-saffron w-6 h-6" />
                    </div>
                    <span className="text-4xl font-extrabold text-deep-saffron mb-2 block">{annadanamGoal.currentMeals.toLocaleString()}+</span>
                    <span className="text-base text-deep-brown/70 uppercase tracking-wider text-center block">Daily Meals</span>
                  </div>
                  <div className="flex flex-col items-center w-1/4">
                    <div className="w-10 h-10 rounded-full bg-light-saffron flex items-center justify-center mb-4">
                      <Heart className="text-deep-saffron w-6 h-6" />
                    </div>
                    <span className="text-4xl font-extrabold text-deep-saffron mb-2 block">36+</span>
                    <span className="text-base text-deep-brown/70 uppercase tracking-wider text-center block">Seva Options</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:hidden">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-light-saffron flex items-center justify-center mb-1">
                      <Clock className="text-deep-saffron w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold text-deep-saffron">17+</span>
                    <span className="text-xs text-deep-brown/70 uppercase tracking-wider mt-1 text-center">Years of Service</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-light-saffron flex items-center justify-center mb-1">
                      <Users className="text-deep-saffron w-6 h-6" />
                </div>
                    <span className="text-2xl font-extrabold text-deep-saffron">250,000+</span>
                    <span className="text-xs text-deep-brown/70 uppercase tracking-wider mt-1 text-center">Devotees</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-light-saffron flex items-center justify-center mb-1">
                      <Utensils className="text-deep-saffron w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold text-deep-saffron">{annadanamGoal.currentMeals.toLocaleString()}+</span>
                    <span className="text-xs text-deep-brown/70 uppercase tracking-wider mt-1 text-center">Daily Meals</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-light-saffron flex items-center justify-center mb-1">
                      <Heart className="text-deep-saffron w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold text-deep-saffron">36+</span>
                    <span className="text-xs text-deep-brown/70 uppercase tracking-wider mt-1 text-center">Seva Options</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar Section */}
              <div className="w-full space-y-2 pt-4">
                <div className="text-sm font-semibold text-deep-brown">Goal: Feed 25,000 Children</div>
                <div className="text-xs font-bold text-green-700 mb-1">{Math.round((annadanamGoal.currentMeals / annadanamGoal.goalMeals) * 100)}% of goal</div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-green-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(annadanamGoal.currentMeals / annadanamGoal.goalMeals) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<div>Loading...</div>}>
          <GurujiSection />
          <WaysToContributeSection />
          <WhyVisitUsSection />
          <UpcomingEventsSection events={events} />
          <ExploreTempleSection />
          <ContactSection />
        </Suspense>

        {/* Back to Top Button */}
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 bg-deep-saffron text-white p-3 rounded-full shadow-lg hover:bg-deep-saffron/90 focus:outline-none focus:ring-2 focus:ring-peacock-green transition-all animate-in fade-in"
            aria-label="Back to Top"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 19V5m0 0l-6 6m6-6l6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        )}
      </div>
    </>
  );
}
