import { useState } from "react";
import annadanamFaqDataRaw from "@/data/annadanam-faq.json";
const annadanamFaqData: { question: string; answer: string }[] = annadanamFaqDataRaw as any[];
import { annadanamGoal } from "@/data/annadanamGoal";
import sevaTestimonials from "@/data/seva-testimonials.json";
import { Helmet } from 'react-helmet-async';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import FaqAccordion from "@/components/FaqAccordion";

export default function Annadanam() {
  const [openFaqIndexes, setOpenFaqIndexes] = useState<{ [key: number]: boolean }>({});
  // Placeholder images for the carousel
  const galleryImages = [
    {
      src: "/images/balabhojnam.webp",
      alt: "Annadanam food distribution at Balaji Mandir Charkop - main gallery image"
    },
    {
      src: "/images/prasadam.webp",
      alt: "Temple volunteers preparing Annadanam meals"
    },
    {
      src: "/images/specialannadanam.webp",
      alt: "Devotees enjoying Annadanam at Balaji Mandir Charkop"
    }
  ];
  const seoDescription = `Annadanam at Balaji Mandir Charkop is a daily sacred food donation program, serving fresh, sattvic meals to hundreds of devotees and the needy. By supporting Annadanam, you participate in a time-honored tradition that brings immense spiritual merit, community goodwill, and the blessings of Lord Balaji. Our transparent process, instant 80G certificate, and open kitchen policy ensure your contribution makes a real impact. Sponsor Annadanam for birthdays, anniversaries, or in memory of loved ones, and be part of a movement that feeds both body and soul in Mumbai.`;
  // Annadanam-specific testimonials
  const annadanamTestimonials = (sevaTestimonials as any[]).filter(t => t.sevaId === "annadanam");
  return (
    <>
      <Helmet>
        <title>Annadanam - Balaji Mandir Charkop</title>
        <meta name="description" content="Support Annadanam at Balaji Mandir Charkop. Help us serve daily meals to the needy and participate in this sacred seva." />
        <meta property="og:title" content="Annadanam - Balaji Mandir Charkop" />
        <meta property="og:description" content="Support Annadanam at Balaji Mandir Charkop. Help us serve daily meals to the needy and participate in this sacred seva." />
        <meta property="og:image" content="https://tirupatibalajitemplecharkop.com/images/12.webp" />
        <meta property="og:site_name" content="Balaji Mandir Charkop" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirupatibalajitemplecharkop.com/annadanam" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Annadanam - Balaji Mandir Charkop" />
        <meta name="twitter:description" content="Support Annadanam at Balaji Mandir Charkop. Help us serve daily meals to the needy and participate in this sacred seva." />
        <meta name="twitter:image" content="https://tirupatibalajitemplecharkop.com/images/12.webp" />
        <meta name="theme-color" content="#eab308" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tirupatibalajitemplecharkop.com/annadanam" />
        <link rel="icon" type="image/webp" href="/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "HinduTemple",
              "@id": "https://tirupatibalajitemplecharkop.com/#temple",
              "name": "Balaji Mandir Charkop",
              "alternateName": "Shree Balaji Padmavati Foundation",
              "description": "Annadanam at Balaji Mandir Charkop is a daily sacred food donation program, serving fresh, sattvic meals to hundreds of devotees and the needy.",
              "image": [
                "https://tirupatibalajitemplecharkop.com/images/12.webp",
                "https://tirupatibalajitemplecharkop.com/images/Yf8TILpvKPd6ZUye.webp"
              ],
              "logo": {
                "@type": "ImageObject",
                "url": "https://tirupatibalajitemplecharkop.com/images/pngtree-balaji-tilak-png-image_6538668.webp",
                "width": 180,
                "height": 180
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3-289, Priyadarshini Vidyamandir Marg, opp. Priyadarshani School, Shivkrupa CHS, Sector 7, Kandivali West",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400067",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.223041,
                "longitude": 72.83089
              },
              "telephone": "+91-9920716663",
              "email": "charkopbalaji1@gmail.com",
              "url": "https://tirupatibalajitemplecharkop.com/annadanam",
              "founder": {
                "@type": "Person",
                "name": "Guruji (Gurunath)",
                "description": "Spiritual leader and founder of Balaji Mandir Charkop"
              },
              "foundingDate": "1998",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                  ],
                  "opens": "05:30",
                  "closes": "21:00"
                }
              ],
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Annadanam",
                  "description": "Daily food donation program serving fresh meals to devotees and the needy. Sponsor Annadanam for birthdays, anniversaries, or in memory of loved ones."
                }
              ]
            },
            {
              "@type": "Service",
              "@id": "https://tirupatibalajitemplecharkop.com/#annadanam",
              "serviceType": "Annadanam",
              "provider": {
                "@id": "https://tirupatibalajitemplecharkop.com/#temple"
              },
              "areaServed": "Mumbai, Maharashtra, India",
              "description": "Annadanam is a sacred food donation program at Balaji Mandir Charkop, serving hundreds of meals daily to the needy and devotees.",
              "offers": {
                "@type": "Offer",
                "url": "https://tirupatibalajitemplecharkop.com/annadanam",
                "price": "Donation-based",
                "priceCurrency": "INR"
              }
            },
            {
              "@type": "Organization",
              "@id": "https://tirupatibalajitemplecharkop.com/#organization",
              "name": "Shree Balaji Padmavati Foundation",
              "url": "https://tirupatibalajitemplecharkop.com/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://tirupatibalajitemplecharkop.com/images/pngtree-balaji-tilak-png-image_6538668.webp"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-9920716663",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi", "Marathi"]
                }
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://tirupatibalajitemplecharkop.com/#website",
              "url": "https://tirupatibalajitemplecharkop.com/",
              "name": "Balaji Mandir Charkop",
              "publisher": {
                "@id": "https://tirupatibalajitemplecharkop.com/#organization"
              }
            },
            {
              "@type": "WebPage",
              "@id": "https://tirupatibalajitemplecharkop.com/annadanam#webpage",
              "url": "https://tirupatibalajitemplecharkop.com/annadanam",
              "name": "Annadanam - Balaji Mandir Charkop",
              "isPartOf": {
                "@id": "https://tirupatibalajitemplecharkop.com/#website"
              },
              "about": {
                "@id": "https://tirupatibalajitemplecharkop.com/#temple"
              }
            }
          ]
        }
        `}</script>
      </Helmet>
      <div className="pt-16">
        <section className="py-16 bg-spiritual-beige min-h-[80vh]">
          <div className="max-w-full px-2 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-0">
              {/* Main Card - Responsive Two Column Grid */}
              <div className="bg-white rounded-2xl shadow-spiritual mb-14 overflow-hidden animate-fade-in-up flex flex-col lg:flex-row">
                {/* Image */}
                <div className="bg-cream flex-shrink-0 w-full lg:w-1/2 h-56 sm:h-72 lg:h-auto lg:min-h-[320px]">
                  <img
                    src="/images/balabhojnam.webp"
                    alt="Annadanam food distribution at Balaji Mandir Charkop - main gallery image"
                    className="w-full h-full object-cover rounded-none lg:rounded-none"
                    loading="eager"
                    fetchPriority="high"
                    width="800"
                    height="400"
                  />
                </div>
                {/* Details */}
                <div className="flex flex-col justify-center w-full lg:w-1/2 p-4 sm:p-6 lg:p-10 space-y-4 lg:space-y-6 items-center text-center lg:text-left lg:items-start">
                  <h1 className="text-3xl font-bold text-deep-brown mb-1 lg:mb-2 max-w-xl">Annadanam</h1>
                  <div className="flex flex-wrap gap-2 mb-2 lg:mb-4 justify-center lg:justify-start">
                    <span className="flex items-center bg-light-saffron px-3 py-1 rounded-full text-sm">
                      <i className="fas fa-clock mr-2 text-deep-saffron"></i>
                      Daily Goal: {annadanamGoal.goalMeals.toLocaleString()} meals
                    </span>
                  </div>
                  <p className="text-deep-brown/80 text-base leading-relaxed max-w-xl mb-2 lg:mb-6">"Annam Brahma" - Food is divine. Support our daily food distribution program and be part of this sacred service.</p>
                  <a
                    href="https://rzp.io/rzp/252Annadanam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full lg:w-auto"
                  >
                    <button className="bg-peacock-green text-white px-8 py-3 rounded-xl font-semibold shadow-spiritual hover:bg-peacock-green/90 transition w-full lg:w-auto text-lg mb-2 lg:mb-4">
                      Donate Now
                    </button>
                  </a>
                  {/* Recurring Donation Button */}
                  <div className="w-full lg:w-auto mb-2 lg:mb-4">
                    <div className="text-center lg:text-left text-deep-brown/70 text-sm mb-2">Want to support Annadanam every month?</div>
                    <a
                      href="/recurring-donation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full lg:w-auto"
                    >
                      <button className="bg-light-saffron text-deep-brown px-8 py-3 rounded-xl font-semibold hover:bg-deep-saffron hover:text-white transition w-full lg:w-auto text-lg">
                        Set Up a Monthly Annadanam Donation
                      </button>
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-2 lg:mb-4 items-center justify-center lg:justify-start w-full">
                    <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 text-peacock-green font-semibold text-sm">
                      <i className="fas fa-certificate text-lg"></i> 80G Certificate Provided Instantly
                    </div>
                  </div>
                  {/* Social Share Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-2 items-center justify-center lg:justify-start w-full lg:w-auto">
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent('Support Annadanam at Balaji Mandir Charkop: https://tirupatibalajitemplecharkop.com/annadanam')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-peacock-green text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold hover:bg-peacock-green/90 transition w-full sm:w-auto justify-center lg:w-auto"
                    >
                      <i className="fab fa-whatsapp"></i> Share on WhatsApp
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://tirupatibalajitemplecharkop.com/annadanam`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1877f3] text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold hover:bg-[#145db2] transition w-full sm:w-auto justify-center lg:w-auto"
                    >
                      <i className="fab fa-facebook"></i> Share on Facebook
                    </a>
                  </div>
                </div>
              </div>
              {/* Image Carousel */}
              <div className="mb-14 max-w-4xl mx-auto animate-fade-in-up">
                <div className="bg-white rounded-2xl p-4 sm:p-6">
                  <h3 className="text-xl font-bold text-deep-brown mb-6 text-center">Annadanam Gallery</h3>
                  <Carousel
                    className="relative"
                    plugins={[
                      Autoplay({ delay: 3500 })
                    ]}
                  >
                    <CarouselContent>
                      {galleryImages.map((img, idx) => (
                        <CarouselItem key={idx} className="flex items-center justify-center">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="rounded-xl object-cover w-full max-h-48 sm:max-h-80 mb-2"
                            loading="lazy"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {/* Overlayed navigation buttons */}
                    <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                      <div className="pointer-events-auto">
                        <CarouselPrevious className="relative left-2 top-0 bg-white/80 hover:bg-white text-peacock-green border-none shadow rounded-full" />
                      </div>
                      <div className="pointer-events-auto">
                        <CarouselNext className="relative right-2 top-0 bg-white/80 hover:bg-white text-peacock-green border-none shadow rounded-full" />
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
              {/* SEO Description Block */}
              <div className="mb-14 max-w-4xl mx-auto animate-fade-in-up">
                <div className="bg-white rounded-2xl shadow-spiritual p-4 sm:p-6 text-deep-brown/90 text-base leading-relaxed">
                  <h3 className="text-lg font-bold text-deep-brown mb-2">About Annadanam</h3>
                  <p>{seoDescription}</p>
                </div>
              </div>
              {/* Divider */}
              <div className="border-t border-light-saffron/40 my-12"></div>
              {/* Testimonials Section */}
              {annadanamTestimonials.length > 0 && (
                <div className="mb-14 max-w-4xl mx-auto animate-fade-in-up">
                  <h3 className="text-xl font-bold text-deep-brown mb-4 text-center">What Devotees Say About Annadanam</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {annadanamTestimonials.map((t, idx) => (
                      <div key={idx} className="bg-white rounded-xl shadow-spiritual p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <i className="fas fa-user-circle text-2xl text-peacock-green"></i>
                          <span className="font-semibold text-deep-brown">{t.name}</span>
                        </div>
                        <p className="text-deep-brown/80 italic">“{t.message}”</p>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-6">
                    <span className="text-deep-brown/70 text-sm">Have you experienced Annadanam? <a href="mailto:charkopbalaji1@gmail.com" className="text-peacock-green underline hover:text-deep-saffron">Share your story</a> and inspire others!</span>
                  </div>
                </div>
              )}
              {/* Divider */}
              <div className="border-t border-light-saffron/40 my-12"></div>
              {/* Impact Stats Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-up">
                {[
                  { value: annadanamGoal.goalMeals, label: "Daily Goal" },
                  { value: annadanamGoal.currentMeals, label: "Meals Served Today" },
                  { value: annadanamGoal.mealsThisMonth, label: "Meals This Month" },
                  { value: annadanamGoal.totalMealsServed, label: "Total Meals Served" }
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-lg border border-light-saffron px-6 py-6 flex flex-col items-center w-full"
                  >
                    <span className="text-3xl sm:text-4xl font-extrabold text-peacock-green mb-1">{stat.value.toLocaleString()}</span>
                    <span className="text-base font-bold text-deep-brown text-center">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="text-center text-xs text-deep-brown/50 mb-8">
                Last updated: {new Date(annadanamGoal.lastUpdated).toLocaleString()}
              </div>
              {/* Progress Tracker */}
              <div className="mb-16 max-w-4xl mx-auto animate-fade-in-up">
                <div className="mx-auto max-w-xl bg-peacock-green/10 border-2 border-peacock-green rounded-2xl shadow-lg p-6 flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-peacock-green mb-2 tracking-wide">
                    Meals Served: {annadanamGoal.currentMeals.toLocaleString()} / {annadanamGoal.goalMeals.toLocaleString()}
                  </span>
                  <span className="text-lg font-semibold text-deep-brown mb-4">
                    {Math.round((annadanamGoal.currentMeals / annadanamGoal.goalMeals) * 100)}% of our daily goal!
                  </span>
                  <div className="w-full bg-gray-200 rounded-full h-5">
                    <div
                      className="bg-peacock-green h-5 rounded-full transition-all duration-500"
                      style={{ width: `${(annadanamGoal.currentMeals / annadanamGoal.goalMeals) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* Divider */}
              <div className="border-t border-light-saffron/40 my-12"></div>
              {/* Why Annadanam Section */}
              <div className="bg-white rounded-2xl shadow-spiritual p-8 mb-8 max-w-4xl mx-auto animate-fade-in-up">
                <h3 className="text-2xl font-semibold text-deep-brown mb-3">Why Annadanam?</h3>
                <p className="text-deep-brown/70 leading-relaxed mb-4">
                  Your contribution helps us serve nutritious meals to devotees and community members daily. Every donation, no matter the size, creates ripples of positive karma and supports our mission of compassion.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-peacock-green text-base">
                    <i className="fas fa-check-circle mr-2"></i> Daily 1,000+ meals served
                  </li>
                  <li className="flex items-center text-peacock-green text-base">
                    <i className="fas fa-check-circle mr-2"></i> Fresh, hygienic, and sattvic food
                  </li>
                  <li className="flex items-center text-peacock-green text-base">
                    <i className="fas fa-check-circle mr-2"></i> Open to all, regardless of background
                  </li>
                </ul>
              </div>
              {/* FAQ Section */}
              <FaqAccordion faqs={annadanamFaqData} title="Annadanam FAQ" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
