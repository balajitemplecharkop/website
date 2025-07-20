import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Annadanam from "@/pages/Annadanam";
import Seva from "@/pages/Seva";
import SevaDetails from "@/pages/SevaDetails";
import TempleDevelopment from "@/pages/TempleDevelopment";
import Guruji from "@/pages/Guruji";
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Suspense, lazy } from "react";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "wouter";

// Lazy load large, non-critical pages
const Gallery = lazy(() => import("@/pages/Gallery"));
const Calendar = lazy(() => import("@/pages/Calendar"));
const JoinUs = lazy(() => import("@/pages/JoinUs"));
const Terms = lazy(() => import("@/pages/terms"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Refund = lazy(() => import("@/pages/refund"));
const NotFound = lazy(() => import("@/pages/not-found"));
const Mantra = lazy(() => import("@/pages/Mantra"));
const ThankYou = lazy(() => import("@/pages/ThankYou"));

function usePageTracking() {
  const [location] = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location });
  }, [location]);
}

function Router() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowCookieBanner(true);
  }, []);

  const handleCookieConsent = (choice: "all" | "minimal") => {
    localStorage.setItem("cookieConsent", choice);
    setShowCookieBanner(false);
  };

  return (
    <div className="min-h-screen bg-spiritual-beige overflow-x-hidden">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/annadanam" component={Annadanam} />
        <Route path="/seva" component={Seva} />
        <Route path="/seva/:id" component={SevaDetails} />
        <Route path="/development" component={TempleDevelopment} />
        <Route path="/guruji" component={Guruji} />
        <Route path="/gallery" component={() => (
          <Suspense fallback={<div>Loading Gallery...</div>}>
            <Gallery />
          </Suspense>
        )} />
        <Route path="/mantra" component={() => (
          <Suspense fallback={<div>Loading Mantra...</div>}>
            <Mantra />
          </Suspense>
        )} />
        <Route path="/calendar" component={() => (
          <Suspense fallback={<div>Loading Calendar...</div>}>
            <Calendar />
          </Suspense>
        )} />
        <Route path="/join-us" component={() => (
          <Suspense fallback={<div>Loading Join Us...</div>}>
            <JoinUs />
          </Suspense>
        )} />
        <Route path="/terms" component={() => (
          <Suspense fallback={<div>Loading Terms...</div>}>
            <Terms />
          </Suspense>
        )} />
        <Route path="/privacy" component={() => (
          <Suspense fallback={<div>Loading Privacy...</div>}>
            <Privacy />
          </Suspense>
        )} />
        <Route path="/refund" component={() => (
          <Suspense fallback={<div>Loading Refund...</div>}>
            <Refund />
          </Suspense>
        )} />
        <Route path="/thank-you" component={() => (
          <Suspense fallback={<div>Loading...</div>}>
            <ThankYou />
          </Suspense>
        )} />
        <Route component={() => (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        )} />
      </Switch>
      <Footer />
      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-6 right-6 z-50 bg-white border border-light-saffron shadow-2xl rounded-2xl p-5 flex flex-col min-w-[280px] max-w-sm w-full animate-fade-in-up">
          <div className="flex justify-between items-start mb-2">
            <div className="text-deep-brown text-sm text-left pr-6">
              We use cookies to enhance your experience. Accept all cookies or choose minimal for essentials only.
            </div>
            <button
              className="ml-2 text-deep-brown/60 hover:text-deep-brown text-lg font-bold focus:outline-none"
              aria-label="Close cookie consent"
              onClick={() => setShowCookieBanner(false)}
              style={{ lineHeight: 1 }}
            >
              ×
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <button
              className="bg-peacock-green text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-peacock-green/90 transition w-full"
              onClick={() => handleCookieConsent("all")}
            >
              Yes, I agree to accept all
            </button>
            <button
              className="bg-light-saffron text-deep-brown px-4 py-2 rounded-lg font-semibold shadow hover:bg-deep-saffron hover:text-white transition w-full"
              onClick={() => handleCookieConsent("minimal")}
            >
              No, use minimal cookies
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  usePageTracking();
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
