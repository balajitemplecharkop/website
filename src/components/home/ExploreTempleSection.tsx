import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Calendar, Camera, ArrowRight } from "lucide-react";

export default function ExploreTempleSection() {
  return (
    <section className="py-16 bg-spiritual-beige" aria-label="Explore Our Temple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-deep-brown mb-4">Explore Our Temple</h2>
          <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
            Discover the spiritual richness and community programs that make our temple a cornerstone of devotion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 hidden md:grid">
          <Link href="/guruji">
            <Card className="cursor-pointer shadow-spiritual hover:shadow-spiritual-hover transition-spiritual group bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-cream rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-spiritual">
                  <Users className="text-deep-saffron text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-deep-brown mb-2">Our Guruji</h3>
                <p className="text-deep-brown/70 text-sm mb-4">Learn about our spiritual leader and temple history</p>
                <div className="flex items-center justify-center text-deep-saffron text-sm">
                  <span>Meet Guruji</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/mantra">
            <Card className="cursor-pointer shadow-spiritual hover:shadow-spiritual-hover transition-spiritual group bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-light-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-spiritual">
                  <BookOpen className="text-peacock-green text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-deep-brown mb-2">Daily Mantras</h3>
                <p className="text-deep-brown/70 text-sm mb-4">Sacred chants for spiritual awakening and peace</p>
                <div className="flex items-center justify-center text-peacock-green text-sm">
                  <span>Chant Now</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/calendar">
            <Card className="cursor-pointer shadow-spiritual hover:shadow-spiritual-hover transition-spiritual group bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-light-saffron rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-spiritual">
                  <Calendar className="text-deep-saffron text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-deep-brown mb-2">Events</h3>
                <p className="text-deep-brown/70 text-sm mb-4">Festivals, celebrations, and special ceremonies</p>
                <div className="flex items-center justify-center text-deep-saffron text-sm">
                  <span>View Calendar</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/gallery">
            <Card className="cursor-pointer shadow-spiritual hover:shadow-spiritual-hover transition-spiritual group bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-cream rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-spiritual border-2 border-peacock-green">
                  <Camera className="text-peacock-green text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-deep-brown mb-2">Gallery</h3>
                <p className="text-deep-brown/70 text-sm mb-4">Sacred moments captured during festivals and rituals</p>
                <div className="flex items-center justify-center text-peacock-green text-sm">
                  <span>View Photos</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
        {/* Mobile Explore Our Temple - vertical stack */}
        <div className="flex flex-col space-y-6 md:hidden">
          <Link href="/guruji">
            <Card className="cursor-pointer shadow-spiritual active:shadow-spiritual-hover transition-spiritual bg-white">
              <CardContent className="p-7 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-4">
                  <Users className="text-deep-saffron text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-deep-brown mb-2">Our Guruji</h3>
                <p className="text-deep-brown/70 text-base mb-4">Learn about our spiritual leader and temple history</p>
                <div className="flex items-center justify-center text-deep-saffron text-base font-medium">
                  <span>Meet Guruji</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/mantra">
            <Card className="cursor-pointer shadow-spiritual active:shadow-spiritual-hover transition-spiritual bg-white">
              <CardContent className="p-7 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-light-green rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="text-peacock-green text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-deep-brown mb-2">Daily Mantras</h3>
                <p className="text-deep-brown/70 text-base mb-4">Sacred chants for spiritual awakening and peace</p>
                <div className="flex items-center justify-center text-peacock-green text-base font-medium">
                  <span>Chant Now</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/calendar">
            <Card className="cursor-pointer shadow-spiritual active:shadow-spiritual-hover transition-spiritual bg-white">
              <CardContent className="p-7 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-light-saffron rounded-full flex items-center justify-center mb-4">
                  <Calendar className="text-deep-saffron text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-deep-brown mb-2">Events</h3>
                <p className="text-deep-brown/70 text-base mb-4">Festivals, celebrations, and special ceremonies</p>
                <div className="flex items-center justify-center text-deep-saffron text-base font-medium">
                  <span>View Calendar</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/gallery">
            <Card className="cursor-pointer shadow-spiritual active:shadow-spiritual-hover transition-spiritual bg-white">
              <CardContent className="p-7 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-4 border-2 border-peacock-green">
                  <Camera className="text-peacock-green text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-deep-brown mb-2">Gallery</h3>
                <p className="text-deep-brown/70 text-base mb-4">Sacred moments captured during festivals and rituals</p>
                <div className="flex items-center justify-center text-peacock-green text-base font-medium">
                  <span>View Photos</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
