import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Pause, Download, Share2, RotateCcw } from "lucide-react";
import mantras from "@/data/mantras.json";
import { Helmet } from 'react-helmet-async';

export default function Mantra() {
  const [currentMantra, setCurrentMantra] = useState(mantras[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);

  const getNewMantra = () => {
    const randomIndex = Math.floor(Math.random() * mantras.length);
    setCurrentMantra(mantras[randomIndex]);
    setIsPlaying(false);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const benefits = [
    { icon: "fas fa-heart", text: "Brings inner peace and calm" },
    { icon: "fas fa-brain", text: "Enhances concentration" },
    { icon: "fas fa-shield-alt", text: "Provides spiritual protection" },
    { icon: "fas fa-leaf", text: "Purifies mind and soul" },
  ];

  return (
    <>
      <Helmet>
        <title>Daily Mantras - Balaji Mandir Charkop</title>
        <meta name="description" content="Chant daily mantras and sacred hymns at Balaji Mandir Charkop. Experience spiritual awakening and peace." />
        <meta property="og:title" content="Daily Mantras - Balaji Mandir Charkop" />
        <meta property="og:description" content="Chant daily mantras and sacred hymns at Balaji Mandir Charkop. Experience spiritual awakening and peace." />
        <meta property="og:image" content="https://tirupatibalajitemplecharkop.com/images/12.webp" />
        <meta property="og:site_name" content="Balaji Mandir Charkop" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirupatibalajitemplecharkop.com/mantra" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Daily Mantras - Balaji Mandir Charkop" />
        <meta name="twitter:description" content="Chant daily mantras and sacred hymns at Balaji Mandir Charkop. Experience spiritual awakening and peace." />
        <meta name="twitter:image" content="https://tirupatibalajitemplecharkop.com/images/12.webp" />
        <meta name="theme-color" content="#eab308" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tirupatibalajitemplecharkop.com/mantra" />
        <link rel="icon" type="image/webp" href="/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/pngtree-balaji-tilak-png-image_6538668.webp" />
      </Helmet>
      <div className="pt-16">
        <section className="py-16 bg-spiritual-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-deep-brown mb-4">Mantra of the Day</h2>
              <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
                Immerse yourself in the divine vibrations of sacred mantras. Let these powerful chants bring peace, prosperity, and spiritual awakening to your life.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-white shadow-spiritual rounded-xl">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-deep-saffron rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-om text-white text-3xl"></i>
                  </div>
                  <CardTitle className="text-2xl text-deep-brown">{currentMantra.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-8 p-4 md:p-8">
                  <div className="space-y-6">
                    <Card className="bg-cream rounded-lg">
                      <CardContent className="p-4 md:p-6">
                        <div className="text-center space-y-4">
                          <p className="text-2xl font-medium text-deep-brown leading-relaxed">
                            {currentMantra.sanskrit.split('\n').map((line, index) => (
                              <span key={index}>
                                {line}
                                {index < currentMantra.sanskrit.split('\n').length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                          <p className="text-lg text-deep-brown/80 italic">
                            {currentMantra.transliteration.split('\n').map((line, index) => (
                              <span key={index}>
                                {line}
                                {index < currentMantra.transliteration.split('\n').length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-deep-brown text-center">Meaning</h4>
                    <Card className="bg-light-green rounded-lg">
                      <CardContent className="p-4 md:p-6">
                        <p className="text-deep-brown leading-relaxed text-center">{currentMantra.meaning}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    {/* <h4 className="text-lg font-semibold text-deep-brown text-center">Listen & Chant Along</h4> */}
                    {/* Audio player and controls removed */}
                    <div className="flex flex-col md:flex-row justify-center gap-3 md:space-x-4">
                      {/* <Button className="bg-peacock-green hover:bg-peacock-green/90 text-white">
                        <Download className="mr-2 h-4 w-4" />
                        Download Audio
                      </Button> */}
                      <Button variant="outline" className="border-peacock-green text-peacock-green hover:bg-peacock-green hover:text-white w-full md:w-auto">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share Mantra
                      </Button>
                    </div>
                  </div>

                  <Card className="bg-light-saffron rounded-lg">
                    <CardContent className="p-4 md:p-6">
                      <h4 className="text-lg font-semibold text-deep-brown mb-4 text-center">Benefits of Chanting</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <i className={`${benefit.icon} text-deep-saffron`}></i>
                            <span className="text-deep-brown">{benefit.text}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <div className="text-center mt-8 flex flex-col items-center">
                <Button
                  onClick={getNewMantra}
                  className="bg-deep-saffron hover:bg-deep-saffron/90 text-white px-8 py-3 rounded-xl font-semibold shadow-spiritual w-full max-w-xs md:w-auto"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Get New Mantra
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
