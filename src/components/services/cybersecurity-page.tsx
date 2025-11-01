
import Image from "next/image";
import Link from "next/link";
import { securityFaqs, securityTestimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LocateFixed, GitBranch, FileText, Target, Star } from "lucide-react";
import ContactSection from "@/components/shared/contact-section";

export const CybersecurityPage = () => {
    const heroImage = PlaceHolderImages.find(img => img.id === 'security-hero');
    const datasheetImage = PlaceHolderImages.find(img => img.id === 'security-datasheet-cta');
    const msSecurityPartner = PlaceHolderImages.find(p => p.id === 'award-1');
    const msModernWorkPartner = PlaceHolderImages.find(p => p.id === 'award-2');
    const msAzurePartner = PlaceHolderImages.find(p => p.id === 'award-3');
    
    const coreServices = [
        {
            title: "Automated Threat Detection and Response",
            description: "Utilizes advanced algorithms to detect anomalies, automatically neutralizing threats in real-time.",
            icon: LocateFixed
        },
        {
            title: "24/7 Monitoring and Reporting",
            description: "Continuous oversight of your network and systems to identify and respond to security incidents at any time, day or night. Provides comprehensive reports on security incidents, responses, and system health, offering insights for informed decision-making.",
            icon: GitBranch
        },
        {
            title: "Security Incident and Event Management (SIEM)",
            description: "Collects and analyzes security data from various sources within your organization, enhancing the detection of sophisticated attacks.",
            icon: FileText
        },
        {
            title: "Phishing Simulation and Training",
            description: "Offers regular security awareness training, including simulated phishing attacks to educate employees about cybersecurity best practices.",
            icon: Target
        },
    ]

    const additionalResources = [
        { title: "Identity Management and Endpoint Protection with Entra ID and Intune", href: "/blog", imageId: "security-blog-1" },
        { title: "The CISO's Top 5 Worst Nightmares, and How to Prevent Them", href: "/blog", imageId: "security-blog-2" },
        { title: "Cybersecurity Incidents: 8 Steps to Protect your Business", href: "/blog", imageId: "security-blog-3" },
        { title: "A Comprehensive Guide to Microsoft Security", href: "/blog", imageId: "security-blog-4" }
    ];

    return (
        <div>
            <section className="bg-secondary py-16 md:py-24">
                <div className="container">
                    <div className="text-sm text-muted-foreground mb-4">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <span className="mx-2">&raquo;</span>
                        <Link href="/services" className="hover:text-primary">Services</Link>
                        <span className="mx-2">&raquo;</span>
                        <span className="text-foreground">Managed IT Security Solutions</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="font-headline text-4xl md:text-5xl font-bold">Managed IT Security Solutions</h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Comprehensive IT Security Solutions for Ultimate Protection. Empowering Your Business with Advanced Threat Detection, Real-Time Monitoring, and Proactive Security Training.
                            </p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">Secure your future today</Link>
                            </Button>
                        </div>
                        <div className="relative h-80 w-full">
                            {heroImage && (
                                <Image
                                    src={heroImage.imageUrl}
                                    alt={heroImage.description}
                                    fill
                                    className="rounded-lg object-cover shadow-lg"
                                    data-ai-hint={heroImage.imageHint}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreServices.map(service => (
                            <Card key={service.title} className="text-center">
                                <CardHeader>
                                    <div className="mx-auto w-fit rounded-full bg-orange-100 p-4 mb-4">
                                        <service.icon className="w-8 h-8 text-orange-500" />
                                    </div>
                                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary relative">
                <div className="container text-center max-w-4xl mx-auto z-10 relative">
                     <h2 className="font-headline text-4xl font-bold">What We Mean By Specialized</h2>
                     <p className="mt-4 text-muted-foreground text-lg">
                        Partner with a Premier Microsoft Service Provider. Maintain control and confidence over your IT operations by working with a Top 150 Microsoft Service Provider. Get Managed IT Services that are powered by experts on the market's leading technology.
                     </p>
                </div>
                <Card className="container mt-12">
                    <div className="flex justify-around items-center p-8 flex-wrap gap-8">
                         {msSecurityPartner && <Image src={msSecurityPartner.imageUrl} alt="Microsoft Security Partner" width={140} height={70} className="object-contain" data-ai-hint={msSecurityPartner.imageHint} />}
                        {msModernWorkPartner && <Image src={msModernWorkPartner.imageUrl} alt="Microsoft Modern Work Partner" width={140} height={70} className="object-contain" data-ai-hint={msModernWorkPartner.imageHint} />}
                        {msAzurePartner && <Image src={msAzurePartner.imageUrl} alt="Microsoft Azure Partner" width={140} height={70} className="object-contain" data-ai-hint={msAzurePartner.imageHint} />}
                    </div>
                </Card>
            </section>

            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Learn more about our comprehensive security solutions</h2>
                        <Button asChild size="lg" variant="secondary" className="mt-8">
                            <Link href="/resources">VIEW DATASHEET</Link>
                        </Button>
                    </div>
                    <div className="relative h-80 w-full">
                        {datasheetImage && (
                            <Image
                                src={datasheetImage.imageUrl}
                                alt={datasheetImage.description}
                                fill
                                className="object-contain"
                                data-ai-hint={datasheetImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
                    </div>
                    <Carousel
                        opts={{ align: "start", loop: true }}
                        className="w-full max-w-4xl mx-auto mt-12"
                        >
                        <CarouselContent>
                            {securityTestimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <Card className="h-full">
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
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='-left-4' />
                        <CarouselNext className='-right-4' />
                    </Carousel>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">Additional Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {additionalResources.map(resource => {
                             const resourceImage = PlaceHolderImages.find(img => img.id === resource.imageId);
                             return (
                                <Card key={resource.title} className="group">
                                    {resourceImage && (
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image src={resourceImage.imageUrl} alt={resource.title} fill className="object-cover group-hover:scale-105 transition-transform" data-ai-hint={resourceImage.imageHint}/>
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="text-lg font-headline">{resource.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Button asChild variant="link" className="p-0">
                                            <Link href={resource.href}>Read More</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                             )
                        })}
                    </div>
                </div>
            </section>
            

            <section className="py-16 md:py-24">
                <div className="container max-w-4xl">
                    <h2 className="text-center font-headline text-4xl font-bold mb-12">Managed IT Security FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {securityFaqs.map(faq => (
                            <AccordionItem key={faq.question} value={faq.question}>
                                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>


            <ContactSection />
        </div>
    )
}
