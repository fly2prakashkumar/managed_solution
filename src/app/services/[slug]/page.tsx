







import { notFound } from "next/navigation";
import Image from "next/image";
import { services, testimonials, caseStudies, awards, faqs, coManagedFaqs, helpDeskTestimonials, coManagedTestimonials, helpDeskFaqs, securityTestimonials, securityFaqs, azureFaqs, vcioFaqs, vcioTestimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, CheckCircle, Lock, Headset, Cloud, ShieldAlert, Briefcase, Bot, Users, Network, Database, Settings, RefreshCw, Lightbulb, Ticket, Tv, MonitorPlay, HeartHand, FileText, LocateFixed, GitBranch, Target, Search, Eye, BarChart, HardHat, LandPlot, Video, Activity, DollarSign, Puzzle, Zap } from "lucide-react";
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
        href: "/services/cybersecurity"
    },
    {
        title: "24/7 US-Based National Helpdesk",
        description: "Get round-the-clock IT support services from our dedicated team.",
        icon: Headset,
        href: "/services/help-desk"
    },
    {
        title: "Azure Assure",
        description: "Optimize your cloud environment with our Azure managed services.",
        icon: Cloud,
        href: "/services/cloud-services"
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
        href: "/services/vcio-consulting"
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
        href: "/services/data-backup"
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

const VCIOPage = () => {
    const heroImage = PlaceHolderImages.find(img => img.id === 'vcio-hero');
    const processImage = PlaceHolderImages.find(img => img.id === 'vcio-process');
    const datasheetImage = PlaceHolderImages.find(img => img.id === 'vcio-datasheet');

    const vcioRolePoints = [
        "IT recommendations formulated around business goals as it relates to sales, marketing, cash flow, and competitive landscape.",
        "Analyzing your current IT spend to see where you can be more cost-effective or eliminate spend.",
        "Asking you thought-provoking questions to discover opportunities & areas for improvements."
    ];

    const vcioProcessSteps = [
        {
            title: "Discover",
            description: "Open dialogue to learn about challenges and goals, assess systems, and look at overlap in technology product and spend... maximum ROI.",
            icon: Search
        },
        {
            title: "Strategize",
            description: "Formulate an IT plan that aligns with your business goals... in a cost-effective and timely manner.",
            icon: Target
        },
        {
            title: "Execute",
            description: "Our team of engineers is available to help support in executing upon the items outlined in the roadmap and delivering regular reports... key IT performance metrics.",
            icon: Zap
        },
        {
            title: "Optimize",
            description: "Provide mentoring services, vendor management, and more... optimize your IT performance and spend.",
            icon: Activity
        },
    ];

    const vcioBenefits = [
        { title: "Better Business & IT Alignment", icon: Puzzle },
        { title: "Enhanced Agility", icon: Zap },
        { title: "OpEx vs CapEx Cost Comparisons", icon: DollarSign },
        { title: "Reduced IT Costs & Better Profitability", icon: BarChart },
        { title: "Reduced Regulatory & Security Risks", icon: ShieldAlert },
        { title: "Improved Satisfaction with IT", icon: HeartHand },
    ];
    
    return(
        <div>
             <section className="bg-secondary py-16 md:py-24">
                <div className="container">
                    <div className="text-sm text-muted-foreground mb-4">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <span className="mx-2">&raquo;</span>
                        <Link href="/services" className="hover:text-primary">Services</Link>
                        <span className="mx-2">&raquo;</span>
                        <span className="text-foreground">Virtual CIO Consulting Services</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="font-headline text-4xl md:text-5xl font-bold">Virtual CIO Consulting Services</h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Maximize your IT strategy with vCIO leadership on board in days, not months. Immediate engagement to avoid leadership gaps.
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
                <div className="container max-w-5xl">
                    <div className="text-center">
                         <h2 className="font-headline text-3xl md:text-4xl font-bold">Turn your IT into a revenue-generating asset</h2>
                         <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">A vCIO is well equipped to have technical business discussions. This includes:</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {vcioRolePoints.map((point, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <p>{point}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                            <Link href="/contact">Get vCIO Support Now</Link>
                        </Button>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">The vCIO 4-Step Process</h2>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {vcioProcessSteps.map(step => (
                            <Card key={step.title} className="text-center">
                                <CardHeader>
                                     <div className="mx-auto w-fit rounded-full bg-primary/10 p-3 mb-4">
                                        <step.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <CardTitle>{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                 <div className="container grid md:grid-cols-2 gap-12 items-center">
                     <div>
                        <h2 className="font-headline text-3xl font-bold">Strategic Discussions Around Technology and Business with vCIO</h2>
                        <p className="mt-4 text-muted-foreground">Benefits you can expect from the fractional CIO as a service team:</p>
                        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                           {vcioBenefits.map(benefit => (
                             <li key={benefit.title} className="flex items-center gap-3">
                               <benefit.icon className="w-6 h-6 text-orange-500" />
                               <span className="font-semibold">{benefit.title}</span>
                             </li>
                           ))}
                        </ul>
                         <Button asChild size="lg" className="mt-8">
                            <Link href="/contact">Schedule a Free vCIO Call</Link>
                        </Button>
                     </div>
                     <div className="relative h-96 w-full">
                         {processImage && (
                            <Image
                                src={processImage.imageUrl}
                                alt={processImage.description}
                                fill
                                className="object-contain"
                                data-ai-hint={processImage.imageHint}
                            />
                        )}
                    </div>
                 </div>
            </section>
            
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Learn more about our Virtual CIO services today</h2>
                        <Button asChild size="lg" variant="secondary" className="mt-8">
                            <Link href="/resources">Download Datasheet</Link>
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
                            {vcioTestimonials.map((testimonial, index) => (
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
                <div className="container max-w-4xl">
                    <h2 className="text-center font-headline text-4xl font-bold mb-12">vCIO (Virtual CIO) FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {vcioFaqs.map(faq => (
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

const AzureCloudPage = () => {
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


const MicrosoftSecurityPage = () => {
    const heroImage = PlaceHolderImages.find(img => img.id === 'microsoft-security-hero');
    const msSecurityPartner = PlaceHolderImages.find(p => p.id === 'award-1');
    const msModernWorkPartner = PlaceHolderImages.find(p => p.id === 'award-2');
    const msAzurePartner = PlaceHolderImages.find(p => p.id === 'award-3');

    const whyChooseUs = [
        {
            title: "Unparalleled Expertise",
            description: "As a specialized Microsoft partner, our team offers extensive experience and in-depth knowledge of Microsoft's security ecosystem."
        },
        {
            title: "Comprehensive Platform",
            description: "We offer a suite of advanced Microsoft security tools and technologies to deliver a holistic approach to protecting your organization."
        },
        {
            title: "Customized Solutions",
            description: "Your business has unique security requirements. That's why our experts work closely with you to tailor solutions that align with your specific needs and goals."
        },
        {
            title: "Proactive Threat Detection",
            description: "With intelligent monitoring and threat detection capabilities, we identify and neutralize potential security breaches before they escalate."
        },
        {
            title: "24/7 Support",
            description: "Our dedicated support team is available round-the-clock to address any security concerns and keep your business operations running smoothly."
        },
    ];

    const securityOfferings = [
        { title: "Microsoft Defender", description: "Enhance device security and facilitate seamless hybrid work experiences.", href:"#" },
        { title: "Microsoft Intune", description: "Enhance device security and facilitate seamless hybrid work experiences." , href:"#"},
        { title: "Identity Management - Microsoft Entra", description: "Manage user accounts, access control, and security policies for all computers efficiently." , href:"#"},
        { title: "Microsoft Priva", description: "Gain control and visibility over cloud-based applications while ensuring compliance and protecting against cloud-native attacks." , href:"#"},
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
                        <span className="text-foreground">Microsoft Security Services</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge variant="default">Managed Secure</Badge>
                            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">Microsoft Security Services</h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Advanced security made easy with industry-leading tools and Microsoft expertise.
                            </p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">Secure Your Business Now</Link>
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <Search className="w-8 h-8 text-orange-500" />
                                        <CardTitle className="font-headline text-2xl">Assessment</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                        <li>Identify challenges</li>
                                        <li>Review security posture</li>
                                        <li>Get in-depth understanding of current stance</li>
                                    </ul>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <LandPlot className="w-8 h-8 text-orange-500" />
                                        <CardTitle className="font-headline text-2xl">Roadmap</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                     <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                        <li>Custom security roadmap</li>
                                        <li>Review detailed exposures & risks</li>
                                        <li>Educate team on recommended security options</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Managed Solution for your Security Needs</h2>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((item) => (
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
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Security Offerings</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Explore the tools that will transform your security structure and keep your environment protected.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {securityOfferings.map((offering) => (
                            <Card key={offering.title}>
                                <CardHeader>
                                    <CardTitle>{offering.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{offering.description}</p>
                                    <Button asChild variant="link" className="p-0">
                                        <Link href={offering.href}>Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-background relative">
                <div className="container text-center max-w-4xl mx-auto z-10 relative">
                     <h2 className="font-headline text-4xl font-bold">What We Mean by Specialized</h2>
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
            
            <ContactSection />
        </div>
    )
}


const CybersecurityPage = () => {
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
  
  if (params.slug === 'cybersecurity') {
    return <CybersecurityPage />;
  }

  if (params.slug === 'microsoft-security') {
    return <MicrosoftSecurityPage />;
  }

  if (params.slug === 'cloud-services') {
    return <AzureCloudPage />;
  }
  
  if (params.slug === 'vcio-consulting') {
    return <VCIOPage />;
  }

  const service = services.find((p) => p.slug === params.slug);

  if (!service) {
    notFound();
  }

  if (params.slug === 'managed-it') {
    return <ManagedITPage />;
  }

  if (params.slug === 'it-consulting' || params.slug === 'data-backup') {
    return <GenericServicePage service={service} />;
  }

  return <GenericServicePage service={service} />;
}
