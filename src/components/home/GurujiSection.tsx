import { Link } from "wouter";

export default function GurujiSection() {
  return (
    <section className="py-12 bg-spiritual-beige" aria-label="About Guruji">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <img
            src="/images/Bhajan-Yajamaan.webp"
            alt="Guruji - Spiritual Guru"
            className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-spiritual object-cover"
            loading="lazy"
            width="400"
            height="600"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">Our Guruji</h2>
          <p className="text-lg text-deep-brown/80 mb-4">
            From a near-death experience to a divine calling, Guruji’s journey is a testament to faith, resilience, and service. Surviving a life-threatening accident, guided by a mysterious monk, and overcoming impossible odds, Guruji built the Balaji Temple in Charkop and dedicated his life to feeding the needy and serving the community.
          </p>
          <div>
            <Link href="/guruji">
              <button className="bg-deep-saffron hover:bg-deep-saffron/90 text-white px-6 py-3 rounded font-semibold shadow-spiritual transition-spiritual">
                Read Complete Story
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
