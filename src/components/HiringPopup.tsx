import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import { useLocation } from "wouter";

export function HiringPopup() {
    const [open, setOpen] = useState(false);
    const [, setLocation] = useLocation();

    useEffect(() => {
        const hasSeen = sessionStorage.getItem("hiring-popup-seen");

        if (!hasSeen) {
            const timer = setTimeout(() => {
                setOpen(true);
                sessionStorage.setItem("hiring-popup-seen", "true");
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleViewCareers = () => {
        setOpen(false);
        setLocation("/careers");
    };

    const handleDismiss = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                className="
                    sm:max-w-[425px]
                    mx-2
                    bg-white border-peacock-green/20 shadow-spiritual
                    p-0 overflow-hidden rounded-xl
                    animate-in fade-in-0 zoom-in-95
                "
            >
                <div className="bg-peacock-green/10 p-6 pb-2">
                    <DialogHeader>
                        <div className="mx-auto bg-peacock-green/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Briefcase className="h-6 w-6 text-peacock-green" />
                        </div>

                        <DialogTitle
                            className="text-center text-xl font-bold text-deep-brown"
                            aria-label="We Are Hiring"
                        >
                            We Are Hiring!
                        </DialogTitle>

                        <DialogDescription className="text-center text-deep-brown/80 mt-2">
                            Join our team and help serve thousands of devotees every day.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <div className="px-6 py-4 space-y-3 text-center">
                    <p className="text-sm text-deep-brown/90 leading-relaxed">
                        We are inviting dedicated individuals for roles in{" "}
                        <span className="font-semibold text-peacock-green">
                            Ritual Services, Administration, Facility Management, and Support Staff
                        </span>.
                    </p>
                    <p className="text-sm text-deep-brown/80 italic">
                        "Work is Worship"
                    </p>
                </div>

                <DialogFooter className="px-6 pb-6 pt-2 flex flex-col gap-3">
                    <Button
                        aria-label="View Job Openings"
                        className="
                            w-full bg-peacock-green text-white font-semibold text-md h-11
                            transition-all duration-200
                            hover:bg-peacock-green/90 hover:scale-[1.02]
                        "
                        onClick={handleViewCareers}
                    >
                        View Openings
                    </Button>

                    <Button
                        aria-label="Close Hiring Popup"
                        variant="ghost"
                        className="w-full text-deep-brown/60 hover:text-deep-brown hover:bg-stone-100"
                        onClick={handleDismiss}
                    >
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
