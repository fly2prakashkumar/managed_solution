
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import { CheckCircle } from "lucide-react";

export const HealthcarePage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Healthcare Technology Services", href: "/industries/healthcare-technology-services" },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'healthcare-cover');
    const teamImage = PlaceHolderImages.find(p => p.id === 'help-desk-employees');
    const downloadCtaImage = PlaceHolderImages.find(p => p.id === 'download-cta-graphic');
    const caseStudyImage = PlaceHolderImages.find(p => p.id === 'healthcare-blended-it');
    const blog1Image = PlaceHolderImages.find(p => p.id === 'healthcare-tips2');
    const blog2Image = PlaceHolderImages.find(p => p.id === 'end-user-security-training');


    const services = [
        "Network & infrastructure support...",
        "Cybersecurity monitoring...",
        "Secure EHR transmission that meets HIPAA and HITECH compliance standards",
        "Software upgrades & installations...",
        "24/7 helpdesk support...",
        "Cloud infrastructure management...",
        "Unified communications (UCaaS) to streamline collaboration...",
        "Smart WAN solutions to securely connect multiple locations"
    ];

    const benefits = [
        "Enable your care team's real-time collaboration with colleagues, specialists, and patients through a secure and compliant platform.",
        "Reduce the costs through workflow automation and optimization to improve efficiency, productivity, and profitability.",
        "Give the patients the care that they deserve by allowing them to access their healthcare information anytime and anywhere.",
        "Increase patient's visibility into their medical records and give them the ability to share medical information with other providers, specialists, or family members."
    ];

    const resources = [
        { title: "Biotech Case Study", image: caseStudyImage, href: "#" },
        { title: "Top 3 IT Issues Biotech Industry Faces", image: blog1Image, href: "#" },
        { title: "5 Tips for Biotech Privacy and Security", image: blog2Image, href: "#" }
    ];

    return (
        <div>
            <section className="bg-secondary py-12">
                <div className="container">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                             <h1 className="font-headline text-4xl md:text-5xl font-bold">Managed IT for Healthcare Providers</h1>
                            <p className="mt-4 text-lg text-muted-foreground">Outdated IT puts care at risk—modernize your systems to protect patients and boost performance.</p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">Talk to a Healthcare IT Expert</Link>
                            </Button>
                        </div>
                         {heroImage && (
                            <div className="relative h-80 w-full">
                                <Image src={heroImage.imageUrl} alt={heroImage.description} fill className="object-cover rounded-lg" data-ai-hint={heroImage.imageHint} />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold">Our IT Services for Healthcare Process</h2>
                        <p className="mt-4 text-muted-foreground">
                            Healthcare organizations face a delicate balancing act: providing exceptional patient care while navigating compliance requirements, evolving medical standards, and constant software updates. A Managed Service Provider (MSP) can alleviate this burden.
                        </p>
                    </div>
                    <div className="mt-12 max-w-4xl mx-auto">
                        <Card>
                            <CardContent className="p-8">
                                <ul className="space-y-4">
                                    {services.map((service, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                            <span>{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="text-center mt-12">
                        <p className="text-lg font-semibold italic">Let us take care of your IT—so you can take care of your patients.</p>
                        <Button asChild className="mt-6">
                            <Link href="/contact">Find My Ideal IT Support Model</Link>
                        </Button>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container">
                     <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold">How can you accomplish it all while still keeping your patients your number one priority?</h2>
                    </div>
                    <div className="mt-12 grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <p>{benefit}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <h3 className="font-headline text-2xl font-bold">Managed IT for Healthcare Providers​</h3>
                        <Button asChild className="mt-4">
                             <Link href="/contact">Find My Ideal IT Support Model</Link>
                        </Button>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-secondary">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    {teamImage && (
                        <div className="relative h-80 w-full">
                            <Image src={teamImage.imageUrl} alt={teamImage.description} fill className="object-cover rounded-lg" data-ai-hint={teamImage.imageHint} />
                        </div>
                    )}
                    <div>
                        <h2 className="font-headline text-3xl font-bold">IT Support For Healthcare - Safe & Secure IT Support</h2>
                        <p className="mt-4 text-muted-foreground">
                            We specialize in HIPAA compliance, EHR systems, telemedicine, and more to provide secure and reliable IT solutions for healthcare organizations.
                        </p>
                        <Button asChild className="mt-6">
                            <Link href="/contact">Get Healthcare Compliance</Link>
                        </Button>
                        <div className="mt-8">
                             <Button asChild variant="link" className="p-0">
                                <Link href="/services/managed-it">Learn more about our Managed IT Services for Healthcare</Link>
                            </Button>
                            <Button asChild className="mt-2">
                                <Link href="/resources">LEARN MORE</Link>
                            </Button>
                             {downloadCtaImage && (
                                <div className="relative h-48 w-full max-w-xs mt-4">
                                    <Image src={downloadCtaImage.imageUrl} alt={downloadCtaImage.description} fill className="object-contain" data-ai-hint={downloadCtaImage.imageHint} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="text-center font-headline text-3xl font-bold mb-12">Additional Resources</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {resources.map((resource) => (
                            <Card key={resource.title}>
                                {resource.image && (
                                    <div className="relative h-48 w-full">
                                        <Image src={resource.image.imageUrl} alt={resource.image.description} fill className="object-cover rounded-t-lg" data-ai-hint={resource.image.imageHint} />
                                    </div>
                                )}
                                <CardHeader><CardTitle>{resource.title}</CardTitle></CardHeader>
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
    );
};
