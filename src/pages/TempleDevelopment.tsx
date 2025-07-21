import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from '@/components/ui/button';
import devData from "@/data/temple-development.json";
import { Helmet } from 'react-helmet-async';

export default function TempleDevelopment() {
  const { totalRaised, totalTarget, estimatedCompletion, projects } = devData;
  const overallProgress = Math.round((totalRaised / totalTarget) * 100);

  return (
    <>
      <Helmet>
        <title>Temple Development - Balaji Mandir Charkop</title>
        <meta name="description" content="Support the development and beautification of Balaji Mandir Charkop. Help us expand our sacred space for the community." />
        <meta property="og:title" content="Temple Development - Balaji Mandir Charkop" />
        <meta property="og:description" content="Support the development and beautification of Balaji Mandir Charkop. Help us expand our sacred space for the community." />
        <meta property="og:image" content="https://tirupatibalajitemplecharkop.com/images/Tirupati_Balaji_Temple_d486b6408b.webp" />
        <meta property="og:site_name" content="Balaji Mandir Charkop" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirupatibalajitemplecharkop.com/development" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Temple Development - Balaji Mandir Charkop" />
        <meta name="twitter:description" content="Support the development and beautification of Balaji Mandir Charkop. Help us expand our sacred space for the community." />
        <meta name="twitter:image" content="https://tirupatibalajitemplecharkop.com/images/Tirupati_Balaji_Temple_d486b6408b.webp" />
        <meta name="theme-color" content="#eab308" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tirupatibalajitemplecharkop.com/development" />
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
              "description": "Support the development and beautification of Balaji Mandir Charkop. Help us expand our sacred space for the community.",
              "image": [
                "https://tirupatibalajitemplecharkop.com/images/Tirupati_Balaji_Temple_d486b6408b.webp"
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
              "url": "https://tirupatibalajitemplecharkop.com/development",
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
                  "name": "Development",
                  "description": "Support the development and beautification of Balaji Mandir Charkop. Help us expand our sacred space for the community."
                }
              ]
            },
            {
              "@type": "Service",
              "@id": "https://tirupatibalajitemplecharkop.com/#development",
              "serviceType": "Temple Development",
              "provider": {
                "@id": "https://tirupatibalajitemplecharkop.com/#temple"
              },
              "areaServed": "Mumbai, Maharashtra, India",
              "description": "Support the development and beautification of Balaji Mandir Charkop. Help us expand our sacred space for the community.",
              "offers": {
                "@type": "Offer",
                "url": "https://tirupatibalajitemplecharkop.com/development",
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
              "@id": "https://tirupatibalajitemplecharkop.com/development#webpage",
              "url": "https://tirupatibalajitemplecharkop.com/development",
              "name": "Temple Development - Balaji Mandir Charkop",
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
        <section className="py-16 bg-spiritual-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-deep-brown mb-2">Temple Development</h2>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-1 bg-peacock-green rounded-full"></div>
              </div>
              <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
                Help us expand and beautify our sacred space. Your contribution will create a lasting legacy for future generations.
              </p>
            </div>

            {/* Overall Progress Tracker */}
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-spiritual p-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-peacock-green mb-2 text-center">Overall Progress</h3>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-1 bg-peacock-green rounded-full"></div>
                </div>
                <Progress value={overallProgress} className="h-4 w-full mb-6" />
                <span className="text-3xl font-extrabold text-peacock-green mb-1">{overallProgress}% Complete</span>
                {estimatedCompletion && (
                  <span className="mt-2 text-deep-brown/70 text-base text-center block">Estimated Completion: {new Date(estimatedCompletion).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                )}
              </div>
            </div>

            <div className="bg-white/80 rounded-2xl shadow-spiritual p-4 md:p-8">
              <h3 className="text-2xl font-semibold text-deep-brown mb-6">Ongoing Projects</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project: any) => (
                  <Card key={project.id} className="bg-[#fff8f2] border border-light-saffron rounded-2xl shadow-lg p-5 mb-6 relative">
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold shadow border border-white ${project.statusColor || (project.status === 'Planning' ? 'bg-blue-500/90 text-white' : project.progress >= 100 ? 'bg-green-600/90 text-white' : 'bg-peacock-green/90 text-white')}`}
                      style={{ zIndex: 2 }}
                    >
                      {project.status}
                    </span>
                    <h3 className="text-lg font-bold text-deep-brown mb-1">{project.title}</h3>
                    <p className="text-deep-brown/80 text-base mb-4">{project.description}</p>
                    <div className="w-full h-3 bg-light-saffron/40 rounded-full mb-2 overflow-hidden">
                      <div
                        className={`h-3 ${project.status === 'Planning' ? 'bg-deep-saffron' : 'bg-peacock-green'} rounded-full transition-all duration-500`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-peacock-green text-sm font-semibold mb-4">
                      ₹{project.raised.toLocaleString()} raised of ₹{project.target.toLocaleString()} target
                    </div>
                    <Button className="w-full bg-peacock-green text-white py-3 rounded-xl font-semibold shadow-spiritual hover:bg-peacock-green/90 transition">
                      Contribute
                    </Button>
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
