import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase } from "lucide-react";
import careersData from "@/data/careers.json";

export default function Careers() {
    return (
        <>
            <Helmet>
                <title>Careers & Volunteering - Balaji Mandir Charkop</title>
                <meta name="description" content="Join our team at Balaji Mandir Charkop. Explore career opportunities and volunteer positions to serve the divine." />
            </Helmet>

            <div className="pt-16 min-h-screen bg-spiritual-beige">
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-deep-brown mb-2">Join Our Team</h1>
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-1 bg-peacock-green rounded-full"></div>
                            </div>
                            <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
                                "Service to mankind is service to God." <br />
                                Become a part of our mission to preserve tradition and serve the community.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                            {careersData.map((job) => (
                                <Card key={job.id} className="bg-white hover:shadow-spiritual-hover transition-spiritual border-light-saffron">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle className="text-2xl text-deep-brown font-bold mb-1">{job.title}</CardTitle>
                                                <div className="text-peacock-green text-sm font-medium mb-2">{job.department}</div>
                                            </div>
                                            <Badge variant="secondary" className="bg-light-saffron text-deep-brown hover:bg-deep-saffron hover:text-white">
                                                {job.type}
                                            </Badge>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-deep-brown/60 mt-2">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="h-4 w-4" />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                {job.type}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-deep-brown/80 mb-4">
                                            {job.description}
                                        </p>

                                        <div className="mb-6">
                                            <h4 className="font-semibold text-deep-brown mb-2 text-sm uppercase tracking-wide">Requirements:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-deep-brown/70">
                                                {job.requirements.map((req, idx) => (
                                                    <li key={idx}>{req}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Button className="w-full bg-peacock-green hover:bg-peacock-green/90 text-white" asChild>
                                            <a
                                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=contact@tirupatibalajitemplecharkop.com&su=Application for ${job.title}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Apply Now
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {careersData.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-lg text-deep-brown/60">There are currently no open positions. However, we always welcome volunteers.</p>
                                <Button className="mt-4 bg-deep-saffron text-white" asChild>
                                    <a href="/contact">Contact Us</a>
                                </Button>
                            </div>
                        )}

                        <div className="mt-16 bg-cream rounded-2xl p-8 text-center shadow-inner border border-light-saffron/30">
                            <h3 className="text-2xl font-bold text-deep-brown mb-3">General Volunteering</h3>
                            <p className="text-deep-brown/70 max-w-2xl mx-auto mb-6">
                                If you don't see a role that fits but still wish to offer your Seva, please reach out to us. We involve volunteers in crowd management, garland making, cleaning, and tech support.
                            </p>
                            <Button variant="outline" className="border-peacock-green text-peacock-green hover:bg-peacock-green hover:text-white" asChild>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@tirupatibalajitemplecharkop.com&su=Volunteer Application"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Express Interest
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
