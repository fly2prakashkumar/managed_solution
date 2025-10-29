

import { notFound } from "next/navigation";
import Image from "next/image";
import { services, testimonials, caseStudies, awards, faqs, coManagedFaqs, coManagedTestimonials, helpDeskFaqs, helpDeskTestimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, CheckCircle, Lock, Headset, Cloud, ShieldAlert, Briefcase, Bot, Users, Network, Database, Settings, RefreshCw, Lightbulb, Ticket, Tv, MonitorPlay } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ContactSection from "@/components/shared/contact-section";
import { Badge } from "@/components/ui/badge";

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
        icon: RefreshCw,
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
        href: "/services/co-managed-it"
    }
]

const serviceTypes = [
    {
        title: "Proactive Monitoring & IT Maintenance",
        description: "MSPs continuously monitor your IT systems 24/7/365 to identify and resolve issues before they cause significant problems.",
        icon: Settings
    },
    {
        title: "Security Management",
        description: "This includes implementing and managing security measures such as firewalls, antivirus software, and intrusion detection systems to protect against cyber threats.",
        icon: ShieldAlert
    },
    {
        title: "Disaster Backup & Recovery",
        description: "MSPs ensure that your data is regularly backed up and can be quickly restored in case of data loss or system failure.",
        icon: RefreshCw
    },
    {
        title: "IT Help Desk Support",
        description: "Providing 24/7/365 on-demand support to address any IT-related issues that employees may encounter across environments.",
        icon: Headset
    },
    {
        title: "Cloud IT Services",
        description: "Managing cloud infrastructure, including cloud migration, storage and security.",
        icon: Cloud
    },
    {
        title: "Compliance Management",
        description: "Ensuring that your IT systems comply with relevant industry regulations and standards.",
        icon: CheckCircle
    },
    {
        title: "Strategic IT Planning",
        description: "Offering guidance on IT strategy and planning to align technology with business goals.",
        icon: Lightbulb
    },
    {
        title: "AI & Automation",
        description: "Work smarter, be more productive, boost creativity for your business with Copilot, RPA, and automation frameworks.",
        icon: Bot
    }
];

const industrySolutions = [
    {
        title: "Managed IT for Healthcare Providers",
        description: "Impacting care through innovative technology",
        imageUrl: "managed-it-healthcare",
        imageHint: "healthcare technology",
        href: "#"
    },
    {
        title: "Managed IT for Financial Institutions",
        description: "Optimize your operations, improve customer experience and meet regulatory requirements",
        imageUrl: "managed-it-finance",
        imageHint: "finance technology",
        href: "#"
    },
    {
        title: "Pharma & Life Sciences",
        description: "Creating a synergy between science and technology.",
        imageUrl: "managed-it-pharma",
        imageHint: "science technology",
        href: "#"
    },
    {
        title: "Nonprofits",
        description: "Reducing costs for nonprofits with their IT expertise.",
        imageUrl: "managed-it-nonprofit",
        imageHint: "community help",
        href: "#"
    }
];

const ITHelpDeskPage = () => {
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

const CoManagedITPage = () => {
    const heroImage = PlaceHolderImages.find(img => img.id === 'co-managed-it-hero');
    const eguideImage = PlaceHolderImages.find(img => img.id === 'eguide-cover');
    const collaborationImage = PlaceHolderImages.find(img => img.id === 'collaboration-image');

    return (
        <div>
            <section className="bg-secondary py-16 md:py-24">
                <div className="container">
                    <div className="text-sm text-muted-foreground mb-4">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <span className="mx-2">&raquo;</span>
                        <Link href="/services" className="hover:text-primary">Services</Link>
                        <span className="mx-2">&raquo;</span>
                        <span className="text-foreground">Co-Managed IT Services</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="font-headline text-4xl md:text-5xl font-bold">Co-Managed IT Services</h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Our collaborative approach combines the convenience of internal IT with the expertise of an MSP.
                            </p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">Get Started Today</Link>
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
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Co-Managed IT vs Managed IT: What's the Difference?</h2>
                    </div>
                    <div className="mt-12 grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Co-Managed IT</CardTitle>
                                <p className="text-muted-foreground pt-2">A Collaborative Partnership: Your internal IT team works alongside the external provider.</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p><strong>Flexibility:</strong> You can choose which IT functions to outsource and which to keep in-house.</p>
                                <p><strong>Enhanced Support:</strong> Gain access to specialized skills and resources without fully outsourcing.</p>
                                <p><strong>Scalability:</strong> Easily scale IT services up or down based on your business needs.</p>
                                <p><strong>Cost Efficiency:</strong> Optimize costs by only outsourcing specific tasks or projects.</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Managed IT</CardTitle>
                                <p className="text-muted-foreground pt-2">Full Outsourcing: The external provider takes full responsibility for your IT operations.</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p><strong>Full Outsourcing:</strong> The external provider takes full responsibility for your IT operations.</p>
                                <p><strong>Proactive Management:</strong> Continuous monitoring and maintenance to prevent issues before they arise.</p>
                                <p><strong>Comprehensive Solutions:</strong> Access to a wide range of IT services, including cybersecurity, network management, and data backup.</p>
                                <p><strong>Predictable Costs:</strong> Fixed monthly fees for comprehensive IT support.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                             <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Choose a Co-Managed IT Service Model for Your Business</h2>
                             <p className="mt-4 text-lg text-muted-foreground">Empower your internal team to focus on strategic initiatives while we handle the day-to-day IT complexities. Our co-managed model is designed to drive growth, reduce risk, and control costs.</p>
                             <div className="mt-8 space-y-6">
                                 <div>
                                     <h3 className="font-semibold text-xl">Drive Growth</h3>
                                     <p className="text-muted-foreground">Freeing internal teams to pursue innovation.</p>
                                 </div>
                                 <div>
                                     <h3 className="font-semibold text-xl">Reduce Risk</h3>
                                     <p className="text-muted-foreground">Access to expert support in cybersecurity, compliance, and cloud.</p>
                                 </div>
                                  <div>
                                     <h3 className="font-semibold text-xl">Control Costs</h3>
                                     <p className="text-muted-foreground">Get exactly the services you need—nothing more, nothing less—so you can bridge skill gaps, and avoid the expense of full-time hires without compromising quality.</p>
                                 </div>
                             </div>
                             <Button asChild className="mt-8">
                                <Link href="/about">Meet Our Team</Link>
                             </Button>
                        </div>
                        <div className="relative h-96 w-full">
                            {collaborationImage && (
                                <Image src={collaborationImage.imageUrl} alt={collaborationImage.description} fill className="object-cover rounded-lg" data-ai-hint={collaborationImage.imageHint} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Unlock the Secrets to Efficient IT Management Services</h2>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Download our free eGuide to discover how Managed IT Services can transform your business with proactive monitoring, enhanced security, and strategic IT planning.
                        </p>
                        <Button asChild size="lg" variant="secondary" className="mt-8">
                            <Link href="/resources">GET YOUR FREE EGUIDE NOW</Link>
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

             <section className="py-16 md:py-24">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Co-Managed IT Services Case Study:</h2>
                        <blockquote className="mt-6 text-lg text-muted-foreground italic border-l-4 border-primary pl-6">
                            <p>“We'd worked with Managed Solution on a successful IT project in the past, so we had a good idea of their capabilities. Since they were at Microsoft Partner, in addition to projects they were able to support our software licensing. This was especially important to make sure that we have a compliant IT function error radar”.</p>
                            <footer className="mt-4 not-italic font-semibold">
                                – Dennis Gonzales, Sr. Principal, Information Systems and Technology.
                            </footer>
                        </blockquote>
                        <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                            <Link href="/contact">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-4xl">
                    <h2 className="text-center font-headline text-4xl font-bold mb-12">Co-Managed IT Services FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {coManagedFaqs.map(faq => (
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
    );
}


const ManagedITPage = () => {
    const eguideImage = PlaceHolderImages.find(img => img.id === 'eguide-cover');
    const burdenImage = PlaceHolderImages.find(img => img.id === 'it-burden');
    const powerbiDashboardImage = PlaceHolderImages.find(img => img.id === 'powerbi-dashboard');
    const mspServicesDiagramImage = PlaceHolderImages.find(img => img.id === 'msp-diagram');
    const msSecurityPartner = PlaceHolderImages.find(p => p.id === 'award-1');
    const msModernWorkPartner = PlaceHolderImages.find(p => p.id === 'award-2');
    const msAzurePartner = PlaceHolderImages.find(p => p.id === 'award-3');
    const successStory = caseStudies[0];
    const successStoryImage = PlaceHolderImages.find(img => img.id === 'case-study-pdf-preview');


    return (
        <div>
            {/* Hero Section */}
            <section className="bg-secondary py-16 md:py-24">
                <div className="container">
                    <div className="text-sm text-muted-foreground mb-4">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <span className="mx-2">&raquo;</span>
                        <Link href="/services" className="hover:text-primary">Services</Link>
                        <span className="mx-2">&raquo;</span>
                        <span className="text-foreground">Managed IT Services</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="font-headline text-4xl md:text-5xl font-bold">First-in-Industry, Outcome-Based IT</h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Managed Solution delivers flexible terms and scalable solutions that grow with you. Our mission is to simplify your IT, enabling you to focus on what matters most—your business growth, not your infrastructure.
                            </p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">SIMPLIFY YOUR IT—CONTACT US</Link>
                            </Button>
                        </div>
                        <div className="relative h-80 w-full">
                            {burdenImage && (
                                <Image
                                    src={burdenImage.imageUrl}
                                    alt={burdenImage.description}
                                    fill
                                    className="rounded-lg object-cover shadow-lg"
                                    data-ai-hint={burdenImage.imageHint}
                                />
                            )}
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
                         <div className='text-center md:text-left mt-4'>
                            <Link href="#" className='inline-flex items-center text-xs text-green-600 font-semibold bg-green-100/50 px-2 py-1 rounded-md'>
                                <CheckCircle className="w-4 h-4 mr-1 text-green-500" /> Verified by Trustindex
                            </Link>
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
                                {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className='flex items-start justify-between mb-2'>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                                                        {testimonial.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">{testimonial.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex text-yellow-500 my-3'>
                                                {[...Array(5)].map((_, i) => <Star key={i} fill='currentColor' className='w-4 h-4' />)}
                                            </div>
                                            <p className="text-sm text-muted-foreground">&quot;{testimonial.comment}&quot;</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className='-left-4' />
                            <CarouselNext className='-right-4' />
                        </Carousel>
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
                    With over 20 years of experience, our award-winning, Microsoft-certified specialists tailor IT solutions to your unique business needs, ensuring your infrastructure is secure, efficient, and scalable.
                    </p>
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
                            <Link href={sub.href || '#'} className="text-sm text-orange-400 hover:underline mt-2 inline-block">Learn More</Link>
                            </div>
                        </div>
                        </CardContent>
                    </Card>
                    ))}
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
                        <h2 className="font-headline text-4xl font-bold">What Are Managed IT Services?</h2>
                        <p className="mt-4 text-muted-foreground">
                            Managed IT Services involve outsourcing the management and maintenance of a company’s IT infrastructure to a third-party provider, known as a Managed Service Provider (MSP). This approach allows businesses to focus on their core operations while ensuring their IT systems are efficiently managed and secure. By leveraging Managed IT Services, businesses can benefit from reduced downtime, enhanced security, and cost savings, as they do not need to invest heavily in in-house IT resources. Looking for IT help? Speak with our experts.
                        </p>
                        <Button asChild size="lg" className="mt-6 bg-orange-500 text-white hover:bg-orange-600">
                            <Link href="/about">MEET OUR TEAM</Link>
                        </Button>
                    </div>
                </div>
            </section>
            
            {/* Types of Managed IT Services */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <h2 className="text-center font-headline text-4xl font-bold mb-12">Types of Managed IT Services:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
                        {serviceTypes.map((service, index) => (
                            <Card key={service.title} className={`rounded-none border-none ${(index === 7) ? 'bg-orange-50' : 'bg-card'}`}>
                                <CardContent className="p-8 h-full">
                                    <service.icon className="h-10 w-10 text-orange-500 mb-4" />
                                    <h3 className="font-headline text-xl font-bold">{service.title}</h3>
                                    <p className="mt-2 text-muted-foreground text-sm">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             {/* Premier Microsoft Partner */}
            <section className="py-16 md:py-24 bg-background relative">
                <div className="container text-center max-w-4xl mx-auto z-10 relative">
                     <h2 className="font-headline text-4xl font-bold">Partner with a Premier Microsoft Service Provider</h2>
                     <p className="mt-4 text-muted-foreground text-lg">
                        Maintain control and confidence over your IT operations by working with a Top 150 Microsoft Service Provider. Get Managed IT Services that are powered by experts on the market's leading technology.
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

             {/* Data-Driven Decision-Making Section */}
            <section className="py-16 md:py-24 bg-secondary">
                 <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                     <div>
                        <h3 className="font-headline text-3xl font-bold">Managed IT Services Enhanced by PowerBI</h3>
                         <p className="mt-4 text-muted-foreground">
                            Experience the difference of a modern MSP with proprietary platforms that equip you with industry-specific decision-making tools. Our unique Business Intelligence tools provide forward-looking insights to help you analyze ROI and make technology investment decisions. Our shared goal is simple: “Let’s create experiences where our people thrive.”
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

            {/* Managed IT for Businesses */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="text-center font-headline text-4xl font-bold mb-12">Managed IT Services for Businesses & Organizations</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {industrySolutions.map(solution => {
                            const solutionImage = PlaceHolderImages.find(img => img.id === solution.imageUrl);
                            return (
                                <Card key={solution.title} className="overflow-hidden group">
                                     {solutionImage && (
                                        <div className="relative h-64 w-full">
                                            <Image 
                                                src={solutionImage.imageUrl} 
                                                alt={solution.title} 
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                data-ai-hint={solutionImage.imageHint}
                                            />
                                        </div>
                                     )}
                                     <CardContent className="p-6">
                                        <h3 className="font-headline text-2xl font-bold">{solution.title}</h3>
                                        <p className="mt-2 text-muted-foreground">{solution.description}</p>
                                        <Button asChild variant="link" className="p-0 text-orange-500 mt-4">
                                            <Link href={solution.href}>Learn More &rarr;</Link>
                                        </Button>
                                     </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

             {/* Success Story Section */}
            <section className="py-16 md:py-24 bg-secondary">
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
                            <Link href="/case-studies">VIEW CASE STUDY</Link>
                        </Button>
                    </div>
                </div>
                </div>
            </section>
            
            {/* FAQ Section */}
            <section className="py-16 md:py-24">
                <div className="container max-w-4xl">
                    <h2 className="text-center font-headline text-4xl font-bold mb-12">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map(faq => (
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

             {/* eGuide CTA section */}
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Unlock the Secrets to Efficient IT Management Services</h2>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Download our free eGuide to discover how Managed IT Services can transform your business with proactive monitoring, enhanced security, and strategic IT planning.
                        </p>
                        <Button asChild size="lg" variant="secondary" className="mt-8">
                            <Link href="/resources">GET YOUR FREE EGUIDE NOW</Link>
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

            <ContactSection />
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
                  <Link href="#" className='inline-flex items-center text-xs text-green-600 font-semibold bg-green-100/50 px-2 py-1 rounded-md'>
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" /> Verified by Trustindex
                  </Link>
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
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex text-yellow-500 my-3'>
                                        {[...Array(5)].map((_, i) => <Star key={i} fill='currentColor' className='w-4 h-4' />)}
                                    </div>
                                    <p className="text-sm text-muted-foreground">&quot;{testimonial.comment}&quot;</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='-left-4' />
                    <CarouselNext className='-right-4' />
                </Carousel>
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
                       <Link href={sub.href || '#'} className="text-sm text-orange-400 hover:underline mt-2 inline-block">Learn More</Link>
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
                    <Link href={`/case-studies`}>VIEW CASE STUDY</Link>
                </Button>
             </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}


export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  if (params.slug === 'co-managed-it') {
    return <CoManagedITPage />;
  }
  
  if (params.slug === 'help-desk') {
    return <ITHelpDeskPage />;
  }

  const service = services.find((p) => p.slug === params.slug);

  if (!service) {
    notFound();
  }

  if (params.slug === 'managed-it') {
    return <ManagedITPage />;
  }

  return <GenericServicePage service={service} />;
}
