
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import { CheckCircle } from "lucide-react";

export const FinancialPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Financial technology services", href: "/industries/financial-technology-services" },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'finance-it-intro');
    const crmImage = PlaceHolderImages.find(p => p.id === 'finance-crm');
    const teamImage = PlaceHolderImages.find(p => p.id === 'work-team');

    const benefits = [
        "Empower your employees to connect and collaborate in real time from any location or device.",
        "Automate key tasks and processes to gain efficiencies and reduce operational costs.",
        "Optimize operations and risk management to improve business performance and resilience.",
        "Combine agility with security and trust to deliver a seamless customer experience.",
        "Reduce total cost of ownership (TCO) with intuitive customizable tools and simplified integrations."
    ];

    const resources = [
        { type: "Case Study", title: "3 IT Challenges In The Financial Services Industry", href: "#" },
        { type: "Blog", title: "Security Trends in Financial Services", href: "#" },
        { type: "Blog", title: "Financial organization ensures compliance with Office 365", href: "#" }
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
                             <h1 className="font-headline text-4xl md:text-5xl font-bold">Managed IT for Financial Institutions</h1>
                            <p className="mt-4 text-lg text-muted-foreground">Finance IT: Optimize Your Operations, Improve Customer Experience and Meet Regulatory Requirements.</p>
                             <p className="mt-4 text-muted-foreground">
                                Financial institutions face exponential growth of data, employees who desire to use a litany of applications and bring their own devices, customers who demand instant and secure access to their financial information, constantly growing regulations, and increasingly frequent and sophisticated cyber attacks.
                            </p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">Chat With a Specialist</Link>
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
                        <h2 className="font-headline text-3xl font-bold">How do you turn data into valuable information to share with your customers in a secure and compliant way?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">The right finance IT solutions can help you:</p>
                    </div>
                    <div className="mt-12 max-w-4xl mx-auto space-y-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                <p>{benefit}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
                        {crmImage && (
                             <div className="relative h-64 w-full">
                                <Image src={crmImage.imageUrl} alt={crmImage.description} fill className="object-contain rounded-lg" data-ai-hint={crmImage.imageHint} />
                            </div>
                        )}
                        {teamImage && (
                            <div className="relative h-64 w-full">
                                <Image src={teamImage.imageUrl} alt={teamImage.description} fill className="object-cover rounded-lg" data-ai-hint={teamImage.imageHint} />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 text-center">
                <div className="container max-w-4xl">
                    <h2 className="font-headline text-2xl font-bold">Learn how technology can help you meet regulatory compliance and reduce costs, all while achieving business growth.</h2>
                    <Button asChild variant="link" className="mt-4 text-lg">
                        <Link href="/contact">Contact us today to learn more about how we can help your financial organization.</Link>
                    </Button>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <h2 className="text-center font-headline text-3xl font-bold mb-12">Resources</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {resources.map((resource) => (
                            <Card key={resource.title}>
                                <CardHeader>
                                    <p className="text-sm font-semibold text-primary">{resource.type}</p>
                                    <CardTitle>{resource.title}</CardTitle>
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
    );
};
