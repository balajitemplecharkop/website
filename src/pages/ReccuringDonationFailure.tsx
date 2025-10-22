import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle } from "lucide-react"; // better icon for failure
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface RecurringDonationFailureProps {
  amountDeducted?: boolean; // true if payment went through but setup failed
}

export default function RecurringDonationFailure({ amountDeducted = false }: RecurringDonationFailureProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-spiritual-beige px-4">
      <Card className="bg-white rounded-2xl shadow-spiritual p-8 max-w-md w-full flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
          <XCircle className="text-white w-8 h-8" />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl text-deep-brown mb-2">Payment Issue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base text-deep-brown/80 mb-6">
            {amountDeducted
              ? "The amount has been deducted but the recurring donation setup could not be completed. Please contact support for assistance."
              : "Your payment could not be processed. Please try again or contact support."}
            <br />
            Contact support: <strong>9920716663</strong>
          </p>
          <Link href="/">
            <Button className="bg-red-500 text-white px-8 py-3 rounded-xl font-semibold shadow-spiritual hover:bg-red-600 transition">
              Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
