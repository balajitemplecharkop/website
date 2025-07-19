import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Building, Utensils } from "lucide-react";
import { useDonation } from "@/hooks/use-donation";
import { useToast } from "@/hooks/use-toast";
import formbricks from "@formbricks/js";

const donationSchema = z.object({
  donorName: z.string().min(2, "Name must be at least 2 characters"),
  donorPhone: z.string().regex(/^[+]?\d{10,15}$/, "Enter a valid phone number"),
  donorEmail: z.string().email("Enter a valid email address"),
  projectPreference: z.string().optional(),
  gotra: z.string().optional(),
  address: z.string().optional(),
  specialNote: z.string().optional(),
  donationAmount: z.number().min(1, "Amount must be at least ₹1"),
});

type DonationFormData = z.infer<typeof donationSchema>;

interface DonationFormProps {
  type: "annadanam" | "development" | "seva";
  title: string;
  description: string;
  defaultAmounts?: number[];
  showProjectSelection?: boolean;
  sevaId?: string;
  sevaName?: string;
}

export default function DonationForm({
  type,
  title,
  description,
  defaultAmounts = [501, 1001, 2501],
  showProjectSelection = false,
  sevaId,
  sevaName,
}: DonationFormProps) {
  console.log('DonationForm rendered');
  const { toast } = useToast();
  const { generateDonationId, createPaymentLink } = useDonation();
  const [showPayment, setShowPayment] = useState(false);
  const [donationId, setDonationId] = useState("");
  const [paymentLink, setPaymentLink] = useState("");

  const form = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      donorName: "",
      donorPhone: "",
      donorEmail: "",
      donationAmount: type === "seva" ? defaultAmounts[0] : 0,
      projectPreference: "",
    },
  });
  console.log('Form state:', form.formState);

  const onSubmit = async (data: DonationFormData) => {
    console.log('Form submitted', data);
    try {
      let donationAmount = data.donationAmount;
      let finalSevaName = "";
      if (type === "seva") {
        finalSevaName = sevaName || sevaId || "SEVA";
      } else if (type === "annadanam") {
        finalSevaName = "ANNADANAM";
      } else if (type === "development") {
        finalSevaName = data.projectPreference || "DEVELOPMENT";
      }
      // Debug log for donation ID generation
      console.log('Generating donation ID with:', { type, sevaName: finalSevaName, donationAmount, donorPhone: data.donorPhone });
      // Generate donation ID with new format
      const id = generateDonationId(type, finalSevaName, donationAmount, data.donorPhone);
      setDonationId(id);
      // Formbricks event tracking
      if (typeof window !== "undefined" && formbricks) {
        formbricks.track("donation_submitted", {
          donationId: id,
          donorName: data.donorName,
          donorEmail: data.donorEmail,
          donorPhone: data.donorPhone,
          donationAmount: donationAmount,
          type,
          sevaId,
          projectPreference: data.projectPreference,
          timestamp: new Date().toISOString(),
        });
      }
      // Store donation data locally
      const donationData = {
        ...data,
        donationAmount,
        donationId: id,
        type,
        sevaId,
        timestamp: new Date().toISOString(),
      };
      const existingDonations = JSON.parse(localStorage.getItem("donations") || "[]");
      existingDonations.push(donationData);
      localStorage.setItem("donations", JSON.stringify(existingDonations));
      // Create payment link (now uses type and sevaId)
      const link = createPaymentLink(donationAmount, id, type, sevaId);
      setPaymentLink(link);
      setShowPayment(true);
      toast({
        title: "Donation Form Submitted",
        description: `Your donation ID is ${id}. Please complete the payment.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process donation. Please try again.",
        variant: "destructive",
      });
    }
  };

  const getIcon = () => {
    switch (type) {
      case "annadanam":
        return <Utensils className="h-6 w-6" />;
      case "development":
        return <Building className="h-6 w-6" />;
      default:
        return <Heart className="h-6 w-6" />;
    }
  };

  if (showPayment) {
    return (
      <Card className="bg-cream shadow-spiritual">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-deep-brown">Payment Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-deep-saffron rounded-full flex items-center justify-center mx-auto">
              <i className="fas fa-check text-white text-2xl"></i>
            </div>
            <div>
              <p className="text-lg font-semibold text-deep-brown">Thank you for your donation!</p>
              <p className="text-deep-brown/70">Your Donation ID: <span className="font-mono text-deep-saffron">{donationId}</span></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-light-saffron">
            <p className="text-center text-deep-brown mb-4">Complete your payment using the link below:</p>
            <Button 
              className="w-full bg-deep-saffron hover:bg-deep-saffron/90 text-white"
              onClick={() => window.open(paymentLink, "_blank")}
            >
              <i className="fas fa-credit-card mr-2"></i>
              Pay with Razorpay
            </Button>
            <p className="text-xs text-center text-deep-brown/60 mt-3">
              Secure payment powered by Razorpay
            </p>
          </div>

          <Button
            variant="outline"
            className="w-full border-peacock-green text-peacock-green hover:bg-peacock-green hover:text-white"
            onClick={() => setShowPayment(false)}
          >
            Make Another Donation
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-cream shadow-spiritual">
      <CardHeader className="text-center">
        <div className="w-12 h-12 bg-deep-saffron rounded-full flex items-center justify-center mx-auto mb-4">
          {getIcon()}
        </div>
        <CardTitle className="text-2xl text-deep-brown">{title}</CardTitle>
        <p className="text-deep-brown/70">{description}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="donorName" className="text-deep-brown">Full Name</Label>
            <Input
              id="donorName"
              placeholder="Enter your full name"
              className="bg-white border-light-saffron focus:ring-deep-saffron"
              {...form.register("donorName")}
            />
            {form.formState.errors.donorName && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.donorName.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="donorPhone" className="text-deep-brown">Phone Number</Label>
            <Input
              id="donorPhone"
              placeholder="+91 XXXXX XXXXX"
              className="bg-white border-light-saffron focus:ring-deep-saffron"
              {...form.register("donorPhone")}
            />
            {form.formState.errors.donorPhone && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.donorPhone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="donorEmail" className="text-deep-brown">Email Address</Label>
            <Input
              id="donorEmail"
              type="email"
              placeholder="your.email@example.com"
              className="bg-white border-light-saffron focus:ring-deep-saffron"
              {...form.register("donorEmail")}
            />
            {form.formState.errors.donorEmail && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.donorEmail.message}</p>
            )}
          </div>

          {showProjectSelection && (
            <div>
              <Label className="text-deep-brown">Project Preference</Label>
              <Select onValueChange={(value) => form.setValue("projectPreference", value)}>
                <SelectTrigger className="bg-white border-light-saffron">
                  <SelectValue placeholder="Choose a project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flooring">Main Sanctum Flooring</SelectItem>
                  <SelectItem value="roof">Roof Renovation</SelectItem>
                  <SelectItem value="mandap">Community Mandap</SelectItem>
                  <SelectItem value="general">General Development</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <Label htmlFor="gotra" className="text-deep-brown">Gotra (optional)</Label>
            <Input
              id="gotra"
              placeholder="Enter your gotra"
              className="bg-white border-light-saffron focus:ring-deep-saffron"
              {...form.register("gotra")}
            />
          </div>
          <div>
            <Label htmlFor="address" className="text-deep-brown">Address (optional)</Label>
            <Input
              id="address"
              placeholder="Enter your address"
              className="bg-white border-light-saffron focus:ring-deep-saffron"
              {...form.register("address")}
            />
          </div>
          <div>
            <Label htmlFor="specialNote" className="text-deep-brown">Special Note or Message (optional)</Label>
            <Input
              id="specialNote"
              placeholder="Enter any special note or message"
              className="bg-white border-light-saffron focus:ring-deep-saffron"
              {...form.register("specialNote")}
            />
          </div>
          {type !== "seva" && (
            <div>
              <Label className="text-deep-brown">Donation Amount</Label>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {defaultAmounts.map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    variant="outline"
                    className="border-light-saffron hover:bg-light-saffron"
                    onClick={() => form.setValue("donationAmount", amount)}
                  >
                    ₹{amount.toLocaleString()}
                  </Button>
                ))}
              </div>
              <Input
                type="number"
                placeholder="Enter custom amount"
                min="1"
                className="bg-white border-light-saffron focus:ring-deep-saffron"
                {...form.register("donationAmount", { valueAsNumber: true })}
              />
              {form.formState.errors.donationAmount && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.donationAmount.message}</p>
              )}
            </div>
          )}
          {/* For seva, donation amount is set automatically and not shown */}
          <Button
            type="submit"
            className="w-full bg-deep-saffron hover:bg-deep-saffron/90 text-white shadow-spiritual hover:shadow-spiritual-hover"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Processing...
              </>
            ) : (
              <>
                <Heart className="mr-2 h-4 w-4" />
                Proceed to Donation
              </>
            )}
          </Button>
        </form>

        {/* Show all validation errors for debugging */}
        {Object.keys(form.formState.errors).length > 0 && (
          <div className="text-red-600 text-sm mt-4">
            <strong>Validation Errors:</strong>
            <ul>
              {Object.entries(form.formState.errors).map(([key, err]) => (
                <li key={key}>{key}: {err?.message?.toString() || 'Error'}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-center text-sm text-deep-brown/60 mt-4">
          <p>You will receive a donation ID after form submission</p>
          {type === "development" && (
            <p>Format: BAL-DEV-YYYYMMDD-HHMMSS-MOBILENUMBER-AMOUNT</p>
          )}
          {type === "seva" && (
            <p>Format: BAL-SEVA-YYYYMMDD-HHMMSS-MOBILENUMBER-SEVANAME-AMOUNT</p>
          )}
          {type === "annadanam" && (
            <p>Format: BAL-MEAL-YYYYMMDD-HHMMSS-MOBILENUMBER-AMOUNT</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
