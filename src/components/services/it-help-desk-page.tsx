
import Image from "next/image";
import Link from "next/link";
import { helpDeskFaqs, helpDeskTestimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Bot, Ticket, RefreshCw, Headset } from "lucide-react";
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

export const ITHelpDeskPage = () => {
    const heroImage = PlaceHolderImages.find(img => img.id === 'help-desk-hero');
    const employeesImage = PlaceHolderImages.find(img => img.id === 'help-desk-employees');
    const datasheetImage = PlaceHolderImages.find(img => img.id === 'datasheet-cta');

    const keyFeatures = [
        { title: "Full-time USA-based Helpdesk Technicians" },
        { title: "Microsoft Expertise" },
        { title: "Real-time Problem Resolution" },
        { title: "Customer-Centric Support" },
        { title: "Co-Managed Experience" }
    ];

    const serviceTiers = [
        {
            level: 1,
            title: "Remote Monitoring & Management",
            features: [
                "24/7 monitoring",
                "Patch management and updates",
                "Anti-virus and malware protection",
                "Asset inventory",
                "Remote access capabilities",
                "Business intelligence reporting"
            ]
        },
        {
            level: 2,
            title: "Help Desk Support Services",
            features: [
                "All Level 1 benefits",
                "ITSM Ticketing System",
                "Robotic Process Automation",
                "End-to-End User Support",
                "On-Premises and Cloud Server Management",
                "Network Management",
                "Security Management",
                "Microsoft Application Support"
            ]
        },
        {
            level: 3,
            title: "Onsite Support",
            features: [
                "All Level 1 and 2 benefits",
                "Support from Expert Field Engineers",
                "Regularly Scheduled Onsite Visits",
                "White-glove Service and Hands-on Assistance"
            ]
        }
    ];

    const additionalResources = [
        { title: "National IT Service Provider Day: Rise of Managed IT", href: "/blog" },
        { title: "Exploring AI-Enhanced IT Help Desk Software: How Automation is Transforming Support", href: "/blog" },
        { title: "6 Benefits of Working with a Managed Service Provider", href: "/blog" }
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
                        <span className="text-foreground">IT Help Desk Services</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="font-headline text-4xl md:text-5xl font-bold">IT Help Desk Services</h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                24/7 IT Helpdesk support for quick incident resolution and stable IT infrastructure. ✔️ 96.5% user satisfaction score.
                            </p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">Request a Custom Quote</Link>
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
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                        {keyFeatures.map(feature => (
                            <div key={feature.title} className="flex flex-col items-center">
                                <div className="p-4 rounded-full bg-orange-100 mb-2">
                                  <CheckCircle className="w-8 h-8 text-orange-500" />
                                </div>
                                <p className="font-semibold text-sm">{feature.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section className="bg-secondary py-16 md:py-24">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Our National Award-Winning IT Help Desk Services</h2>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <p className="text-5xl font-bold text-orange-500">4.9/5</p>
                            <p className="text-muted-foreground mt-2">CSAT Score</p>
                        </div>
                        <div className="text-center">
                            <p className="text-5xl font-bold text-orange-500">33,668</p>
                            <p className="text-muted-foreground mt-2">Tickets Submitted</p>
                        </div>
                         <div className="text-center">
                            <p className="text-5xl font-bold text-orange-500">&lt;10s</p>
                            <p className="text-muted-foreground mt-2">Avg. Response Time</p>
                        </div>
                         <div className="text-center">
                            <p className="text-5xl font-bold text-orange-500">2,959</p>
                            <p className="text-muted-foreground mt-2">Positive CSAT Responses</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center mb-12">
                         <h2 className="font-headline text-3xl md:text-4xl font-bold">The Best Help Desk Service & Ticketing Software</h2>
                         <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Ensuring Seamless Operations Every Step of the Way</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {serviceTiers.map(tier => (
                            <Card key={tier.level} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>Level {tier.level}: {tier.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="space-y-3">
                                        {tier.features.map(feature => (
                                            <li key={feature} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button asChild size="lg">
                            <Link href="/contact">Find My Ideal IT Support Model</Link>
                        </Button>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-secondary">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold">Artificial Intelligence & Robotic Process Automation (RPA)</h2>
                        <p className="text-muted-foreground mt-4">Award-winning automation, now part of your everyday IT support.</p>
                         <ul className="mt-6 space-y-4">
                            <li className="flex items-start gap-3">
                                <Ticket className="w-6 h-6 text-orange-500 mt-1" />
                                <div>
                                    <h3 className="font-semibold">Multi-Channel Ticket Entry</h3>
                                    <p className="text-muted-foreground text-sm">Via phone call, email or customer portal.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Bot className="w-6 h-6 text-orange-500 mt-1" />
                                <div>
                                    <h3 className="font-semibold">Built-In Automation & AI</h3>
                                    <p className="text-muted-foreground text-sm">Software built directly into ticket.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <RefreshCw className="w-6 h-6 text-orange-500 mt-1" />
                                <div>
                                    <h3 className="font-semibold">Streamlined Task Automation</h3>
                                    <p className="text-muted-foreground text-sm">Such as password resets, connectivity issues, ticket escalation to appropriate tech support.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Headset className="w-6 h-6 text-orange-500 mt-1" />
                                <div>
                                    <h3 className="font-semibold">Real-Time Chatbot Assistance</h3>
                                    <p className="text-muted-foreground text-sm">Chatbot for queries to reduce time to resolution in IT help desk support.</p>
                                </div>
                            </li>
                        </ul>
                         <Button asChild className="mt-8">
                            <Link href="/contact">Contact Our Team</Link>
                        </Button>
                    </div>
                    <div className="relative h-96 w-full">
                        {employeesImage && (
                            <Image src={employeesImage.imageUrl} alt={employeesImage.description} fill className="object-cover rounded-lg" data-ai-hint={employeesImage.imageHint} />
                        )}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container max-w-4xl">
                    <h2 className="text-center font-headline text-4xl font-bold mb-12">IT Help Desk FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {helpDeskFaqs.map(faq => (
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

            <section className="py-16 md:py-24 bg-secondary">
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
                                            {[...Array(5)].map((_, i) => <CheckCircle key={i} fill='currentColor' className='w-4 h-4' />)}
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

            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Badge variant="secondary">#1 AI-Powered Help Desk System</Badge>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">2025 Best-Rated Help Desk</h2>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Download our datasheet to learn more about our award-winning IT Help Desk services.
                        </p>
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
                    <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">Additional Resources</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {additionalResources.map(resource => (
                            <Card key={resource.title}>
                                <CardHeader>
                                    <CardTitle className="text-xl">{resource.title}</CardTitle>

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

            <ContactSection />
        </div>
    )
}
