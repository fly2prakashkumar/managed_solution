import Image from "next/image";
import PageHeader from "@/components/shared/page-header";
import { team } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";


export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-1');
  return (
    <>
      <PageHeader
        title="About Optimal Solutions Hub"
        description="We are a team of passionate technology experts dedicated to helping businesses succeed through innovative and reliable IT solutions."
      />

      {/* Mission and Values Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="relative h-80 w-full md:h-full">
              {aboutImage && (
                 <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To empower businesses with strategic IT services and solutions that drive growth, enhance efficiency, and ensure security in an ever-evolving digital landscape.
              </p>
              <h3 className="mt-8 font-headline text-2xl font-bold">Our Core Values</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Client Partnership:</strong> We succeed when our clients succeed.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Uncompromising Integrity:</strong> We build trust through transparent and ethical practices.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Continuous Innovation:</strong> We embrace change and constantly seek better ways to serve our clients.</span>
                </li>
                 <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Proactive Excellence:</strong> We anticipate needs and deliver exceptional results.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Meet Our Leadership</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The driving force behind our commitment to excellence and innovation.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => {
              const teamImage = PlaceHolderImages.find(img => img.id === member.imageUrl);
              return (
              <Card key={member.name} className="text-center">
                <CardContent className="p-6">
                    {teamImage && (
                        <div className="relative mx-auto mb-4 h-32 w-32">
                        <Image
                            src={teamImage.imageUrl}
                            alt={`Portrait of ${member.name}`}
                            fill
                            className="rounded-full object-cover"
                            sizes="128px"
                            data-ai-hint={teamImage.imageHint}
                        />
                        </div>
                    )}
                  <h3 className="font-headline text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-accent">{member.role}</p>
                </CardContent>
              </Card>
            )})}
          </div>
        </div>
      </section>
    </>
  );
}
