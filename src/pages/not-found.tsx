import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-cream to-spiritual-beige">
      <Card className="w-full max-w-md mx-4 shadow-xl rounded-2xl border-0">
        <CardContent className="flex flex-col items-center pt-10 pb-8 px-6 space-y-6">
          <AlertCircle className="h-16 w-16 text-red-400 mb-2 animate-bounce" />
          <h1 className="text-3xl font-extrabold text-deep-brown text-center">404 - Page Not Found</h1>
          <p className="text-base text-deep-brown/70 text-center max-w-xs">
            Oops! The page you’re looking for doesn’t exist or has been moved.<br />
            Let’s get you back to something divine.
          </p>
          <a href="/" className="w-full mt-2">
            <button className="w-full bg-peacock-green hover:bg-peacock-green/90 text-white font-bold py-3 px-6 rounded-xl shadow transition-all text-lg mt-2">
              ⬅️ Back to Home
            </button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
