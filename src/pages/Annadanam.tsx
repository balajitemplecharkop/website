import { useState } from "react";
import annadanamFaqDataRaw from "@/data/annadanam-faq.json";
const annadanamFaqData: { question: string; answer: string }[] = annadanamFaqDataRaw as any[];
import { annadanamGoal } from "@/data/annadanamGoal";
import sevaTestimonials from "@/data/seva-testimonials.json";
import { Helmet } from 'react-helmet-async';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Annadanam() {
  const [openFaqIndexes, setOpenFaqIndexes] = useState<{ [key: number]: boolean }>({});
  // Placeholder images for the carousel
  const galleryImages = [
    {
      src: "/images/Yf8TILpvKPd6ZUye.webp",
      alt: "Annadanam food distribution at Balaji Mandir Charkop - main gallery image"
    },
    {
      src: "/images/photo-1578662996442-48f60103fc96.webp",
      alt: "Temple volunteers preparing Annadanam meals"
    },
    {
      src: "/images/photo-1545558014-8692077e9b5c.webp",
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
        <meta name="description" content="Support daily Annadanam at Balaji Mandir Charkop. Join our sacred food distribution program and serve the community." />
        <meta property="og:title" content="Annadanam - Balaji Mandir Charkop" />
        <meta property="og:description" content="Support daily Annadanam at Balaji Mandir Charkop. Join our sacred food distribution program and serve the community." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balajimandircharkop.com/annadanam" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" />
      </Helmet>
      <div className="pt-16">
        <section className="py-16 bg-spiritual-beige min-h-[80vh]">
          <div className="max-w-full px-2 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Main Card - Responsive Two Column Grid */}
              <div className="bg-white rounded-2xl shadow-spiritual mb-14 overflow-hidden grid grid-cols-1 lg:grid-cols-2 animate-fade-in-up">
                {/* Image */}
                <div className="bg-cream flex items-center justify-center p-0 lg:p-8 min-h-[320px]">
                  <img
                    src="/images/Yf8TILpvKPd6ZUye.webp"
                    alt="Annadanam food distribution at Balaji Mandir Charkop - main gallery image"
                    className="w-full h-64 lg:h-[400px] object-cover rounded-2xl lg:rounded-2xl shadow-lg"
                    loading="eager"
                    fetchPriority="high"
                    width="800"
                    height="400"
                  />
                </div>
                {/* Details */}
                <div className="flex flex-col justify-center p-6 lg:p-10 min-h-[320px]">
                  <h1 className="text-3xl font-bold text-deep-brown mb-2">Annadanam</h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="flex items-center bg-light-saffron px-3 py-1 rounded-full text-sm">
                      <i className="fas fa-clock mr-2 text-deep-saffron"></i>
                      Daily Goal: {annadanamGoal.goalMeals.toLocaleString()} meals
                    </span>
                  </div>
                  <p className="text-deep-brown/80 mb-6 text-base leading-relaxed">"Annam Brahma" - Food is divine. Support our daily food distribution program and be part of this sacred service.</p>
                  <a
                    href="https://rzp.io/l/your-annadanam-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <button className="bg-peacock-green text-white px-8 py-3 rounded-xl font-semibold shadow-spiritual hover:bg-peacock-green/90 transition w-full text-lg mb-4">
                      Donate Now
                    </button>
                  </a>
                  {/* Recurring Donation Button */}
                  <div className="w-full mb-4">
                    <div className="text-center text-deep-brown/70 text-sm mb-2">Want to support Annadanam every month?</div>
                    <a
                      href="https://forms.gle/your-google-form-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <button className="bg-light-saffron text-deep-brown px-8 py-3 rounded-xl font-semibold shadow-spiritual hover:bg-deep-saffron hover:text-white transition w-full text-lg">
                        Interested in Monthly Recurring Annadanam? Click here
                      </button>
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4 items-center justify-center w-full">
                    <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-spiritual text-peacock-green font-semibold text-sm">
                      <i className="fas fa-lock text-lg"></i> 100% Secure Payment
                    </div>
                    <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-spiritual text-peacock-green font-semibold text-sm">
                      <i className="fas fa-certificate text-lg"></i> 80G Certificate Provided Instantly
                    </div>
                  </div>
                  {/* Social Share Buttons */}
                  <div className="flex gap-4 mb-2 items-center justify-center w-full">
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent('Support Annadanam at Balaji Mandir Charkop: https://balajimandircharkop.com/annadanam')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-peacock-green text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold shadow-spiritual hover:bg-peacock-green/90 transition"
                    >
                      <i className="fab fa-whatsapp"></i> Share on WhatsApp
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://balajimandircharkop.com/annadanam`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1877f3] text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold shadow-spiritual hover:bg-[#145db2] transition"
                    >
                      <i className="fab fa-facebook"></i> Share on Facebook
                    </a>
                  </div>
                </div>
              </div>
              {/* Image Carousel */}
              <div className="mb-14 max-w-4xl mx-auto animate-fade-in-up">
                <div className="bg-white rounded-2xl shadow-spiritual p-6">
                  <h3 className="text-xl font-bold text-deep-brown mb-4 text-center">Annadanam Gallery</h3>
                  <Carousel className="relative">
                    <CarouselContent>
                      {galleryImages.map((img, idx) => (
                        <CarouselItem key={idx} className="flex items-center justify-center">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="rounded-xl object-cover w-full max-h-80"
                            loading="lazy"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
              {/* SEO Description Block */}
              <div className="mb-14 max-w-4xl mx-auto animate-fade-in-up">
                <div className="bg-white rounded-2xl shadow-spiritual p-6 text-deep-brown/90 text-base leading-relaxed">
                  <h3 className="text-lg font-bold text-deep-brown mb-2">About Annadanam (SEO)</h3>
                  <p>{seoDescription}</p>
                </div>
              </div>
              {/* Divider */}
              <div className="border-t border-light-saffron/40 my-12"></div>
              {/* Testimonials Section */}
              {annadanamTestimonials.length > 0 && (
                <div className="mb-14 max-w-4xl mx-auto animate-fade-in-up">
                  <h3 className="text-xl font-bold text-deep-brown mb-4 text-center">What Devotees Say About Annadanam</h3>
                  <div className="grid md:grid-cols-2 gap-6">
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
                    <span className="text-deep-brown/70 text-sm">Have you experienced Annadanam? <a href="mailto:info@balajimandircharkop.com" className="text-peacock-green underline hover:text-deep-saffron">Share your story</a> and inspire others!</span>
                  </div>
                </div>
              )}
              {/* Divider */}
              <div className="border-t border-light-saffron/40 my-12"></div>
              {/* Impact Stats Section */}
              <div className="flex flex-wrap justify-center gap-5 mb-8 animate-fade-in-up">
                {[
                  { value: annadanamGoal.goalMeals, label: "Daily Goal" },
                  { value: annadanamGoal.currentMeals, label: "Meals Served Today" },
                  { value: annadanamGoal.mealsThisMonth, label: "Meals This Month" },
                  { value: annadanamGoal.totalMealsServed, label: "Total Meals Served" }
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-lg border border-light-saffron px-8 py-6 flex flex-col items-center min-w-[150px] max-w-[200px] w-full"
                  >
                    <span className="text-4xl font-extrabold text-peacock-green mb-1">{stat.value.toLocaleString()}</span>
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
              {annadanamFaqData.length > 0 && (
                <div className="mb-14 mt-12 bg-cream rounded-2xl p-6 max-w-4xl mx-auto animate-fade-in-up">
                  <h3 className="text-xl font-bold text-deep-brown mb-4 text-center">Annadanam FAQ</h3>
                  <div className="space-y-4">
                    {annadanamFaqData.map((faq: any, idx: number) => (
                      <div key={idx} className="bg-white rounded-xl shadow-spiritual p-4">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-deep-brown mb-2">{faq.question}</p>
                          <button
                            onClick={() =>
                              setOpenFaqIndexes((prev) => ({
                                ...prev,
                                [idx]: !prev[idx],
                              }))
                            }
                            className="ml-4 px-2 py-0.5 rounded-lg bg-light-saffron text-deep-brown font-semibold shadow hover:bg-deep-saffron hover:text-white transition"
                            aria-label={openFaqIndexes[idx] ? "Minimize answer" : "Expand answer"}
                          >
                            {openFaqIndexes[idx] ? "−" : "+"}
                          </button>
                        </div>
                        {openFaqIndexes[idx] && (
                          <p className="text-deep-brown/80">{faq.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
