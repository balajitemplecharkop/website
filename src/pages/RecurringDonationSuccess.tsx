import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function RecurringDonationSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-spiritual-beige px-4">
      <Card className="bg-white rounded-2xl shadow-spiritual p-8 max-w-md w-full flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-peacock-green rounded-full flex items-center justify-center mb-4">
          <Heart className="text-white w-8 h-8" />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl text-deep-brown mb-2">Thank You for Your Support!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base text-deep-brown/80 mb-6">
            Your recurring donation has been set up successfully.<br />
            You will receive a confirmation email and payment receipts for each billing cycle.<br />
            If you have any questions, please contact us.
          </p>
          <Link href="/">
            <Button className="bg-peacock-green text-white px-8 py-3 rounded-xl font-semibold shadow-spiritual hover:bg-peacock-green/90 transition">
              Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
} 