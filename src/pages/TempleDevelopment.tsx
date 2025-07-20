import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from '@/components/ui/button';
import devData from "@/data/temple-development.json";
import { Helmet } from 'react-helmet-async';

export default function TempleDevelopment() {
  const { totalRaised, totalTarget, estimatedCompletion, projects } = devData;
  const overallProgress = Math.round((totalRaised / totalTarget) * 100);

  return (
    <>
      <Helmet>
        <title>Temple Development - Balaji Mandir Charkop</title>
        <meta name="description" content="Support the expansion and beautification of Balaji Mandir Charkop. Contribute to our sacred infrastructure projects." />
        <meta property="og:title" content="Temple Development - Balaji Mandir Charkop" />
        <meta property="og:description" content="Support the expansion and beautification of Balaji Mandir Charkop. Contribute to our sacred infrastructure projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirupatibalajitemplecharkop.com/development" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" />
      </Helmet>
      <div className="pt-16">
        <section className="py-16 bg-spiritual-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-deep-brown mb-2">Temple Development</h2>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-1 bg-peacock-green rounded-full"></div>
              </div>
              <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
                Help us expand and beautify our sacred space. Your contribution will create a lasting legacy for future generations.
              </p>
            </div>

            {/* Overall Progress Tracker */}
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-spiritual p-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-peacock-green mb-2 text-center">Overall Progress</h3>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-1 bg-peacock-green rounded-full"></div>
                </div>
                <Progress value={overallProgress} className="h-4 w-full mb-6" />
                <span className="text-3xl font-extrabold text-peacock-green mb-1">{overallProgress}% Complete</span>
                {estimatedCompletion && (
                  <span className="mt-2 text-deep-brown/70 text-base text-center block">Estimated Completion: {new Date(estimatedCompletion).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                )}
              </div>
            </div>

            <div className="bg-white/80 rounded-2xl shadow-spiritual p-4 md:p-8">
              <h3 className="text-2xl font-semibold text-deep-brown mb-6">Ongoing Projects</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project: any) => (
                  <Card key={project.id} className="bg-[#fff8f2] border border-light-saffron rounded-2xl shadow-lg p-5 mb-6 relative">
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold shadow border border-white ${project.statusColor || (project.status === 'Planning' ? 'bg-blue-500/90 text-white' : project.progress >= 100 ? 'bg-green-600/90 text-white' : 'bg-peacock-green/90 text-white')}`}
                      style={{ zIndex: 2 }}
                    >
                      {project.status}
                    </span>
                    <h3 className="text-lg font-bold text-deep-brown mb-1">{project.title}</h3>
                    <p className="text-deep-brown/80 text-base mb-4">{project.description}</p>
                    <div className="w-full h-3 bg-light-saffron/40 rounded-full mb-2 overflow-hidden">
                      <div
                        className={`h-3 ${project.status === 'Planning' ? 'bg-deep-saffron' : 'bg-peacock-green'} rounded-full transition-all duration-500`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-peacock-green text-sm font-semibold mb-4">
                      ₹{project.raised.toLocaleString()} raised of ₹{project.target.toLocaleString()} target
                    </div>
                    <Button className="w-full bg-peacock-green text-white py-3 rounded-xl font-semibold shadow-spiritual hover:bg-peacock-green/90 transition">
                      Contribute
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
