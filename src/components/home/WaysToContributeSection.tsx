import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Utensils, Hammer, Heart, Users } from "lucide-react";

export default function WaysToContributeSection() {
  return (
    <section className="py-16 bg-white" aria-label="Ways to Contribute">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-deep-brown mb-4">Ways to Contribute</h2>
          <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
            Join us in our mission to serve the community and spread spiritual wisdom through various forms of seva.
          </p>
        </div>

        {/* Ways to Contribute Cards */}
        <div className="hidden md:flex w-full justify-center gap-12 pt-8">
          {/* Annadanam */}
          <Card className="max-w-xs flex flex-col items-center text-center p-6 rounded-2xl border border-light-saffron shadow-md">
            <div className="w-12 h-12 rounded-full bg-deep-saffron flex items-center justify-center mb-4">
              <Utensils className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-deep-brown mb-2">Annadanam</h3>
            <p className="text-deep-brown/80 mb-4">Support our daily food distribution program serving 500+ meals.</p>
            <Link href="/annadanam" className="w-full">
            <Button className="w-full bg-deep-saffron hover:bg-deep-saffron/90 text-white rounded-lg font-semibold py-3 shadow transition-all">
              Contribute Now
            </Button>
            </Link>
          </Card>
          {/* Temple Seva */}
          <Card className="max-w-xs flex flex-col items-center text-center p-6 rounded-2xl border border-light-saffron shadow-md">
            <div className="w-12 h-12 rounded-full bg-peacock-green flex items-center justify-center mb-4">
              <Heart className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-deep-brown mb-2">Temple Seva</h3>
            <p className="text-deep-brown/80 mb-4">Participate in sacred rituals and poojas for divine blessings.</p>
            <Link href="/seva" className="w-full">
            <Button className="w-full bg-peacock-green hover:bg-peacock-green/90 text-white rounded-lg font-semibold py-3 shadow transition-all">
              Book Seva
            </Button>
            </Link>
          </Card>
          {/* Development */}
          <Card className="max-w-xs flex flex-col items-center text-center p-6 rounded-2xl border border-light-saffron shadow-md">
            <div className="w-12 h-12 rounded-full bg-light-saffron flex items-center justify-center mb-4">
              <Hammer className="text-deep-saffron w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-deep-brown mb-2">Development</h3>
            <p className="text-deep-brown/80 mb-4">Help expand and beautify our sacred temple infrastructure.</p>
            <Link href="/development" className="w-full">
            <Button variant="outline" className="w-full border-deep-saffron text-deep-saffron rounded-lg font-semibold py-3 shadow transition-all hover:bg-deep-saffron hover:text-white">
              Support Project
            </Button>
            </Link>
          </Card>
          {/* Join Our Family */}
          <Card className="max-w-xs flex flex-col items-center text-center p-6 rounded-2xl border border-light-saffron shadow-md">
            <div className="w-12 h-12 rounded-full bg-deep-saffron/20 flex items-center justify-center mb-4">
              <Users className="text-deep-saffron w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-deep-brown mb-2">Join Our Family</h3>
            <p className="text-deep-brown/80 mb-4">Become a volunteer or join us with your unique skills to help serve the community and the divine mission.</p>
            <Link href="/join-us" className="w-full">
            <Button className="w-full bg-deep-saffron hover:bg-deep-saffron/90 text-white rounded-lg font-semibold py-3 shadow transition-all">
              Join as Family
            </Button>
            </Link>
          </Card>
        </div>
        {/* Ways to Contribute Cards - Mobile */}
        <div className="flex flex-col space-y-6 md:hidden">
          {/* Annadanam Card */}
          <Card className="max-w-sm mx-auto p-6 rounded-2xl border border-light-saffron shadow-md flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-deep-saffron flex items-center justify-center mb-4">
              <Utensils className="text-white w-6 h-6" />
                </div>
            <h3 className="text-xl font-bold text-deep-brown mb-2">Annadanam</h3>
            <p className="text-deep-brown/80 mb-4">Support our daily food distribution program serving 500+ meals.</p>
            <Link href="/annadanam" className="w-full">
            <Button className="w-full bg-deep-saffron hover:bg-deep-saffron/90 text-white rounded-lg font-semibold py-3 shadow transition-all">
                  Contribute Now
                </Button>
            </Link>
            </Card>
          {/* Temple Seva Card */}
          <Card className="max-w-sm mx-auto p-6 rounded-2xl border border-light-saffron shadow-md flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-peacock-green flex items-center justify-center mb-4">
              <Heart className="text-white w-6 h-6" />
                </div>
            <h3 className="text-xl font-bold text-deep-brown mb-2">Temple Seva</h3>
            <p className="text-deep-brown/80 mb-4">Participate in sacred rituals and poojas for divine blessings.</p>
            <Link href="/seva" className="w-full">
            <Button className="w-full bg-peacock-green hover:bg-peacock-green/90 text-white rounded-lg font-semibold py-3 shadow transition-all">
                  Book Seva
                </Button>
            </Link>
            </Card>
          {/* Development Card */}
          <Card className="max-w-sm mx-auto p-6 rounded-2xl border border-light-saffron shadow-md flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-light-saffron border-2 border-deep-saffron flex items-center justify-center mb-4">
              <Hammer className="text-deep-saffron w-6 h-6" />
                </div>
            <h3 className="text-xl font-bold text-deep-brown mb-2">Development</h3>
            <p className="text-deep-brown/80 mb-4">Help expand and beautify our sacred temple infrastructure.</p>
            <Link href="/development" className="w-full">
            <Button variant="outline" className="w-full border-deep-saffron text-deep-saffron rounded-lg font-semibold py-3 shadow transition-all hover:bg-deep-saffron hover:text-white">
                  Support Project
                </Button>
            </Link>
            </Card>
          {/* Join Our Family Card */}
          <Card className="max-w-sm mx-auto p-6 rounded-2xl border border-light-saffron shadow-md flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-deep-saffron/20 border-2 border-deep-saffron flex items-center justify-center mb-4">
              <Users className="text-deep-saffron w-6 h-6" />
                </div>
            <h3 className="text-xl font-bold text-deep-brown mb-2">Join Our Family</h3>
            <p className="text-deep-brown/80 mb-4">Become a volunteer or join us with your unique skills to help serve the community and the divine mission.</p>
            <Link href="/join-us" className="w-full">
            <Button className="w-full bg-deep-saffron hover:bg-deep-saffron/90 text-white rounded-lg font-semibold py-3 shadow transition-all">
                  Join as Family
                </Button>
            </Link>
            </Card>
        </div>
      </div>
    </section>
  );
}
