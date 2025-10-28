
import { notFound } from "next/navigation";
import Image from "next/image";
import { services, testimonials, caseStudies, awards } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, CheckCircle, Lock, Headset, Cloud, ShieldAlert, Briefcase, Bot, Users, Network, Database, BrainCircuit, Workflow, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const subServices = [
    {
        title: "Managed Data Security",
        description: "Protect your data with our advanced security solutions.",
        icon: Lock,
        href: "#"
    },
    {
        title: "24/7 US-Based National Helpdesk",
        description: "Get round-the-clock IT support services from our dedicated team.",
        icon: Headset,
        href: "#"
    },
    {
        title: "Azure Assure",
        description: "Optimize your cloud environment with our Azure managed services.",
        icon: Cloud,
        href: "#"
    },
    {
        title: "IT Compliance Management",
        description: "Stay compliant with industry regulations effortlessly.",
        icon: ShieldAlert,
        href: "#"
    },
    {
        title: "Virtual CIO Services",
        description: "Benefit from strategic vCIO IT guidance without the full-time cost.",
        icon: Briefcase,
        href: "#"
    },
    {
        title: "Network Monitoring",
        description: "Transform your IT strategy with data-driven network visibility.",
        icon: Network,
        href: "#"
    },
    {
        title: "Backup Disaster & Recovery",
        description: "Ensure your systems are protected and running smoothly.",
        icon: Database,
        href: "#"
    },
    {
        title: "AI & Automation",
        description: "Artificial Intelligence and Robotic Process Automation (RPA).",
        icon: Bot,
        href: "#"
    },
    {
        title: "Co-Managed IT",
        description: "Discover the Benefits of co-managed IT support.",
        icon: Users,
        href: "#"
    }
]

const ManagedITPage = () => {
    const eguideImage = PlaceHolderImages.find(img => img.id === 'eguide-cover');
    const burdenImage = PlaceHolderImages.find(img => img.id === 'it-burden');
    const powerbiDashboardImage = PlaceHolderImages.find(img => img.id === 'powerbi-dashboard');
    const mspServicesDiagramImage = PlaceHolderImages.find(img => img.id === 'msp-diagram');

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="font-headline text-4xl md:text-5xl font-bold">Unlock the Secrets to Efficient IT Management Services</h1>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Download our free eGuide to discover how Managed IT Services can transform your business with proactive monitoring, enhanced security, and strategic IT planning. Learn what a managed IT service provider is, see example MSP contracts, and explore key considerations for selecting the right MSP.
                        </p>
                        <Button asChild size="lg" variant="outline" className="mt-8 bg-transparent hover:bg-white/10">
                            <Link href="#">GET YOUR FREE EGUIDE NOW</Link>
                        </Button>
                    </div>
                    <div className="relative h-80 w-full">
                        {eguideImage && (
                            <Image
                                src={eguideImage.imageUrl}
                                alt={eguideImage.description}
                                fill
                                className="object-contain"
                                data-ai-hint={eguideImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </section>

            {/* Imagine a World Section */}
            <section className="py-16 md:py-24">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-4xl font-bold">Imagine a World Where IT Isn't a Burden</h2>
                        <Button asChild size="lg" className="mt-6 bg-orange-500 text-white hover:bg-orange-600">
                            <Link href="/contact">GET MANAGED IT HELP</Link>
                        </Button>
                        <p className="mt-6 text-muted-foreground">
                            With over 20 years’ experience in providing end-to-end technology solutions and outsourced IT services, our award-winning and Microsoft Certified specialists tailor to your success and satisfaction at every touchpoint.
                        </p>
                        <Button asChild variant="link" className="p-0 text-orange-500 mt-2">
                             <Link href="#">View Awards &gt;</Link>
                        </Button>
                        <div className="mt-6 flex items-center gap-6">
                            {awards.slice(2,5).map(award => {
                                const awardImage = PlaceHolderImages.find(p => p.id === award.imageId);
                                return (
                                    awardImage && <Image key={award.title} src={awardImage.imageUrl} alt={award.title} width={120} height={40} className="object-contain" data-ai-hint={awardImage.imageHint}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="relative h-96 w-full">
                         {burdenImage && (
                            <Image
                                src={burdenImage.imageUrl}
                                alt={burdenImage.description}
                                fill
                                className="object-cover rounded-lg shadow-lg"
                                data-ai-hint={burdenImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </section>

            {/* Data-Driven Decision-Making Section */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container text-center max-w-4xl mx-auto">
                    <h2 className="font-headline text-4xl font-bold">Experience the Power of Data-Driven Decision-Making</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Gain real-time insights into your operations, identify growth opportunities, and make informed decisions with our comprehensive Power BI dashboards with the top IT managed services provider.
                    </p>
                </div>
                 <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
                     <div>
                        <h3 className="font-headline text-3xl font-bold">Managed IT Services Enhanced by PowerBI</h3>
                        <p className="mt-4 text-muted-foreground">
                            Experience the difference of a modern MSP with proprietary platforms that equip you with industry-specific decision-making tools. Whether it’s making technology investment decisions or analyzing ROI, our unique Business Intelligence tools provide forward-looking insights. Our shared goal is simple: “Let’s create experiences where our people thrive.”
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Gain access to real-time insights, interactive dashboards and comprehensive reporting capabilities to transform your data into actionable insights and stay ahead in today’s competitive market.
                        </p>
                     </div>
                     <div className="relative h-[400px] w-full">
                         {powerbiDashboardImage && (
                            <Image
                                src={powerbiDashboardImage.imageUrl}
                                alt={powerbiDashboardImage.description}
                                fill
                                className="object-contain"
                                data-ai-hint={powerbiDashboardImage.imageHint}
                            />
                        )}
                    </div>
                 </div>
            </section>

            {/* What are MSP IT Services? */}
            <section className="py-16 md:py-24">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[450px] w-full">
                         {mspServicesDiagramImage && (
                            <Image
                                src={mspServicesDiagramImage.imageUrl}
                                alt={mspServicesDiagramImage.description}
                                fill
                                className="object-contain"
                                data-ai-hint={mspServicesDiagramImage.imageHint}
                            />
                        )}
                    </div>
                    <div>
                        <h2 className="font-headline text-4xl font-bold">What Are MSP IT Services?</h2>
                        <p className="mt-4 text-muted-foreground">
                            Managed IT Services involve outsourcing the management and maintenance of a company’s IT infrastructure to a third-party provider, known as a Managed Service Provider (MSP). This approach allows businesses to focus on their core operations while ensuring their IT systems are efficiently managed and secure. By leveraging Managed IT Services, businesses can benefit from reduced downtime, enhanced security, and cost savings, as they do not need to invest heavily in in-house IT resources. Looking for IT help? Speak with our experts.
                        </p>
                        <Button asChild size="lg" className="mt-6 bg-orange-500 text-white hover:bg-orange-600">
                            <Link href="/team">MEET OUR TEAM</Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    )
}


const GenericServicePage = ({ service }: { service: any }) => {
  const serviceImage = PlaceHolderImages.find(img => img.id === service.imageUrl);
  const successStory = caseStudies[0];
  const successStoryImage = PlaceHolderImages.find(img => img.id === 'case-study-pdf-preview');

  return (
    <div>
      {/* Breadcrumb + Hero */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">&raquo;</span>
            <Link href="/services" className="hover:text-primary">Services</Link>
            <span className="mx-2">&raquo;</span>
            <span className="text-foreground">{service.title}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-headline text-4xl md:text-5xl font-bold">{service.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                First-in-industry, outcome-based IT—flexible terms and scalable solutions that grow with you.
              </p>
              <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                <Link href="/contact">SIMPLIFY YOUR IT—CONTACT US</Link>
              </Button>
            </div>
            <div className="relative h-80 w-full">
              {serviceImage && (
                <Image
                  src={serviceImage.imageUrl}
                  alt={serviceImage.description}
                  fill
                  className="rounded-lg object-cover shadow-lg"
                  data-ai-hint={serviceImage.imageHint}
                />
              )}
               <div className="absolute -bottom-4 -right-4 md:bottom-4 md:-right-4 bg-background p-2 rounded-lg shadow-2xl w-48">
                    <p className="text-xs font-bold">20</p>
                    <p className="text-xs text-muted-foreground">New leads</p>
                    <div className="relative h-20 w-full mt-2">
                        <Image
                            src="https://images.unsplash.com/photo-1547815749-838c83787de2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxVU0ElMjBtYXB8ZW58MHx8fHwxNzYwOTcyNjk3fDA&ixlib.rb-4.1.0&q=80&w=1080"
                            alt="Map visualization"
                            fill
                            className="object-contain"
                            data-ai-hint="map visualization"
                        />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            <div className="text-center md:text-left">
                <p className='font-bold text-lg'>EXCELLENT</p>
                <div className='flex justify-center md:justify-start text-yellow-500 my-2'>
                    <Star fill='currentColor' className='w-5 h-5' />
                    <Star fill='currentColor' className='w-5 h-5' />
                    <Star fill='currentColor' className='w-5 h-5' />
                    <Star fill='currentColor' className='w-5 h-5' />
                    <Star fill='currentColor' className='w-5 h-5' />
                </div>
                <p className='text-muted-foreground text-sm'>Based on 66 reviews</p>
                <div className="flex items-center justify-center md:justify-start gap-1 mt-2 font-bold text-lg">
                    <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" width={60} height={20} />
                </div>
            </div>
            <div className='md:col-span-3'>
                 <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                    >
                    <CarouselContent>
                        {testimonials.slice(0,3).map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2">
                            <Card>
                                <CardContent className="p-6">
                                    <div className='flex items-start justify-between mb-2'>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold">{testimonial.name}</p>
                                                <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                                            </div>
                                        </div>
                                        <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" width={20} height={20} className='w-5 h-5 opacity-50' />
                                    </div>
                                    <div className='flex text-yellow-500 my-3'>
                                        {[...Array(5)].map((_, i) => <Star key={i} fill='currentColor' className='w-4 h-4' />)}
                                    </div>
                                    <p className="text-sm text-muted-foreground">{testimonial.comment}</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='-left-4' />
                    <CarouselNext className='-right-4' />
                </Carousel>
                <div className='text-center md:text-right mt-4'>
                  <Link href="#" className='inline-flex items-center text-xs text-green-600 font-semibold bg-green-100/50 px-2 py-1 rounded-md'>
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" /> Verified by Trustindex
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete IT Management Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Complete IT Management</h2>
            <p className="mt-4 text-primary-foreground/80">
              Stay ahead in the ever-evolving work landscape with Managed Solution's comprehensive Managed IT Services. Our expert team is dedicated to helping you capitalize on your company's potential, transforming your organization into a digital powerhouse. We offer a range of tailored IT solutions designed to meet your unique business needs, ensuring your technology infrastructure is secure, efficient and scalable.
            </p>
            <p className="mt-4 text-primary-foreground/80">Discover how our Full-Service IT Management can empower your business:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {subServices.map((sub) => (
              <Card key={sub.title} className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-orange-500/20 text-orange-400">
                      <sub.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-bold">{sub.title}</h3>
                      <p className="text-sm text-primary-foreground/80 mt-1">{sub.description}</p>
                       <Link href={sub.href} className="text-sm text-orange-400 hover:underline mt-2 inline-block">Learn More</Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="relative h-[400px] w-full max-w-md mx-auto">
                {successStoryImage && (
                     <Image
                        src={successStoryImage.imageUrl}
                        alt={successStoryImage.description}
                        fill
                        className="object-contain"
                        data-ai-hint={successStoryImage.imageHint}
                    />
                )}
             </div>
             <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Fully Managed IT Success:</h2>
                <p className="mt-4 text-muted-foreground">{successStory.clientName} outsources IT to leverage greater talent at lower cost.</p>
                <p className="mt-2 text-muted-foreground">Managed Solution provided full-service IT management to help:</p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Migrate them to Office 365</li>
                    <li>Increase & secure remote collaboration</li>
                    <li>Reduce the heavy lift of HIPAA compliant IT support</li>
                </ul>
                <Button asChild variant="link" className="p-0 text-orange-500 mt-6">
                    <Link href="#">VIEW CASE STUDY</Link>
                </Button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((p) => p.slug === params.slug);

  if (!service) {
    notFound();
  }

  if (params.slug === 'managed-it') {
    return <ManagedITPage />;
  }

  return <GenericServicePage service={service} />;
}
