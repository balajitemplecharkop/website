import { useState, useEffect, useMemo } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Utensils, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";

export function AnnadanamPopup() {
    const [open, setOpen] = useState(false);
    const [, setLocation] = useLocation();

    // (5) Memoized recurring donation points
    const points = useMemo(
        () => [
            "Serve healthy meals to devotees daily",
            "Prepare prasadam & naivedyam",
            "Support festival Annadanam",
            "Maintain the kitchen & supplies",
        ],
        []
    );

    useEffect(() => {
        const hasSeen = sessionStorage.getItem("annadanam-popup-seen");

        if (!hasSeen) {
            const timer = setTimeout(() => {
                setOpen(true);
                sessionStorage.setItem("annadanam-popup-seen", "true");
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleDonate = () => {
        setOpen(false);
        setLocation("/recurring-donation");
    };

    const handleDismiss = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                className="
                    sm:max-w-[425px]
                    mx-2                     /* (3) Mobile padding improvement */
                    bg-cream border-light-saffron shadow-spiritual
                    p-0 overflow-hidden rounded-xl
                    animate-in fade-in-0 zoom-in-95  /* (2) Smooth popup animation */
                "
            >
                <div className="bg-deep-saffron/10 p-6 pb-2">
                    <DialogHeader>
                        <div className="mx-auto bg-deep-saffron/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Utensils className="h-6 w-6 text-deep-saffron" />
                        </div>

                        <DialogTitle
                            className="text-center text-xl font-bold text-deep-brown"
                            aria-label="Support Monthly Annadanam Seva" /* (4) Accessibility */
                        >
                            <span className="mr-2">🙏</span>
                            Support Monthly Annadanam Seva
                        </DialogTitle>

                        <DialogDescription className="text-center text-deep-brown/80 mt-2">
                            Annadanam feeding devotees is one of the most sacred forms of seva.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <div className="px-6 py-4 space-y-4">
                    <p className="text-sm font-medium text-deep-brown">
                        With a recurring monthly donation, you help us:
                    </p>

                    <ul className="space-y-3">
                        {points.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-sm text-deep-brown/80"
                            >
                                <CheckCircle2 className="h-5 w-5 text-peacock-green shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="bg-peacock-green/5 p-3 rounded-lg border border-peacock-green/10 flex gap-3 items-start mt-4">
                        <span className="text-lg">📩</span>
                        <p className="text-xs text-peacock-green font-medium">
                            You will receive automated 80G donation receipts on WhatsApp and Email every month.
                        </p>
                    </div>

                    <p className="text-center text-sm font-semibold text-deep-brown pt-2">
                        Would you like to contribute monthly to Annadanam Seva?
                    </p>
                </div>

                {/* (7) Cleaner CTA spacing + mobile-friendly */}
                <DialogFooter className="px-6 pb-6 pt-2 flex flex-col gap-3">
                    <Button
                        aria-label="Start Monthly Donation"   /* (4) Accessibility */
                        className="w-full bg-deep-saffron hover:bg-deep-saffron/90 text-white font-semibold text-md h-11"
                        onClick={handleDonate}
                    >
                        Start Monthly Donation
                    </Button>

                    <Button
                        aria-label="Maybe Later"
                        variant="ghost"
                        className="w-full text-deep-brown/60 hover:text-deep-brown hover:bg-stone-100"
                        onClick={handleDismiss}
                    >
                        Maybe Later
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
