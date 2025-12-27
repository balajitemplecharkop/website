import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Expand, MapPin, ExternalLink } from "lucide-react";
import FlowerConfetti from "@/components/FlowerConfetti";

export default function VaikunthaEkadashi() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  // Event date and timings
  const eventDate = "3rd December 2025";
  const eventTimings = [
    { event: "Vaikuntha Dwara Darshan", time: "05:00 AM - 09:00 PM" },
    { event: "Palki Seva", time: "08:00 PM - 09:00 PM" },
  ];

  useEffect(() => {
    // Check if confetti has already been shown
    const hasShownConfetti = localStorage.getItem('vaikuntha-ekadashi-confetti-shown');
    
    if (!hasShownConfetti) {
      // Trigger confetti on first page load only
      setShowConfetti(true);
      localStorage.setItem('vaikuntha-ekadashi-confetti-shown', 'true');
      
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowConfetti(false);
    }
  }, []);

  const handleGetDirections = () => {
    window.open("https://maps.app.goo.gl/yLvXFhds7Ftx7fJX7", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Vaikuntha Ekadashi - Balaji Mandir Charkop</title>
        <meta name="description" content="View the Vaikuntha Ekadashi image and get directions to Balaji Mandir Charkop" />
      </Helmet>

      {/* Flower Confetti Animation */}
      {showConfetti && <FlowerConfetti duration={3000} />}

      <div className="min-h-screen bg-spiritual-beige py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-brown mb-3 sm:mb-4 px-2">
              Vaikuntha Ekadashi
            </h1>
            <div className="w-24 h-1 bg-peacock-green mx-auto rounded-full"></div>
          </div>

          {/* Special Invitation Message */}
          <div className="text-center mb-4 sm:mb-6 px-4">
            <Card className="shadow-spiritual bg-gradient-to-r from-peacock-green/10 to-light-green/10 border-peacock-green/20 rounded-2xl">
              <CardContent className="p-5 sm:p-7 md:p-8">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-deep-brown font-semibold italic leading-relaxed">
                  Guruji has specially invited you if you are seeing this message
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Event Date */}
          <div className="text-center mb-4 sm:mb-6 px-4">
            <Card className="shadow-sm bg-gradient-to-r from-peacock-green/20 to-light-green/20 border border-peacock-green/30 rounded-lg">
              <CardContent className="p-2 sm:p-3">
                <p className="text-sm sm:text-base font-semibold text-deep-brown">
                  Event Date: <span className="text-peacock-green">{eventDate}</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Image Section */}
          <div className="mb-6 sm:mb-8">
            <Card className="shadow-spiritual bg-white rounded-2xl sm:rounded-3xl overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => setIsImageOpen(true)}
                >
                  <img
                    src="/images/Vaikuntha-Ekadashi.png"
                    alt="Vaikuntha Ekadashi"
                    className="w-full h-auto object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <div className="flex flex-col items-center gap-2 text-white">
                      <Expand className="text-2xl sm:text-3xl" />
                      <span className="text-xs sm:text-sm font-medium">Click to zoom</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Get Directions Button */}
          <div className="flex justify-center px-4">
            <Button
              onClick={handleGetDirections}
              className="bg-peacock-green text-white hover:bg-peacock-green/90 shadow-md flex items-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg font-semibold rounded-xl"
              size="lg"
            >
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
              Get Directions
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Image Zoom Dialog */}
      <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl lg:max-w-6xl w-full h-full max-h-[90vh] p-0 overflow-hidden m-2 sm:m-4">
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-white hover:bg-white/20"
              onClick={() => setIsImageOpen(false)}
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>

            {/* Zoomed Image */}
            <img
              src="/images/Vaikuntha-Ekadashi.png"
              alt="Vaikuntha Ekadashi - Zoomed"
              className="max-w-full max-h-full object-contain p-2 sm:p-4"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

