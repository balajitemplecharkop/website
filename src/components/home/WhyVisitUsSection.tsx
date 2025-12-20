import { Star, Utensils, Calendar, Users } from "lucide-react";

export default function WhyVisitUsSection() {
  return (
    <section className="py-12 bg-cream" aria-label="Why Visit Us">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-3">Why Visit Us?</h2>
          <p className="text-lg text-deep-brown/80 max-w-2xl mx-auto">Experience more than just a temple—discover a vibrant community, spiritual growth, and acts of compassion that make every visit memorable.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 hidden md:grid">
          <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center group hover:shadow-spiritual-hover transition-spiritual">
            <Star className="text-deep-saffron text-3xl mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg text-deep-brown mb-2">Spiritual Sanctuary</h3>
            <p className="text-deep-brown/70 text-sm">Find peace, purpose, and blessings in a serene, sacred environment.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center group hover:shadow-spiritual-hover transition-spiritual">
            <Utensils className="text-peacock-green text-3xl mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg text-deep-brown mb-2">Community Service</h3>
            <p className="text-deep-brown/70 text-sm">Join hands in Annadanam and seva, making a real difference in lives every day.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center group hover:shadow-spiritual-hover transition-spiritual">
            <Calendar className="text-deep-saffron text-3xl mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg text-deep-brown mb-2">Festivals & Events</h3>
            <p className="text-deep-brown/70 text-sm">Celebrate vibrant festivals, rituals, and cultural events with us.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center group hover:shadow-spiritual-hover transition-spiritual">
            <Users className="text-peacock-green text-3xl mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg text-deep-brown mb-2">Welcoming Community</h3>
            <p className="text-deep-brown/70 text-sm">Be part of a warm, inclusive family—volunteer, learn, and grow together.</p>
          </div>
        </div>
        {/* Mobile Why Visit Us - vertical stack */}
        <div className="flex flex-col space-y-6 md:hidden">
          <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center">
            <Star className="text-deep-saffron text-4xl mb-4" />
            <h3 className="font-semibold text-lg text-deep-brown mb-2">Spiritual Sanctuary</h3>
            <p className="text-deep-brown/70 text-base">Find peace, purpose, and blessings in a serene, sacred environment.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center">
            <Utensils className="text-peacock-green text-4xl mb-4" />
            <h3 className="font-semibold text-lg text-deep-brown mb-2">Community Service</h3>
            <p className="text-deep-brown/70 text-base">Join hands in Annadanam and seva, making a real difference in lives every day.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center">
            <Calendar className="text-deep-saffron text-4xl mb-4" />
            <h3 className="font-semibold text-lg text-deep-brown mb-2">Festivals & Events</h3>
            <p className="text-deep-brown/70 text-base">Celebrate vibrant festivals, rituals, and cultural events with us.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-spiritual p-6 flex flex-col items-center text-center">
            <Users className="text-peacock-green text-4xl mb-4" />
            <h3 className="font-semibold text-lg text-deep-brown mb-2">Welcoming Community</h3>
            <p className="text-deep-brown/70 text-base">Be part of a warm, inclusive family—volunteer, learn, and grow together.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
