import Image from "next/image";
import Link from "next/link";
import { awards } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export const MergersAcquisitionsPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/solutions" },
        { label: "Technology Mergers and Acquisitions", href: "/solutions/technology-mergers-and-acquisitions" },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'mergers-acquisitions-hero');
    const productsImage = PlaceHolderImages.find(p => p.id === 'compliance-products');
    const caseStudyImage = PlaceHolderImages.find(p => p.id === 'bdr-case-study');

    const focusAreas = [
        "Messaging Platform Consolidation",
        "Identity Management",
        "Document Management Services",
        "Security Optimization and Integration",
        "Project Management",
        "Integrate Windows Servers"
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
                    <h1 className="font-headline text-4xl md:text-5xl font-bold max-w-3xl mx-auto">Seamlessly Integrate Your Systems Without Missing a Beat</h1>
                    <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                        <Link href="/contact">Get Started Today</Link>
                    </Button>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                     {heroImage && (
                        <div className="relative h-80 w-full">
                            <Image src={heroImage.imageUrl} alt={heroImage.description} fill className="object-cover rounded-lg" data-ai-hint={heroImage.imageHint} />
                        </div>
                    )}
                    <div>
                        <h2 className="font-headline text-3xl font-bold">M&A Technology Integration</h2>
                        <ul className="mt-6 space-y-3 list-disc list-inside">
                            {focusAreas.map(area => <li key={area}>{area}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                         {productsImage && (
                            <div className="relative h-80 w-full">
                                <Image src={productsImage.imageUrl} alt={productsImage.description} fill className="object-cover rounded-lg" data-ai-hint={productsImage.imageHint} />
                            </div>
                        )}
                    </div>
                    <div>
                        <h2 className="font-headline text-3xl font-bold">We're here to help.</h2>
                        <p className="mt-4 text-muted-foreground">
                            Seamless Integration is a crucial component of Technology mergers and acquisitions. Without a strategic plan to inventory, assess, and migrate all systems, databases and applications, you're facing a high risk large-scale failure.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold">Choose Managed Solution as Your M&A Technology Partner</h2>
                        <p className="mt-4 text-muted-foreground">
                            We created a single Active Directory for over 150K members and successfully transitioned an enterprise customer to a CSP model, saving them 2.5 million dollars in the first year and 300 million dollars overall.
                        </p>
                        <Button asChild className="mt-8">
                            <Link href="#">Download the Full Case Study</Link>
                        </Button>
                    </div>
                     {caseStudyImage && (
                        <div className="relative h-96 w-full max-w-2xl mx-auto mt-12">
                            <Image src={caseStudyImage.imageUrl} alt={caseStudyImage.description} fill className="object-contain" data-ai-hint={caseStudyImage.imageHint} />
                        </div>
                    )}
                </div>
            </section>

            <ContactSection />
        </div>
    );
};
