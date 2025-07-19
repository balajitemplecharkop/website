import { generateDonationId, createPaymentLink, getDonationHistory, getDonationById } from "@/lib/donations";

export function useDonation() {
  return {
    generateDonationId,
    createPaymentLink,
    getDonationHistory,
    getDonationById,
  };
}
