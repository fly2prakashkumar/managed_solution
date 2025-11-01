
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, LifeBuoy, Fingerprint } from "lucide-react";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export const MicrosoftLicensingPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Microsoft Licensing", href: "/products/microsoft-licensing" },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'managed-secure');
    const teamImage = PlaceHolderImages.find(p => p.id === 'work-team');
    const heroTemplateImage = PlaceHolderImages.find(p => p.id === 'hero-template-5');
    const cspIntroImage = PlaceHolderImages.find(p => p.id === 'csp-licensing-intro');

    const benefits = [
        { title: "Pricing Flexibility", icon: DollarSign, description: "CSP offers a pay-as-you-go model, unlike EA's true-up, so there are no surprise costs." },
        { title: "No Minimum Number of Users", icon: Users, description: "EA requires a minimum of 500 users/devices, but CSP has no minimum." },
        { title: "Expert Support", icon: LifeBuoy, description: "CSP includes around-the-clock support, while EA is self-managed." },
        { title: "Licensing Flexibility", icon: Fingerprint, description: "Pay only for what you use, following the Cloud Subscription principle." },
    ];
    
    const guarantees = [
        "Premier Support:",
        "Consultation on Cloud Solutions",
        "24/7 Prompt Response",
        "Best Price",
    ]

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
                             <h1 className="font-headline text-4xl md:text-5xl font-bold">Microsoft Licensing</h1>
                            <p className="mt-4 text-lg text-muted-foreground">Top Microsoft Cloud Solution Provider offering low rates and premium support.</p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">Chat With a Licensing Specialist</Link>
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
                <div className="container text-center max-w-4xl">
                    <h2 className="font-headline text-3xl font-bold">Pay-As-You-Go (CSP) Licensing</h2>
                    <p className="mt-4 text-muted-foreground">
                        Our operating expense model allows for scalability with new/seasonal employees, and you receive the most updated and recent versions along with premier support.
                    </p>
                    <Button asChild className="mt-6">
                        <Link href="/contact">Request Licensing Help</Link>
                    </Button>
                    <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
                        {teamImage && (
                            <div className="relative h-64 w-full">
                                <Image src={teamImage.imageUrl} alt={teamImage.description} fill className="object-cover rounded-lg" data-ai-hint={teamImage.imageHint} />
                            </div>
                        )}
                        {heroTemplateImage && (
                            <div className="relative h-64 w-full">
                                <Image src={heroTemplateImage.imageUrl} alt={heroTemplateImage.description} fill className="object-cover rounded-lg" data-ai-hint={heroTemplateImage.imageHint} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container max-w-5xl">
                     <h2 className="font-headline text-3xl font-bold text-center mb-12">Flexible Licensing Options</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Monthly NCE CSP –</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Higher premium, month-to-month basis, can vary seat count daily with pro-rated charge.</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle>Annual (pay monthly) NCE CSP Term –</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Lower price per seat, invoiced monthly for 12 months, ability to increase seat count anytime.</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="text-center mt-12">
                        <Button asChild>
                            <Link href="/contact">Talk to a Microsoft Expert</Link>
                        </Button>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <h2 className="font-headline text-3xl font-bold text-center mb-12">Why Choose Managed Solution for your Licensing Needs</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {benefits.map(benefit => (
                            <Card key={benefit.title}>
                                <CardHeader className="items-center text-center">
                                    <div className="p-3 bg-primary/10 rounded-full w-fit">
                                        <benefit.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                     {cspIntroImage && (
                        <div className="relative h-96 w-full">
                            <Image src={cspIntroImage.imageUrl} alt={cspIntroImage.description} fill className="object-cover rounded-lg" data-ai-hint={cspIntroImage.imageHint} />
                        </div>
                    )}
                    <div>
                        <h2 className="font-headline text-3xl font-bold">Why Choose Managed Solution as Your CSP Licensing Provider</h2>
                        <p className="mt-4 text-muted-foreground">
                            As a Microsoft Gold Partner, we provide:
                        </p>
                        <ul className="mt-6 space-y-4">
                            {guarantees.map(item => (
                                <li key={item} className="font-semibold">{item}</li>
                            ))}
                        </ul>
                        <p className="mt-6 text-muted-foreground">
                            We become an extension of your team, providing expert guidance and support to optimize your Microsoft licenses.
                        </p>
                        <Button asChild className="mt-8">
                            <Link href="/contact">Optimize My Microsoft Licenses</Link>
                        </Button>
                    </div>
                </div>
            </section>
            
            <ContactSection />
        </div>
    );
};
