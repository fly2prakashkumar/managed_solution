
import Image from "next/image";
import Link from "next/link";
import { azureFaqs, helpDeskTestimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Video } from "lucide-react";
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
import ContactSection from "@/components/shared/contact-section";

export const AzureCloudPage = () => {
    const heroImage = PlaceHolderImages.find(img => img.id === 'azure-hero');
    const msSecurityPartner = PlaceHolderImages.find(p => p.id === 'award-1');
    const msModernWorkPartner = PlaceHolderImages.find(p => p.id === 'award-2');
    const msAzurePartner = PlaceHolderImages.find(p => p.id === 'award-3');
    const resource1Image = PlaceHolderImages.find(p => p.id === 'azure-resource-1');
    const resource2Image = PlaceHolderImages.find(p => p.id === 'azure-resource-2');

    const innovationBenefits = [
        { title: "Enable Custom App Development", description: "We provide monitoring for Azure spend, enabling you to see at a glance where you can cut costs and optimize your bill." },
        { title: "Enhance Security and Storage of Business-Critical Data", description: "Our tools afford one view across hybrid or multi-cloud environments... and so much more." },
        { title: "Offer an Ever-Expanding Range of Evolving Tools", description: "Get automatically centralized log data without agents, to enable swift log-search and automatically detect log data anomalies." },
        { title: "Leadership", description: "Benefit from strategic guidance from certified Azure experts." },
    ];

    const monitoringFeatures = [
        { title: "Monitoring", description: "Rapid API-based monitoring... without deploying any agents or collectors." },
        { title: "Seamless Set-up", description: "Lightning fast setup and configuration... automatically." },
        { title: "Visibility", description: "Instant visibility into cloud resources, logs, and Azure managed applications... across your entire stack." },
        { title: "Advanced Visualizations", description: "Enhanced visualizations for on-prem, cloud, and microservice topology within one platform..." },
        { title: "Automation", description: "Automated log analysis correlated to cloud service performance quickly identifies the source of issues." },
    ];
    
    const webinars = [
        { title: "Getting Started with Azure", duration: "46:18" },
        { title: "Azure Essentials", duration: "45:58" },
        { title: "Azure Migration Strategies", duration: "59:46" },
    ];

     const additionalResources = [
        { title: "Is the Azure Cloud Really Right for Your Business?", href: "#", image: resource1Image },
        { title: "What is Microsoft Azure?", href: "#", image: resource2Image },
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
                        <span className="text-foreground">Azure Cloud Managed Services</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <Badge variant="default">Azure Assure</Badge>
                            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">Azure Managed Services</h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Certified Azure Expert MSP Delivering Scalability and Performance.
                            </p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">Optimize Your Cloud Now</Link>
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
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Innovate at Full Stride</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Innovate with confidence. Our Azure management services ensure your cloud environment is secure, optimized, and aligned with your business goals.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {innovationBenefits.map((item) => (
                            <Card key={item.title}>
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Monitoring</h2>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {monitoringFeatures.map((item) => (
                            <Card key={item.title}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Pathway to the Cloud: Watch our Azure Webinar Series</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Hosted by Solutions Architect, Jeff Lizerbram. 3 Videos total.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                         {webinars.map((webinar) => (
                            <Card key={webinar.title}>
                                <CardHeader className="flex-row items-center gap-4">
                                    <Video className="w-8 h-8 text-orange-500" />
                                    <CardTitle className="text-lg">{webinar.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Duration: {webinar.duration}</p>
                                    <Button variant="link" className="p-0 mt-2">Watch Now</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-secondary relative">
                <div className="container text-center max-w-4xl mx-auto z-10 relative">
                     <h2 className="font-headline text-4xl font-bold">What We Mean by Specialized</h2>
                     <p className="mt-4 text-muted-foreground text-lg">
                        Partner with a Premier Microsoft Service Provider. Maintain control and confidence over your IT operations by working with a Top 150 Microsoft Service Provider. Get Managed IT Services that are powered by experts on the market's leading technology.
                     </p>
                     <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                        <Link href="/contact">Contact Us Today</Link>
                     </Button>
                </div>
                <Card className="container mt-12">
                    <div className="flex justify-around items-center p-8 flex-wrap gap-8">
                         {msSecurityPartner && <Image src={msSecurityPartner.imageUrl} alt="Microsoft Security Partner" width={140} height={70} className="object-contain" data-ai-hint={msSecurityPartner.imageHint} />}
                        {msModernWorkPartner && <Image src={msModernWorkPartner.imageUrl} alt="Microsoft Modern Work Partner" width={140} height={70} className="object-contain" data-ai-hint={msModernWorkPartner.imageHint} />}
                        {msAzurePartner && <Image src={msAzurePartner.imageUrl} alt="Microsoft Azure Partner" width={140} height={70} className="object-contain" data-ai-hint={msAzurePartner.imageHint} />}
                    </div>
                </Card>
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
                            {helpDeskTestimonials.map((testimonial, index) => (
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
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {additionalResources.map(resource => (
                             <Card key={resource.title} className="group">
                                 {resource.image && (
                                     <div className="relative h-48 w-full overflow-hidden">
                                         <Image src={resource.image.imageUrl} alt={resource.title} fill className="object-cover group-hover:scale-105 transition-transform" data-ai-hint={resource.image.imageHint}/>
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
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container max-w-4xl">
                    <h2 className="text-center font-headline text-4xl font-bold mb-12">Azure Cloud FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {azureFaqs.map(faq => (
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
