
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import { CheckCircle } from "lucide-react";

export const LifeSciencesPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Life Sciences Technology Services", href: "/industries/life-sciences-technology-services" },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'biotech-intro');
    const blogImage = PlaceHolderImages.find(p => p.id === 'compliance-man');
    const caseStudyImage = PlaceHolderImages.find(p => p.id === 'case-study-image');

    const benefits = [
        "Facilitating real-time and secure collaboration among researchers, partners and other third parties.",
        "Automating and optimizing workflows to improve quality, safety and compliance.",
        "Ensuring regulatory compliance by implementing security measures, access controls, and data protection strategies."
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
                             <h1 className="font-headline text-4xl md:text-5xl font-bold">IT Services for the Pharma & Life Sciences</h1>
                            <p className="mt-4 text-lg text-muted-foreground">Creating a Synergy Between Science and Technology.</p>
                            <p className="mt-4 text-muted-foreground">
                                Biotechnology companies leverage technology to accelerate the discovery and development of such products.
                            </p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">Request HIPAA Compliant IT</Link>
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
                <div className="container max-w-4xl">
                    <div className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                <p>{benefit}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-8 text-lg italic text-center">
                        By relying on technical experts who have been serving the local life sciences industry since 2002, our clients can focus on what they do best: researching, discovering, and developing products to heal, feed, and fuel the world.
                    </p>
                    <div className="mt-12 text-center">
                        <h3 className="font-headline text-2xl font-bold">Managed IT for Healthcare Providers​</h3>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="text-center font-headline text-3xl font-bold mb-12">Additional Resources</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card>
                             {blogImage && (
                                <div className="relative h-64 w-full">
                                    <Image src={blogImage.imageUrl} alt={blogImage.description} fill className="object-cover rounded-t-lg" data-ai-hint={blogImage.imageHint} />
                                </div>
                            )}
                            <CardContent className="p-6">
                                <Button asChild variant="link" className="p-0 text-lg">
                                    <Link href="/blog">View Our Blog</Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card>
                             {caseStudyImage && (
                                <div className="relative h-64 w-full">
                                    <Image src={caseStudyImage.imageUrl} alt={caseStudyImage.description} fill className="object-cover rounded-t-lg" data-ai-hint={caseStudyImage.imageHint} />
                                </div>
                            )}
                            <CardContent className="p-6">
                                <Button asChild variant="link" className="p-0 text-lg">
                                    <Link href="/case-studies">Customer Stories</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
};
