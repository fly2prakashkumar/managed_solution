import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services, caseStudies } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');
const whyChooseUsImage = PlaceHolderImages.find(img => img.id === 'about-1');

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-primary text-primary-foreground">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-20"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Reliable IT Solutions for Modern Businesses
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/80 md:text-xl">
            We provide comprehensive managed IT services, ensuring your technology infrastructure is secure, efficient, and scalable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Core Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Proactive solutions to power and protect your business.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Card key={service.slug} className="flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex-row items-start gap-4">
                  <div className="rounded-md bg-accent/10 p-3 text-accent">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.shortDescription}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 text-accent">
                    <Link href={`/services#${service.slug}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="relative h-80 w-full md:h-full">
              {whyChooseUsImage && (
                <Image
                  src={whyChooseUsImage.imageUrl}
                  alt={whyChooseUsImage.description}
                  fill
                  className="rounded-lg object-cover shadow-lg"
                  data-ai-hint={whyChooseUsImage.imageHint}
                />
              )}
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold md:text-4xl">Your Strategic IT Partner</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We go beyond simple fixes to provide long-term technology strategies that align with your business goals.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                  <span><strong className="font-semibold">Expert Team:</strong> Our certified professionals bring years of experience across various industries.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                  <span><strong className="font-semibold">Proactive Approach:</strong> We monitor and manage your systems 24/7 to prevent issues before they happen.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                  <span><strong className="font-semibold">Client-Centric:</strong> Your success is our priority. We offer tailored support and transparent communication.</span>
                </li>
              </ul>
              <Button asChild className="mt-8" size="lg">
                <Link href="/about">More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Proven Success</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how we've helped businesses like yours achieve their goals.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredCaseStudies.map((study) => {
              const caseStudyImage = PlaceHolderImages.find(img => img.id === study.imageUrl);
              return(
              <Card key={study.slug} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                 {caseStudyImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={caseStudyImage.imageUrl}
                        alt={caseStudyImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={caseStudyImage.imageHint}
                      />
                    </div>
                  )}
                <CardHeader>
                  <CardTitle className="font-headline">{study.title}</CardTitle>
                  <CardDescription>{study.clientName}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{study.description}</p>
                </CardContent>
                 <CardFooter>
                  <Button asChild variant="link" className="p-0 text-accent">
                    <Link href={`/case-studies`}>Read Case Study <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            )})}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Ready to Optimize Your IT?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Let's discuss how Optimal Solutions Hub can help your business thrive. Schedule a free, no-obligation consultation with our experts today.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
