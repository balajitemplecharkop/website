import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Utensils, Hammer, Calendar, Heart, Camera, BookOpen, Users, Clock, ArrowRight, Star, MapPin, Phone } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { annadanamGoal } from "@/data/annadanamGoal";
import events from "@/data/temple-events.json";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';

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

  type EventType = {
    id: string;
    title: string;
    date: string;
    description: string;
    time?: string;
    location?: string;
    color?: string;
    image?: string;
  };

  // Helper to get the start date as a Date object
  function getEventStartDate(event: EventType) {
    // Handles "YYYY-MM-DD" or "YYYY-MM-DD to YYYY-MM-DD"
    const [start] = event.date.split(" to ");
    return new Date(start);
  }

  // Helper to get the end date as a Date object
  function getEventEndDate(event: EventType) {
    const parts = event.date.split(" to ");
    return new Date(parts[parts.length - 1]);
  }

  const today = new Date();
  const upcomingEvents = (events as EventType[])
    .filter(event => getEventEndDate(event) >= today)
    .sort((a, b) => getEventStartDate(a).getTime() - getEventStartDate(b).getTime())
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Balaji Mandir Charkop - Spiritual Haven</title>
        <meta name="description" content="Experience divine blessings at Balaji Mandir Charkop. Join us for daily Annadanam, temple seva, spiritual guidance, and community service. Serving devotees since 1998." />
        <meta property="og:title" content="Balaji Mandir Charkop - Spiritual Haven" />
        <meta property="og:description" content="Experience divine blessings at Balaji Mandir Charkop. Join us for daily Annadanam, temple seva, spiritual guidance, and community service. Serving devotees since 1998." />
        <meta property="og:image" content="https://tirupatibalajitemplecharkop.com/wp-content/uploads/2025/01/12.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirupatibalajitemplecharkop.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Balaji Mandir Charkop - Spiritual Haven" />
        <meta name="twitter:description" content="Experience divine blessings at Balaji Mandir Charkop. Join us for daily Annadanam, temple seva, spiritual guidance, and community service. Serving devotees since 1998." />
        <meta name="twitter:image" content="https://tirupatibalajitemplecharkop.com/wp-content/uploads/2025/01/12.webp" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "HinduTemple",
            "name": "Balaji Mandir Charkop",
            "description": "Experience divine blessings at Balaji Mandir Charkop. Join us for daily Annadanam, temple seva, spiritual guidance, and community service. Serving devotees since 1998.",
            "image": "https://tirupatibalajitemplecharkop.com/wp-content/uploads/2025/01/12.webp",
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
                      width="1920"
                      height="900"
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

        {/* Scroll Down Indicator */}
        
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

        {/* Guruji Section */}
        <section className="py-12 bg-spiritual-beige" aria-label="About Guruji">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 flex justify-center">
              <img
                src="/images/Bhajan-Yajamaan.webp"
                alt="Guruji - Spiritual Guru"
                className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-spiritual object-cover"
                loading="lazy"
                width="400"
                height="600"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">Our Guruji</h2>
              <p className="text-lg text-deep-brown/80 mb-4">
                From a near-death experience to a divine calling, Guruji’s journey is a testament to faith, resilience, and service. Surviving a life-threatening accident, guided by a mysterious monk, and overcoming impossible odds, Guruji built the Balaji Temple in Charkop and dedicated his life to feeding the needy and serving the community.
              </p>
              <div>
                <a href="/guruji">
                  <button className="bg-deep-saffron hover:bg-deep-saffron/90 text-white px-6 py-3 rounded font-semibold shadow-spiritual transition-spiritual">
                    Read Complete Story
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Contribute Section */}
        <section className="py-16 bg-white" aria-label="Ways to Contribute">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-deep-brown mb-4">Ways to Contribute</h2>
              <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
                Join us in our mission to serve the community and spread spiritual wisdom through various forms of seva.
              </p>
            </div>

            {/* Ways to Contribute Cards */}
            <div className="hidden md:flex w-full justify-center gap-12 pt-8">
              {/* Annadanam */}
              <Card className="max-w-xs flex flex-col items-center text-center p-6 rounded-2xl border border-light-saffron shadow-md">
                <div className="w-12 h-12 rounded-full bg-deep-saffron flex items-center justify-center mb-4">
                  <Utensils className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-deep-brown mb-2">Annadanam</h3>
                <p className="text-deep-brown/80 mb-4">Support our daily food distribution program serving 500+ meals.</p>
                <Button className="w-full bg-deep-saffron hover:bg-deep-saffron/90 text-white rounded-lg font-semibold py-3 shadow transition-all">
                  Contribute Now
                </Button>
              </Card>
              {/* Temple Seva */}
              <Card className="max-w-xs flex flex-col items-center text-center p-6 rounded-2xl border border-light-saffron shadow-md">
                <div className="w-12 h-12 rounded-full bg-peacock-green flex items-center justify-center mb-4">
                  <Heart className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-deep-brown mb-2">Temple Seva</h3>
                <p className="text-deep-brown/80 mb-4">Participate in sacred rituals and poojas for divine blessings.</p>
                <Button className="w-full bg-peacock-green hover:bg-peacock-green/90 text-white rounded-lg font-semibold py-3 shadow transition-all">
                  Book Seva
                </Button>
              </Card>
              {/* Development */}
              <Card className="max-w-xs flex flex-col items-center text-center p-6 rounded-2xl border border-light-saffron shadow-md">
                <div className="w-12 h-12 rounded-full bg-light-saffron flex items-center justify-center mb-4">
                  <Hammer className="text-deep-saffron w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-deep-brown mb-2">Development</h3>
                <p className="text-deep-brown/80 mb-4">Help expand and beautify our sacred temple infrastructure.</p>
                <Button variant="outline" className="w-full border-deep-saffron text-deep-saffron rounded-lg font-semibold py-3 shadow transition-all hover:bg-deep-saffron hover:text-white">
                  Support Project
                </Button>
              </Card>
              {/* Join Our Family */}
              <Card className="max-w-xs flex flex-col items-center text-center p-6 rounded-2xl border border-light-saffron shadow-md">
                <div className="w-12 h-12 rounded-full bg-deep-saffron/20 flex items-center justify-center mb-4">
                  <Users className="text-deep-saffron w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-deep-brown mb-2">Join Our Family</h3>
                <p className="text-deep-brown/80 mb-4">Become a volunteer or join us with your unique skills to help serve the community and the divine mission.</p>
                <Button className="w-full bg-deep-saffron hover:bg-deep-saffron/90 text-white rounded-lg font-semibold py-3 shadow transition-all">
                  Join as Family
                </Button>
              </Card>
            </div>
            {/* Ways to Contribute Cards - Mobile */}
            <div className="flex flex-col space-y-6 md:hidden">
              {/* Annadanam Card */}
              <Card className="max-w-sm mx-auto p-6 rounded-2xl border border-light-saffron shadow-md flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-deep-saffron flex items-center justify-center mb-4">
                  <Utensils className="text-white w-6 h-6" />
                    </div>
                <h3 className="text-xl font-bold text-deep-brown mb-2">Annadanam</h3>
                <p className="text-deep-brown/80 mb-4">Support our daily food distribution program serving 500+ meals.</p>
                <Button className="w-full bg-deep-saffron hover:bg-deep-saffron/90 text-white rounded-lg font-semibold py-3 shadow transition-all">
                      Contribute Now
                    </Button>
                </Card>
              {/* Temple Seva Card */}
              <Card className="max-w-sm mx-auto p-6 rounded-2xl border border-light-saffron shadow-md flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-peacock-green flex items-center justify-center mb-4">
                  <Heart className="text-white w-6 h-6" />
                    </div>
                <h3 className="text-xl font-bold text-deep-brown mb-2">Temple Seva</h3>
                <p className="text-deep-brown/80 mb-4">Participate in sacred rituals and poojas for divine blessings.</p>
                <Button className="w-full bg-peacock-green hover:bg-peacock-green/90 text-white rounded-lg font-semibold py-3 shadow transition-all">
                      Book Seva
                    </Button>
                </Card>
              {/* Development Card */}
              <Card className="max-w-sm mx-auto p-6 rounded-2xl border border-light-saffron shadow-md flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-light-saffron border-2 border-deep-saffron flex items-center justify-center mb-4">
                  <Hammer className="text-deep-saffron w-6 h-6" />
                    </div>
                <h3 className="text-xl font-bold text-deep-brown mb-2">Development</h3>
                <p className="text-deep-brown/80 mb-4">Help expand and beautify our sacred temple infrastructure.</p>
                <Button variant="outline" className="w-full border-deep-saffron text-deep-saffron rounded-lg font-semibold py-3 shadow transition-all hover:bg-deep-saffron hover:text-white">
                      Support Project
                    </Button>
                </Card>
              {/* Join Our Family Card */}
              <Card className="max-w-sm mx-auto p-6 rounded-2xl border border-light-saffron shadow-md flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-deep-saffron/20 border-2 border-deep-saffron flex items-center justify-center mb-4">
                  <Users className="text-deep-saffron w-6 h-6" />
                    </div>
                <h3 className="text-xl font-bold text-deep-brown mb-2">Join Our Family</h3>
                <p className="text-deep-brown/80 mb-4">Become a volunteer or join us with your unique skills to help serve the community and the divine mission.</p>
                <Button className="w-full bg-deep-saffron hover:bg-deep-saffron/90 text-white rounded-lg font-semibold py-3 shadow transition-all">
                      Join as Family
                    </Button>
                </Card>
            </div>
          </div>
        </section>

        {/* Why Visit Us Section */}
        <section className="py-12 bg-cream" aria-label="Why Visit Us">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-3">Why Visit Us?</h2>
              <p className="text-lg text-deep-brown/80 max-w-2xl mx-auto">Experience more than just a temple—discover a vibrant community, spiritual growth, and acts of compassion that make every visit memorable.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 hidden md:grid">
              <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center group hover:shadow-spiritual-hover transition-spiritual">
                <Star className="text-deep-saffron text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg text-deep-brown mb-2">Spiritual Sanctuary</h3>
                <p className="text-deep-brown/70 text-sm">Find peace, purpose, and blessings in a serene, sacred environment.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center group hover:shadow-spiritual-hover transition-spiritual">
                <Utensils className="text-peacock-green text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg text-deep-brown mb-2">Community Service</h3>
                <p className="text-deep-brown/70 text-sm">Join hands in Annadanam and seva, making a real difference in lives every day.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center group hover:shadow-spiritual-hover transition-spiritual">
                <Calendar className="text-deep-saffron text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg text-deep-brown mb-2">Festivals & Events</h3>
                <p className="text-deep-brown/70 text-sm">Celebrate vibrant festivals, rituals, and cultural events with us.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center group hover:shadow-spiritual-hover transition-spiritual">
                <Users className="text-peacock-green text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg text-deep-brown mb-2">Welcoming Community</h3>
                <p className="text-deep-brown/70 text-sm">Be part of a warm, inclusive family—volunteer, learn, and grow together.</p>
              </div>
            </div>
            {/* Mobile Why Visit Us - vertical stack */}
            <div className="flex flex-col space-y-6 md:hidden">
              <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center">
                <Star className="text-deep-saffron text-4xl mb-4" />
                <h3 className="font-semibold text-lg text-deep-brown mb-2">Spiritual Sanctuary</h3>
                <p className="text-deep-brown/70 text-base">Find peace, purpose, and blessings in a serene, sacred environment.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center">
                <Utensils className="text-peacock-green text-4xl mb-4" />
                <h3 className="font-semibold text-lg text-deep-brown mb-2">Community Service</h3>
                <p className="text-deep-brown/70 text-base">Join hands in Annadanam and seva, making a real difference in lives every day.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center">
                <Calendar className="text-deep-saffron text-4xl mb-4" />
                <h3 className="font-semibold text-lg text-deep-brown mb-2">Festivals & Events</h3>
                <p className="text-deep-brown/70 text-base">Celebrate vibrant festivals, rituals, and cultural events with us.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center">
                <Users className="text-peacock-green text-4xl mb-4" />
                <h3 className="font-semibold text-lg text-deep-brown mb-2">Welcoming Community</h3>
                <p className="text-deep-brown/70 text-base">Be part of a warm, inclusive family—volunteer, learn, and grow together.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-12 bg-white" aria-label="Upcoming Events">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-deep-brown mb-8 text-center">Upcoming Events</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
              {upcomingEvents.map(event => (
                <div key={event.id} className="bg-cream rounded-xl shadow-spiritual p-6 flex flex-col gap-3 flex-1 min-w-0">
                  <div>
                    <div className="text-peacock-green font-semibold text-base mb-1">{event.date}</div>
                    <div className="text-xl font-bold text-deep-brown mb-1">{event.title}</div>
                  </div>
                  <div className="text-deep-brown/70 text-base mb-2">{event.description}</div>
                  {event.time && <div className="text-xs text-peacock-green mt-auto">{event.time}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Our Temple Section */}
        <section className="py-16 bg-spiritual-beige" aria-label="Explore Our Temple">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-deep-brown mb-4">Explore Our Temple</h2>
              <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
                Discover the spiritual richness and community programs that make our temple a cornerstone of devotion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 hidden md:grid">
              <Link href="/guruji">
                <Card className="cursor-pointer shadow-spiritual hover:shadow-spiritual-hover transition-spiritual group bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-cream rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-spiritual">
                      <Users className="text-deep-saffron text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-deep-brown mb-2">Our Guruji</h3>
                    <p className="text-deep-brown/70 text-sm mb-4">Learn about our spiritual leader and temple history</p>
                    <div className="flex items-center justify-center text-deep-saffron text-sm">
                      <span>Meet Guruji</span>
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/mantra">
                <Card className="cursor-pointer shadow-spiritual hover:shadow-spiritual-hover transition-spiritual group bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-light-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-spiritual">
                      <BookOpen className="text-peacock-green text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-deep-brown mb-2">Daily Mantras</h3>
                    <p className="text-deep-brown/70 text-sm mb-4">Sacred chants for spiritual awakening and peace</p>
                    <div className="flex items-center justify-center text-peacock-green text-sm">
                      <span>Chant Now</span>
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/calendar">
                <Card className="cursor-pointer shadow-spiritual hover:shadow-spiritual-hover transition-spiritual group bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-light-saffron rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-spiritual">
                      <Calendar className="text-deep-saffron text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-deep-brown mb-2">Events</h3>
                    <p className="text-deep-brown/70 text-sm mb-4">Festivals, celebrations, and special ceremonies</p>
                    <div className="flex items-center justify-center text-deep-saffron text-sm">
                      <span>View Calendar</span>
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/gallery">
                <Card className="cursor-pointer shadow-spiritual hover:shadow-spiritual-hover transition-spiritual group bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-cream rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-spiritual border-2 border-peacock-green">
                      <Camera className="text-peacock-green text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-deep-brown mb-2">Gallery</h3>
                    <p className="text-deep-brown/70 text-sm mb-4">Sacred moments captured during festivals and rituals</p>
                    <div className="flex items-center justify-center text-peacock-green text-sm">
                      <span>View Photos</span>
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
            {/* Mobile Explore Our Temple - vertical stack */}
            <div className="flex flex-col space-y-6 md:hidden">
              <Link href="/guruji">
                <Card className="cursor-pointer shadow-spiritual active:shadow-spiritual-hover transition-spiritual bg-white">
                  <CardContent className="p-7 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-4">
                      <Users className="text-deep-saffron text-2xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-deep-brown mb-2">Our Guruji</h3>
                    <p className="text-deep-brown/70 text-base mb-4">Learn about our spiritual leader and temple history</p>
                    <div className="flex items-center justify-center text-deep-saffron text-base font-medium">
                      <span>Meet Guruji</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/mantra">
                <Card className="cursor-pointer shadow-spiritual active:shadow-spiritual-hover transition-spiritual bg-white">
                  <CardContent className="p-7 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-light-green rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="text-peacock-green text-2xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-deep-brown mb-2">Daily Mantras</h3>
                    <p className="text-deep-brown/70 text-base mb-4">Sacred chants for spiritual awakening and peace</p>
                    <div className="flex items-center justify-center text-peacock-green text-base font-medium">
                      <span>Chant Now</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/calendar">
                <Card className="cursor-pointer shadow-spiritual active:shadow-spiritual-hover transition-spiritual bg-white">
                  <CardContent className="p-7 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-light-saffron rounded-full flex items-center justify-center mb-4">
                      <Calendar className="text-deep-saffron text-2xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-deep-brown mb-2">Events</h3>
                    <p className="text-deep-brown/70 text-base mb-4">Festivals, celebrations, and special ceremonies</p>
                    <div className="flex items-center justify-center text-deep-saffron text-base font-medium">
                      <span>View Calendar</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/gallery">
                <Card className="cursor-pointer shadow-spiritual active:shadow-spiritual-hover transition-spiritual bg-white">
                  <CardContent className="p-7 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-4 border-2 border-peacock-green">
                      <Camera className="text-peacock-green text-2xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-deep-brown mb-2">Gallery</h3>
                    <p className="text-deep-brown/70 text-base mb-4">Sacred moments captured during festivals and rituals</p>
                    <div className="flex items-center justify-center text-peacock-green text-base font-medium">
                      <span>View Photos</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
