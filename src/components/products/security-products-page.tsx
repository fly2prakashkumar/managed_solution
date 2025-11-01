
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Server } from "lucide-react";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export const SecurityProductsPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Security", href: "/products/security-products" },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'security-products-hero');
    const cyberDataImage = PlaceHolderImages.find(p => p.id === 'cyber-data-security');

    const offerings = [
        { title: "Endpoint Protection (SentinelOne)", description: "AI-driven technology for real-time detection, response, and prevention." },
        { title: "Threat Detection (ConnectWise SIEM)", description: "A comprehensive solution with powerful monitoring and threat intelligence capabilities." },
        { title: "Datacenter & Network Monitoring (LogicMonitor®)", description: "Provides real-time visibility and customizable alerts." },
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
                             <h1 className="font-headline text-4xl md:text-5xl font-bold">Advanced Cybersecurity Products for Business Threat Protection</h1>
                            <p className="mt-4 text-lg text-muted-foreground">Powerful Standalone Security Tools to Protect What Matters Most.</p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">Chat With a Security Specialist</Link>
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
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl font-bold">Our Offerings</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {offerings.map(offering => (
                            <Card key={offering.title}>
                                <CardHeader>
                                    <CardTitle>{offering.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{offering.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <h3 className="font-headline text-2xl font-bold">Our Process</h3>
                        <p className="mt-4 text-muted-foreground">
                            Managed security procurement covers endpoint protection, threat detection, datacenter monitoring, and Microsoft security solutions.
                        </p>
                         <Button asChild className="mt-6">
                            <Link href="/contact">Get Help Choosing Security Tools</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container text-center max-w-4xl">
                     <h2 className="font-headline text-3xl font-bold">Flexibility is our Forte</h2>
                     <p className="mt-4 text-muted-foreground">
                         We also offer comprehensive Microsoft Security Solutions as well as Managed Secure Services.
                     </p>
                     <h3 className="font-headline text-2xl font-bold mt-8">Let's Find The Right Security tool For You</h3>
                     <div className="mt-8 grid md:grid-cols-2 gap-8">
                         <Card className="text-left">
                             <CardHeader className="flex-row items-center gap-4">
                                 <ShieldCheck className="w-8 h-8 text-primary"/>
                                 <CardTitle>Microsoft Security Services</CardTitle>
                             </CardHeader>
                             <CardContent>
                                 <Button asChild variant="link" className="p-0"><Link href="/services/microsoft-security">Learn More</Link></Button>
                             </CardContent>
                         </Card>
                         <Card className="text-left">
                             <CardHeader className="flex-row items-center gap-4">
                                 <Server className="w-8 h-8 text-primary"/>
                                 <CardTitle>Managed Secure</CardTitle>
                             </CardHeader>
                             <CardContent>
                                 <Button asChild variant="link" className="p-0"><Link href="/services/cybersecurity">Learn More</Link></Button>
                             </CardContent>
                         </Card>
                     </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    {cyberDataImage && (
                        <div className="relative h-96 w-full">
                            <Image src={cyberDataImage.imageUrl} alt={cyberDataImage.description} fill className="object-cover rounded-lg" data-ai-hint={cyberDataImage.imageHint} />
                        </div>
                    )}
                    <div>
                        <h2 className="font-headline text-2xl font-bold">Get access to these products and more through our top-of-the-line Procurement Services.</h2>
                         <Button asChild className="mt-6">
                            <Link href="/products/procurement-services">Procurement Services</Link>
                        </Button>
                    </div>
                </div>
            </section>
            
            <ContactSection />
        </div>
    );
};
