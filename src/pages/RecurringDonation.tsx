import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lock, Heart, User, Mail, Phone, Check } from "lucide-react";

// Map donation amounts to Razorpay plan_ids (replace with your actual plan_ids)
const PLAN_ID_MAP: Record<string, string> = {
  '252': 'plan_QyTXjTnTIcHXVA',
  '504': 'plan_QyTYLgfwXLoGUy',
  '1008': 'plan_QyTZ8Uud9lUyPF',
  '2016': 'plan_QyTZrXSRTmiEyP',
  '4032': 'plan_QyTaVmqsigcfHd',
  '8064': 'plan_QyTb06x5uH2um3',
};

export default function RecurringDonation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "500",
    cycles: 12, // default to 12 months
    pan: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [accepted, setAccepted] = useState(false);
  const cycleOptions = [12, 24, 36, 48, 60, 72];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value });
  }

  // Removed handleFrequencyChange as 'frequency' is not a property of form

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const plan_id = PLAN_ID_MAP[form.amount];
    if (!plan_id) {
      setError('Invalid donation amount selected.');
      return;
    }
    // Phone number validation: must be 10 digits, numeric only
    if (!/^\d{10}$/.test(form.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!form.cycles || ![12,24,36,48,60,72].includes(form.cycles)) {
      setError('Please select a valid number of cycles.');
      return;
    }
    try {
      const res = await fetch('https://api.tirupatibalajitemplecharkop.com/api/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan_id, total_count: form.cycles, customer: { name: form.name, email: form.email, contact: form.phone, pan: form.pan } }),
      });
      const data = await res.json();
      if (!data.id) throw new Error(data.error || 'Failed to create subscription');
      // Load Razorpay script if not already loaded
      if (!(window as any).Razorpay) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }
      const options = {
        key: 'rzp_test_tcBLMcyRdp7UW6', // Replace with your Razorpay key
        subscription_id: data.id,
        name: 'Shree Balaji Padmavati Foundation',
        description: 'Recurring Donation',
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        theme: { color: '#FF9933' },
        handler: function (response: any) {
          // Verify payment signature with backend
          fetch('https://api.tirupatibalajitemplecharkop.com/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_subscription_id: response.razorpay_subscription_id,
              razorpay_signature: response.razorpay_signature,
            }),
          })
            .then(res => res.json())
            .then(data => {
              if (data.success) {
                window.location.href = '/recurring-donation-success';
              } else {
                setError('Payment verification failed!');
              }
            })
            .catch(() => setError('Payment verification failed!'));
        },
      };
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-spiritual-beige px-4">
        <Card className="bg-white rounded-2xl shadow-spiritual p-8 max-w-md w-full flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-peacock-green rounded-full flex items-center justify-center mb-4">
            <Heart className="text-white w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-deep-brown mb-2">Thank You for Your Support!</h1>
          <p className="text-base text-deep-brown/80 mb-6">
            Your recurring donation means a lot to us. You will receive a confirmation email soon.
          </p>
          <Button className="bg-peacock-green text-white px-8 py-3 rounded-xl font-semibold shadow-spiritual hover:bg-peacock-green/90 transition" onClick={() => setSubmitted(false)}>
            Make Another Donation
          </Button>
        </Card>
      </div>
    );
  }

  const presetAmounts = [252, 504, 1008, 2016, 4032, 8064];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light-saffron/40 via-white to-peacock-green/10 py-8 px-2">
      <div className="w-full max-w-lg mx-auto">
        <Card className="rounded-[2.5rem] shadow-2xl border-2 border-light-saffron/60 bg-gradient-to-br from-white via-light-saffron/30 to-peacock-green/10 p-2 md:p-4 backdrop-blur-md">
          <CardHeader className="text-center pb-2">
            <div className="w-14 h-14 full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-red-500 w-7 h-7" />
          </div>
            <CardTitle className="text-3xl font-bold text-deep-brown mb-1">Recurring Donation</CardTitle>
            <p className="text-deep-brown/70 mt-2 mb-2 text-base">Support us with a monthly Annadanam donation. Your recurring gift helps us serve fresh, sattvic meals to those in need, every month.</p>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info Group */}
              <div className="space-y-4 bg-light-saffron/10 rounded-xl p-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-light-saffron w-5 h-5" />
              <Input
                id="name"
                name="name"
                    placeholder="Full Name"
                    className="pl-10 bg-white border-light-saffron focus:ring-deep-saffron rounded-full py-3"
                value={form.name}
                onChange={handleChange}
                required
                    aria-label="Full Name"
              />
            </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-light-saffron w-5 h-5" />
              <Input
                id="email"
                name="email"
                type="email"
                    placeholder="Email Address"
                    className="pl-10 bg-white border-light-saffron focus:ring-deep-saffron rounded-full py-3"
                value={form.email}
                onChange={handleChange}
                required
                    aria-label="Email Address"
              />
            </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-light-saffron w-5 h-5" />
              <Input
                id="phone"
                name="phone"
                type="tel"
                    placeholder="Phone Number"
                    className="pl-10 bg-white border-light-saffron focus:ring-deep-saffron rounded-full py-3"
                value={form.phone}
                onChange={handleChange}
                required
                    aria-label="Phone Number"
                  />
                </div>
                {/* PAN Group moved here */}
                <div className="flex flex-col">
                  <div className="relative flex items-center">
                    <span className="absolute left-3 flex items-center h-full text-light-saffron"><Lock className="w-5 h-5" /></span>
                    <Input
                      id="pan"
                      name="pan"
                      placeholder="PAN Number(Optional)"
                      className="pl-10 bg-white border-light-saffron focus:ring-deep-saffron rounded-full py-3"
                      value={form.pan}
                      onChange={handleChange}
                      aria-label="PAN Number"
              />
            </div>
                  <p className="text-xs text-deep-brown/60 mt-1 ml-2">PAN Number is required for donations above ₹10,000 or to receive 80G certificate.</p>
                </div>
              </div>
              {/* Donation Amount Group */}
              <div className="space-y-2">
                <Label className="text-deep-brown font-semibold">Donation Amount (INR)</Label>
                <div className="flex flex-wrap gap-2 justify-center">
                {presetAmounts.map((amount) => (
                    <button
                    key={amount}
                    type="button"
                      className={`transition-all duration-150 px-6 py-2 rounded-full border-2 flex items-center gap-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-deep-saffron/60 shadow-sm
                        ${form.amount === amount.toString() ? 'bg-light-saffron border-deep-saffron text-deep-brown scale-105 ring-2 ring-deep-saffron' : 'bg-white border-light-saffron text-peacock-green hover:bg-light-saffron/60'}
                      `}
                    onClick={() => setForm({ ...form, amount: amount.toString() })}
                      aria-pressed={form.amount === amount.toString()}
                  >
                    ₹{amount.toLocaleString()}
                      {form.amount === amount.toString() && <Check className="w-4 h-4 ml-1 text-deep-saffron" />}
                    </button>
                ))}
              </div>
              {!form.amount && (
                <p className="text-red-500 text-sm mt-1">Please select a donation amount.</p>
              )}
            </div>
              {/* Cycles Group */}
              <div className="space-y-2">
                <Label className="text-deep-brown font-semibold">Number of Cycles (Months)</Label>
                <div className="flex flex-wrap gap-2 justify-center">
                  {cycleOptions.map((cycle) => (
                    <button
                      key={cycle}
                      type="button"
                      className={`transition-all duration-150 px-5 py-2 rounded-full border-2 flex items-center gap-1 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-deep-saffron/60 shadow-sm
                        ${form.cycles === cycle ? 'bg-light-saffron border-deep-saffron text-deep-brown scale-105 ring-2 ring-deep-saffron' : 'bg-white border-light-saffron text-peacock-green hover:bg-light-saffron/60'}
                      `}
                      onClick={() => setForm({ ...form, cycles: cycle })}
                      aria-pressed={form.cycles === cycle}
                    >
                      {cycle} mo
                      {form.cycles === cycle && <Check className="w-4 h-4 ml-1 text-deep-saffron" />}
                    </button>
                  ))}
                </div>
                {!form.cycles && (
                  <p className="text-red-500 text-sm mt-1">Please select the number of cycles.</p>
                )}
              </div>
              {/* Agreement Checkbox */}
              <div className="flex items-start gap-2 mb-2">
                <input
                  type="checkbox"
                  id="auto-deduct-agree"
                  checked={accepted}
                  onChange={e => setAccepted(e.target.checked)}
                  className="mt-1 accent-[#FF9933] w-5 h-5 rounded focus:ring-2 focus:ring-deep-saffron/60"
                  required
                />
                <label htmlFor="auto-deduct-agree" className="text-xs text-deep-brown/80 select-none cursor-pointer">
                  I accept that the donation will be deducted automatically every month, and I will receive the invoice on the provided WhatsApp number and email instantly after each deduction. By accepting, I agree to the above statements.
                </label>
            </div>
            {error && <div className="text-red-600 text-center mb-4">{error}</div>}
              <Button
                type="submit"
                className="w-full bg-[#FF9933] hover:bg-[#e67c1f] text-white shadow-lg text-lg py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-deep-saffron/60 mt-2 disabled:bg-[#FF9933] disabled:opacity-60 disabled:cursor-not-allowed"
                aria-label="Proceed to Secure Payment"
                disabled={!form.name || !form.email || !form.phone || !form.amount || !form.cycles || !accepted}
              >
                <Lock className="mr-1 h-5 w-5" />
                Proceed to Secure Payment
            </Button>
              {/* Divider and Trust Badges */}
              <div className="my-6 border-t border-light-saffron/40"></div>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                <div className="flex items-center gap-2 text-peacock-green font-semibold text-sm bg-white/80 px-3 py-2 rounded-full shadow">
                  <i className="fas fa-certificate text-lg"></i> 80G Certificate Instantly
                </div>
                <div className="flex items-center gap-2 text-deep-brown/70 text-xs bg-white/80 px-3 py-2 rounded-full shadow">
                  <i className="fas fa-lock text-base"></i> 100% Secure Payment
                </div>
              </div>
          </form>
        </CardContent>
      </Card>
      </div>
    </div>
  );
} 