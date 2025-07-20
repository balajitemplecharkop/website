import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import joinData from "@/data/join-us.json";
import { Helmet } from 'react-helmet-async';

export default function JoinUs() {
  const { volunteerRoles, jobPostings } = joinData;

  return (
    <>
      <Helmet>
        <title>Join Us - Balaji Mandir Charkop</title>
        <meta name="description" content="Join the Balaji Mandir Charkop family. Volunteer, share your skills, or apply for open roles to help serve the community." />
        <meta property="og:title" content="Join Us - Balaji Mandir Charkop" />
        <meta property="og:description" content="Join the Balaji Mandir Charkop family. Volunteer, share your skills, or apply for open roles to help serve the community." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirupatibalajitemplecharkop.com/join-us" />
      </Helmet>
      <div className="pt-20 pb-16 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-deep-brown mb-4">Join Us &amp; Help with Your Skills</h1>
            <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto">
              Become a part of the Shree Balaji Padmavati Foundation family. Volunteer your time, share your skills, or apply for open roles to help us serve the community better.
            </p>
          </div>

          {/* Volunteer Opportunities */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-peacock-green mb-6">Volunteer Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {volunteerRoles.map((role: any) => (
                <Card key={role.id} className="bg-cream shadow-spiritual">
                  <CardHeader>
                    <CardTitle className="text-lg text-deep-brown font-bold">{role.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-deep-brown/80 mb-2">{role.description}</p>
                    <div className="mb-3">
                      <span className="text-xs text-deep-brown/60 font-semibold">Skills:</span>
                      <ul className="flex flex-wrap gap-2 mt-1">
                        {role.skills.map((skill: string) => (
                          <li key={skill} className="bg-peacock-green/10 text-peacock-green px-2 py-1 rounded text-xs font-medium">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="mt-2 px-4 py-2 bg-peacock-green text-white rounded font-semibold hover:bg-peacock-green/90 transition-spiritual">Volunteer for this Role</button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Job Postings */}
          <section>
            <h2 className="text-2xl font-semibold text-deep-saffron mb-6">Job Openings</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {jobPostings.map((job: any) => (
                <Card key={job.id} className="bg-cream shadow-spiritual">
                  <CardHeader>
                    <CardTitle className="text-lg text-deep-brown font-bold">{job.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-deep-brown/80 mb-2">{job.description}</p>
                    <div className="mb-3">
                      <span className="text-xs text-deep-brown/60 font-semibold">Requirements:</span>
                      <ul className="list-disc ml-5 mt-1 text-xs text-deep-brown/80">
                        {job.requirements.map((req: string) => (
                          <li key={req}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <button className="mt-2 px-4 py-2 bg-deep-saffron text-white rounded font-semibold hover:bg-deep-saffron/90 transition-spiritual">Apply for this Job</button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 