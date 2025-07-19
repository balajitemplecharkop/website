// Map donation types to their Razorpay payment links
export const razorpayLinks: Record<string, string> = {
  annadanam: "https://rzp.io/l/your-annadanam-link",
  development: "https://rzp.io/l/your-development-link",
  seva: "https://rzp.io/l/your-seva-link",
  // Add more as needed
};

// Optionally, for sevas with IDs:
export const sevaLinks: Record<string, string> = {
  // Example: 'seva-id-1': 'https://rzp.io/l/seva1-link',
  // Add your seva-specific links here
}; 