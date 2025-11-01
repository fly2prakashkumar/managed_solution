
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import { CheckCircle } from "lucide-react";

export const NonProfitPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Non-Profit Technology Services", href: "/industries/non-profit-technology-services" },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'non-profit-hero');
    const teamImage = PlaceHolderImages.find(p => p.id === 'work-team');
    const heroTemplateImage = PlaceHolderImages.find(p => p.id === 'hero-template-5');

    const benefits = [
        "Leverage data for more insights​",
        "Accelerate their mission​",
        "Drive a greater impact​",
        "Take advantage of discounts​"
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
                            <h2 className="font-headline text-3xl font-bold">Managed IT Services for Nonprofits</h2>
                             <h1 className="font-headline text-4xl md:text-5xl font-bold">Non-Profit Technology Services</h1>
                             <p className="mt-4 text-lg text-muted-foreground">Technology can and should be used as a powerful force driving social change and enabling global collaboration.​</p>
                             <p className="mt-4 text-muted-foreground">Non-Profits are changing the world, and digital transformation can extend their reach.</p>
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
                        <h2 className="font-headline text-3xl font-bold">Reducing Non-Profit Costs with IT Expertise</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We help non-profits reduce costs by leveraging Microsoft Office 365's workplace solutions and digital transformation strategies.
                        </p>
                    </div>
                     <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                        <p className="font-semibold">{benefit}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
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
                            <Link href="/contact">Chat With a Licensing Specialist</Link>
                        </Button>
                    </div>
                </div>
            </section>
            
            <ContactSection />
        </div>
    );
};
