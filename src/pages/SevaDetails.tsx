import { useParams } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import poojaItems from "@/data/pooja-items.json";
import { useMemo, useState } from "react";
import testimonialsData from "@/data/seva-testimonials.json";
import { Helmet } from 'react-helmet-async';
import rawSevaSeoData from "@/data/seva-seo.json";
import sevaFaqDataRaw from "@/data/seva-faq.json";
import FaqAccordion from "@/components/FaqAccordion";
const sevaSeoData: Record<string, { seoDescription: string }> = rawSevaSeoData;
const sevaFaqData: { [key: string]: { question: string; answer: string }[] } = sevaFaqDataRaw;

export default function SevaDetails() {
  const { id } = useParams();
  const pooja = poojaItems.find(item => item.id === id);

  const [faqOpen, setFaqOpen] = useState(true);
  const [openFaqIndexes, setOpenFaqIndexes] = useState<{ [key: number]: boolean }>({});

  if (!pooja) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <h1 className="text-2xl font-bold text-deep-brown mb-4">Seva Not Found</h1>
            <p className="text-deep-brown/70">The requested seva could not be found.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Related sevas (exclude current, pick 3 random or by same deity)
  const relatedSevas = useMemo(() => {
    const others = poojaItems.filter(item => item.id !== pooja.id);
    // Prefer same deity, else just pick first 3
    const sameDeity = others.filter(item => item.deity === pooja.deity);
    const pool = sameDeity.length >= 3 ? sameDeity : others;
    return pool.slice(0, 3);
  }, [pooja]);

  // Filter testimonials for this seva
  const testimonials = useMemo(() => {
    return testimonialsData.filter(t => t.sevaId === pooja.id);
  }, [pooja]);

  // SEO block for this seva
  const seoBlock = sevaSeoData[String(pooja.id)]?.seoDescription;
  const faqList = sevaFaqData[pooja.id] || [];

  return (
    <>
      <Helmet>
        <title>{pooja.name} - Temple Seva | Balaji Mandir Charkop</title>
        <meta name="description" content={seoBlock || pooja.description} />
        <meta property="og:title" content={`${pooja.name} - Temple Seva | Balaji Mandir Charkop`} />
        <meta property="og:description" content={seoBlock || pooja.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://tirupatibalajitemplecharkop.com/seva/${pooja.id}`} />
        <meta property="og:image" content={pooja.image} />
        {faqList.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqList.map((faq: any) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })}
          </script>
        )}
      </Helmet>
      <div className="pt-16">
        <section className="py-16 bg-spiritual-beige min-h-[80vh]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-spiritual mb-8 overflow-hidden flex flex-col md:flex-row">
              {/* Image */}
              <div className="bg-cream w-full md:w-1/2 h-56 sm:h-72 md:h-auto md:min-h-[320px] flex items-center justify-center relative">
                <img
                  src={pooja.image}
                  alt={pooja.name ? `${pooja.name} ritual setup` : 'Seva image'}
                  className="w-full h-full object-cover rounded-none md:rounded-none h-48 rounded-t-xl bg-gray-100 md:h-full md:rounded-none"
                  loading="lazy"
                  width="800"
                  height="400"
                  onError={e => { e.currentTarget.src = '/images/placeholder.webp'; }}
                />
                <span className="absolute top-3 right-3 bg-deep-saffron text-white text-lg px-4 py-2 rounded-full font-semibold shadow z-10">₹{pooja.price.toLocaleString()}</span>
              </div>
              {/* Details */}
              <div className="flex flex-col justify-center w-full md:w-1/2 p-4 sm:p-6 md:p-10 space-y-4 md:space-y-6 items-center text-center md:text-left md:items-start">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
                  <h1 className="text-3xl font-bold text-deep-brown mb-1 md:mb-2 max-w-xl">{pooja.name}</h1>
                </div>
                <div className="flex flex-wrap gap-2 mb-2 md:mb-4 justify-center md:justify-start w-full">
                  <span className="flex items-center bg-light-saffron px-3 py-1 rounded-full text-sm">
                    <i className="fas fa-clock mr-2 text-deep-saffron"></i>
                    {pooja.duration}
                  </span>
                  <span className="flex items-center bg-light-green px-3 py-1 rounded-full text-sm">
                    <i className="fas fa-om mr-2 text-peacock-green"></i>
                    {pooja.deity}
                  </span>
                </div>
                <p className="text-deep-brown/80 text-base leading-relaxed max-w-xl mb-2 md:mb-6">{pooja.description}</p>
                <a
                  href={pooja.paymentLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto"
                >
                  <Button className="bg-peacock-green text-white px-8 py-3 rounded-xl font-semibold hover:bg-peacock-green/90 transition w-full md:w-auto text-lg mb-3 md:mb-4">
                    Book Now
                  </Button>
                </a>
                {/* 80G Certificate Badge */}
                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 text-peacock-green font-semibold text-sm w-full justify-center mb-3">
                  <i className="fas fa-certificate text-lg"></i> Instant 80G Certificate (Mail & WhatsApp)
                </div>
                {/* Share Buttons */}
                <div className="md:hidden flex flex-row gap-2 w-full justify-center items-center mt-2">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Book ${pooja.name} seva at Balaji Mandir Charkop: https://tirupatibalajitemplecharkop.com/seva/${pooja.id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-peacock-green text-white rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-peacock-green/90 transition w-1/2 py-2 text-sm min-w-[140px] max-w-[220px]"
                  >
                    <i className="fab fa-whatsapp"></i> Share on WhatsApp
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://tirupatibalajitemplecharkop.com/seva/${pooja.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1877f3] text-white rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-[#145db2] transition w-1/2 py-2 text-sm min-w-[140px] max-w-[220px]"
                  >
                    <i className="fab fa-facebook"></i> Share on Facebook
                  </a>
                </div>
              </div>
            </div>
            {/* About Section */}
            <Card className="bg-cream shadow-spiritual mb-8">
              <CardHeader>
                <CardTitle className="text-deep-brown">About This Seva</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="flex items-center bg-light-green px-3 py-1 rounded-full text-sm">
                    <i className="fas fa-om mr-2 text-peacock-green"></i>
                    {pooja.deity}
                  </span>
                  <span className="flex items-center bg-light-saffron px-3 py-1 rounded-full text-sm">
                    <i className="fas fa-clock mr-2 text-deep-saffron"></i>
                    {pooja.duration}
                  </span>
                  <span className="flex items-center bg-deep-saffron/90 text-white px-3 py-1 rounded-full text-sm">
                    <i className="fas fa-rupee-sign mr-2"></i>
                    {pooja.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-deep-brown/80 leading-relaxed mb-2">{pooja.description}</p>
                <div className="border-t border-light-saffron/40 my-4"></div>
                <div>
                  <h4 className="font-semibold text-deep-brown mb-3">Benefits of This Pooja:</h4>
                  <div className="space-y-2">
                    {pooja.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <i className="fas fa-check-circle text-peacock-green"></i>
                        <span className="text-deep-brown/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* SEO Block */}
            {seoBlock && (
              <div className="mb-8">
                <div className="bg-white rounded-xl shadow-spiritual p-6 text-deep-brown/90 text-base leading-relaxed">
                  <h3 className="text-lg font-bold text-deep-brown mb-2">About {pooja.name}</h3>
                  <p>{seoBlock}</p>
                </div>
              </div>
            )}
            {/* FAQ Section */}
            <FaqAccordion faqs={faqList} title="Seva FAQ" />
            {/* Testimonials */}
            {testimonials.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-deep-brown mb-4 text-center">What Devotees Say</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials.map((t, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-spiritual p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <i className="fas fa-user-circle text-2xl text-peacock-green"></i>
                        <span className="font-semibold text-deep-brown">{t.name}</span>
                      </div>
                      <p className="text-deep-brown/80 italic">“{t.message}”</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Related Sevas */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-deep-brown mb-4 text-center">You May Also Like</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedSevas.map(seva => (
                  <Card key={seva.id} className="bg-white rounded-xl shadow-spiritual flex flex-col h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      {seva.image && (
                        <img
                          src={seva.image}
                          alt={seva.name}
                          className="w-full h-32 object-cover rounded-t-xl"
                          loading="lazy"
                        />
                      )}
                      <div className="p-4 flex flex-col h-full">
                        <h4 className="text-lg font-semibold text-deep-brown mb-2">{seva.name}</h4>
                        <p className="text-deep-brown/70 text-sm mb-4 line-clamp-2">{seva.description}</p>
                        <a
                          href={`/seva/${seva.id}`}
                          className="mt-auto"
                        >
                          <Button className="bg-peacock-green text-white px-4 py-2 rounded-lg font-semibold shadow-spiritual hover:bg-peacock-green/90 transition w-full">
                            Book Now
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
