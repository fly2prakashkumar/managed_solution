
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import { team, testimonials, awards } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export default function AboutPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }];
  const customerServiceImage = PlaceHolderImages.find(img => img.id === 'about-customer-service');
  const ourStoryImage = PlaceHolderImages.find(img => img.id === 'about-our-story');
  const teamImage = PlaceHolderImages.find(img => img.id === 'entra-id-webpage');

  const journey = [
    { year: "2002", event: "Managed Solution was established" },
    { year: "2008", event: "CEO Sean Ferrel honored as one of San Diego's “40 under 40” brightest young leaders." },
    { year: "2009", event: "Microsoft Partner Network Pipeline Accelerator Award" },
    { year: "2010", event: "San Diego Business Journal Fastest Growing Private Companies & Microsoft Partner Network Winning on Value Award" },
    { year: "2012", event: "San Diego Business Journal Fastest Growing Private Companies" },
    { year: "2014", event: "Awarded MSP Mentor 501 & Top 100 Cloud Services Providers" },
    { year: "2015", event: "Awarded Top 100 Cloud Services Providers & CRN 2015 MSP500 Award" },
    { year: "2019", event: "Managed Solution Named to Cloudtango's MSP100 US Award" },
    { year: "2021", event: "UpCity Best of Cloud Consulting Award Winner" },
    { year: "2024", event: "Managed Solution Earns 2024 Great Place To Work Certification & Recognized in Cloud Tango's 2024 Top 100 Managed Service Providers" },
  ];

  const coreValues = [
    { title: "Integrity", description: "We're honest and always do the right thing, even when no one's watching." },
    { title: "Heart", description: "We care deeply about our community, customers, and culture." },
    { title: "Innovation", description: "We push boundaries and explore new ways to solve problems." },
    { title: "Teamwork", description: "Our success comes from collective efforts and shared accountability." },
  ];

  const whyUs = [
    "Strategic Leadership Support",
    "Highly Skilled Engineers",
    "Flexibility",
    "White Glove Treatment"
  ];
  
  const integratedServices = [
    "Cybersecurity", "Cloud Deployment & Management", "Managed IT Support & Helpdesk", 
    "Backup & Disaster Recovery", "Compliance Management", "Remote Monitoring & Management", 
    "Microsoft Consultation & Solution Deployment", "Technology Procurement & Licensing"
  ];

  return (
    <>
      <section className="bg-secondary py-12">
          <div className="container">
              <Breadcrumbs items={breadcrumbItems} />
          </div>
      </section>
      <PageHeader
        title="About Us"
        description="Creating experiences where people thrive. At Managed Solution, we simplify technology to improve lives. We specialize in boosting collaboration, security, and end-user support. Our goal is to help businesses optimize their technology and focus on what matters most: people."
      >
        <Button asChild className="mt-6">
            <Link href="/contact">Contact Us</Link>
        </Button>
      </PageHeader>

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            {customerServiceImage && (
                <div className="relative h-96 w-full">
                    <Image src={customerServiceImage.imageUrl} alt={customerServiceImage.description} fill className="object-cover rounded-lg" data-ai-hint={customerServiceImage.imageHint} />
                </div>
            )}
            <div>
                <div className="text-center md:text-left">
                    <p className='font-bold text-lg'>EXCELLENT</p>
                    <div className='flex justify-center md:justify-start text-yellow-500 my-2'>
                        <Star fill='currentColor' className='w-5 h-5' /><Star fill='currentColor' className='w-5 h-5' /><Star fill='currentColor' className='w-5 h-5' /><Star fill='currentColor' className='w-5 h-5' /><Star fill='currentColor' className='w-5 h-5' />
                    </div>
                    <p className='text-muted-foreground text-sm'>Based on 66 reviews on Google</p>
                </div>
                <Card className="mt-6">
                    <CardContent className="p-6">
                         <div className='flex text-yellow-500 mb-2'>
                            <Star fill='currentColor' className='w-4 h-4' /><Star fill='currentColor' className='w-4 h-4' /><Star fill='currentColor' className='w-4 h-4' /><Star fill='currentColor' className='w-4 h-4' /><Star fill='currentColor' className='w-4 h-4' />
                        </div>
                        <p className="italic text-muted-foreground">"I would highly recommend Managed Solution for your IT needs. They resolve things quickly and efficiently."</p>
                        <p className="font-semibold mt-4">Fern Usry</p>
                        <p className="text-sm text-muted-foreground">October 2, 2025 at 5:00 PM PDT</p>
                    </CardContent>
                </Card>
                 <div className="flex items-center gap-2 mt-4 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p><span className="font-bold">Trustindex verified badge:</span> Awarded for scores above 4.5 based on reviews over the past 12 months.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
            <h2 className="text-center font-headline text-3xl font-bold mb-12">Our Journey</h2>
            <div className="relative">
                <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>
                {journey.map((item, index) => (
                    <div key={item.year} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                             <div className="p-4 bg-background rounded-lg shadow-md">
                                <p className="font-bold text-primary text-lg">{item.year}</p>
                                <p className="text-muted-foreground">{item.event}</p>
                            </div>
                        </div>
                         <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 border-4 border-background"></div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="font-headline text-3xl font-bold">Our Core Values</h2>
                <div className="mt-8 space-y-6">
                    {coreValues.map(value => (
                        <Card key={value.title}>
                            <CardHeader>
                                <CardTitle>{value.title}</CardTitle>
                                <p className="text-muted-foreground pt-2">{value.description}</p>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
             {ourStoryImage && (
                <div className="relative h-96 w-full">
                    <Image src={ourStoryImage.imageUrl} alt={ourStoryImage.description} fill className="object-contain" data-ai-hint={ourStoryImage.imageHint} />
                </div>
            )}
        </div>
      </section>

       <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold">Shaping the Future of IT</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">We strive to be innovators, leading with AI-driven solutions.</p>
            <div className="mt-8 flex justify-center items-center flex-wrap gap-8">
                {awards.map((award) => {
                    const awardImage = PlaceHolderImages.find(p => p.id === award.imageId);
                    return awardImage ? (
                        <Image
                            key={award.title}
                            src={awardImage.imageUrl}
                            alt={award.title}
                            width={140}
                            height={70}
                            className="object-contain"
                            data-ai-hint={awardImage.imageHint}
                        />
                    ) : null;
                })}
            </div>
        </div>
       </section>

        <section className="py-16 md:py-24">
            <div className="container">
                <h2 className="font-headline text-3xl font-bold text-center mb-12">Why Managed Solution?</h2>
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {whyUs.map(reason => (
                        <Card key={reason}>
                            <CardHeader><CardTitle>{reason}</CardTitle></CardHeader>
                        </Card>
                    ))}
                </div>
                 <Card>
                    <CardHeader><CardTitle>Integrated IT Services & Solutions</CardTitle></CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                        {integratedServices.map(service => (
                            <div key={service} className="p-2 bg-muted rounded-md">{service}</div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
        
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container">
                <h2 className="font-headline text-3xl font-bold text-center mb-12">What Others Are Saying</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                         <Card key={index}>
                            <CardContent className="p-6">
                                <div className='flex text-yellow-500 mb-4'>
                                    {[...Array(5)].map((_, i) => <Star key={i} fill='currentColor' className='w-4 h-4' />)}
                                </div>
                                <p className="text-sm text-muted-foreground italic">&quot;{testimonial.comment}&quot;</p>
                                <footer className="mt-4 text-sm font-semibold not-italic">
                                    {testimonial.name}
                                    {testimonial.company && <span className="block font-normal text-muted-foreground">{testimonial.company}</span>}
                                </footer>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                 {teamImage && (
                    <div className="relative h-80 w-full">
                        <Image src={teamImage.imageUrl} alt={teamImage.description} fill className="object-cover rounded-lg" data-ai-hint={teamImage.imageHint} />
                    </div>
                )}
                <div className="text-center md:text-left">
                    <h2 className="font-headline text-3xl font-bold">Join Our Team</h2>
                    <p className="mt-4 text-muted-foreground">Visit our Careers page to explore job openings.</p>
                    <Button asChild className="mt-6">
                        <Link href="/careers">View Careers</Link>
                    </Button>
                </div>
            </div>
        </section>
    </>
  );
}
