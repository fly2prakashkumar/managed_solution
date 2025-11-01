
import Image from "next/image";
import Link from "next/link";
import { networkMonitoringFaqs, testimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star } from "lucide-react";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export const NetworkMonitoringPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/solutions" },
        { label: "Network Monitoring", href: "/services/network-monitoring" },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'network-monitoring-hero');
    const teamImage = PlaceHolderImages.find(p => p.id === 'network-monitoring-team');
    const datasheetImage = PlaceHolderImages.find(p => p.id === 'solution-network');

    const benefits = [
        { title: "Scale Without Losing Sight", description: "Integrate monitoring seamlessly into your evolving technology stack." },
        { title: "Clarity at Every Stage of Growth", description: "Maintain visibility as you expand and migrate workloads." },
        { title: "Free Your Team to Focus on What's Next", description: "Drive innovation with confidence knowing your infrastructure is supported." },
    ];

    const managedServices = [
        "Selection & Procurement Assistance",
        "Deployment & Configuration",
        "Continuous Monitoring & Management",
        "Security & Threat Mitigation",
        "Automation & AI-Driven Insights",
        "Ongoing Support & Optimization",
    ];

    return (
        <div>
            <section className="bg-secondary py-12">
                <div className="container">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Network Monitoring</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Stay ahead of downtime with a proactive IT support team and network monitoring tools</p>
                    <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                        <Link href="/contact">SCHEDULE A DEMO</Link>
                    </Button>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold">IT Network Monitoring</h2>
                        <p className="mt-4 text-muted-foreground">No noise. No clutter. Just clear, real-time insights.</p>
                        <p className="mt-4 text-muted-foreground">
                            We provide a single, unified view and a fully staffed, U.S.-based team for around-the-clock management, powered by LogicMonitor's intelligent alerting tools.
                        </p>
                        <h3 className="font-headline text-2xl font-bold mt-8">Our Process</h3>
                        <p className="mt-4 text-muted-foreground">
                             Effective network monitoring gives you a proactive approach to management. We help you gain visibility into your entire IT environment, so you can identify and resolve issues before they impact your business.
                        </p>
                    </div>
                    {heroImage && (
                        <div className="relative h-80 w-full">
                            <Image src={heroImage.imageUrl} alt={heroImage.description} fill className="object-cover rounded-lg" data-ai-hint={heroImage.imageHint} />
                        </div>
                    )}
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold">Reliable Network Monitoring Solutions for Growing IT Environments</h2>
                    <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">Gain end-to-end visibility, reduce downtime, and confidently scale your infrastructure...</p>
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        {benefits.map(benefit => (
                            <Card key={benefit.title}>
                                <CardHeader>
                                    <CardTitle>{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    {teamImage && (
                        <div className="relative h-96 w-full">
                            <Image src={teamImage.imageUrl} alt={teamImage.description} fill className="object-cover rounded-lg" data-ai-hint={teamImage.imageHint} />
                        </div>
                    )}
                     <div>
                        <h2 className="font-headline text-3xl font-bold">Managed IT Services for Network Monitoring</h2>
                        <ul className="mt-6 space-y-4 list-disc list-inside">
                            {managedServices.map(service => <li key={service}>{service}.</li>)}
                        </ul>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container text-center">
                    <h3 className="font-headline text-2xl font-bold">Begin Your Network Monitoring Journey Today</h3>
                    <div className="mt-8 flex justify-center items-center gap-8">
                        <div>
                            <Button asChild variant="outline">
                                <Link href="#">View Datasheet</Link>
                            </Button>
                            {datasheetImage && (
                                <div className="relative h-48 w-64 mt-4 mx-auto">
                                <Image src={datasheetImage.imageUrl} alt={datasheetImage.description} fill className="object-contain" data-ai-hint={datasheetImage.imageHint} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-4xl">
                    <h2 className="text-center font-headline text-4xl font-bold mb-12">Network Monitoring and Management FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {networkMonitoringFaqs.map(faq => (
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

             <section className="py-16 md:py-24">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold mb-12">What Our Customers Say</h2>
                     <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.slice(3, 6).map((testimonial, index) => (
                             <Card key={index}>
                                <CardContent className="p-6 text-left">
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
            
            <ContactSection />
        </div>
    )
}
