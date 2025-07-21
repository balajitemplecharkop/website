import { Button } from "@/components/ui/button";
import GalleryLightbox from "@/components/GalleryLightbox";
import { Helmet } from 'react-helmet-async';

const galleryImages = [
  {
    id: "1",
    src: "/images/photo-1564507592333-c60657eea523.webp",
    alt: "Temple exterior during golden hour",
    title: "Temple Exterior",
    description: "Beautiful view of our temple during the golden hour",
  },
  {
    id: "2",
    src: "/images/photo-1596797038530-2c107229654b.webp",
    alt: "Evening aarti ceremony with devotees",
    title: "Evening Aarti",
    description: "Devotees participating in the sacred evening aarti ceremony",
  },
  {
    id: "3",
    src: "/images/photo-1545558014-8692077e9b5c.webp",
    alt: "Festival decorations with flowers and rangoli",
    title: "Festival Celebrations",
    description: "Temple beautifully decorated during festival season",
  },
  {
    id: "4",
    src: "/images/photo-1578662996442-48f60103fc96.webp",
    alt: "Annadanam food distribution to community",
    title: "Annadanam Service",
    description: "Daily food distribution service to the community",
  },
  {
    id: "5",
    src: "/images/photo-1571115764595-644a1f56a55c.webp",
    alt: "Temple interior with elaborate decorations",
    title: "Sacred Interior",
    description: "Interior view showcasing the divine atmosphere",
  },
  {
    id: "6",
    src: "/images/photo-1544716278-ca5e3f4abd8c.webp",
    alt: "Cultural dance performance by children",
    title: "Cultural Programs",
    description: "Children performing traditional dances during special events",
  },
];

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery - Balaji Mandir Charkop</title>
        <meta name="description" content="Explore the gallery of Balaji Mandir Charkop. View photos of festivals, rituals, and sacred moments." />
        <meta property="og:title" content="Gallery - Balaji Mandir Charkop" />
        <meta property="og:description" content="Explore the gallery of Balaji Mandir Charkop. View photos of festivals, rituals, and sacred moments." />
        <meta property="og:image" content="https://tirupatibalajitemplecharkop.com/images/13.webp" />
        <meta property="og:site_name" content="Balaji Mandir Charkop" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirupatibalajitemplecharkop.com/gallery" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery - Balaji Mandir Charkop" />
        <meta name="twitter:description" content="Explore the gallery of Balaji Mandir Charkop. View photos of festivals, rituals, and sacred moments." />
        <meta name="twitter:image" content="https://tirupatibalajitemplecharkop.com/images/13.webp" />
        <meta name="theme-color" content="#eab308" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tirupatibalajitemplecharkop.com/gallery" />
        <link rel="icon" type="image/webp" href="/images/pngtree-balaji-tilak-png-image_6538668.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/pngtree-balaji-tilak-png-image_6538668.webp" />
      </Helmet>
      {/* Ensure images in GalleryLightbox are optimized with loading="lazy" and width/height attributes. */}
      <div className="pt-16">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-deep-brown mb-4">Temple Gallery</h2>
              <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
                Experience the divine beauty of our temple through these sacred moments captured during festivals, daily rituals, and special ceremonies.
              </p>
            </div>

            <GalleryLightbox images={galleryImages} />

            <div className="text-center mt-12">
              <Button className="bg-peacock-green hover:bg-peacock-green/90 text-white px-8 py-3 rounded-xl font-semibold shadow-spiritual">
                <i className="fas fa-images mr-2"></i>
                View Full Gallery
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
