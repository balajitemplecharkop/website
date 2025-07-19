import { razorpayLinks, sevaLinks } from "./razorpayLinks";

export interface DonationData {
  donorName: string;
  donorPhone: string;
  donorEmail: string;
  donationAmount: number;
  donationId: string;
  type: string;
  sevaId?: string;
  projectPreference?: string;
  timestamp: string;
}

export function generateDonationId(type: string, sevaName: string | undefined, amount: number | undefined, donorPhone: string | undefined): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const hour = String(today.getHours()).padStart(2, '0');
  const minute = String(today.getMinutes()).padStart(2, '0');
  const second = String(today.getSeconds()).padStart(2, '0');

  // Format mobile number (last 10 digits)
  let mobile = donorPhone ? donorPhone.replace(/\D/g, '').slice(-10) : 'XXXXXXXXXX';
  // Format seva name for ID
  let sevaPart = sevaName ? sevaName.toUpperCase().replace(/\s+/g, '').slice(0, 12) : '';
  // Format amount
  let amt = amount ? Math.round(amount) : 0;

  if (type === 'development') {
    return `BAL-DEV-${year}${month}${day}-${hour}${minute}${second}-${mobile}-${amt}`;
  } else if (type === 'seva') {
    return `BAL-SEVA-${year}${month}${day}-${hour}${minute}${second}-${mobile}-${sevaPart}-${amt}`;
  } else if (type === 'annadanam' || type === 'meal') {
    return `BAL-MEAL-${year}${month}${day}-${hour}${minute}${second}-${mobile}-${amt}`;
  } else {
    // fallback
    return `BAL-OTH-${year}${month}${day}-${hour}${minute}${second}-${mobile}-${amt}`;
  }
}

export function createPaymentLink(amount: number, donationId: string, type: string, sevaId?: string): string {
  // For seva, use the specific seva link if available
  if (type === "seva" && sevaId && sevaLinks[sevaId]) {
    return sevaLinks[sevaId];
  }
  // Otherwise, use the general type link
  return razorpayLinks[type] || "https://razorpay.com";
}

export function getDonationHistory(): DonationData[] {
  return JSON.parse(localStorage.getItem("donations") || "[]");
}

export function getDonationById(id: string): DonationData | null {
  const donations = getDonationHistory();
  return donations.find(donation => donation.donationId === id) || null;
}
