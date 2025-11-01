
import Image from "next/image";
import Link from "next/link";
import { complianceRegulations, complianceTestimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star } from "lucide-react";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export const ComplianceManagementPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/solutions" },
        { label: "Compliance Management System", href: "/services/compliance-management" },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'compliance-hero');
    const productsImage = PlaceHolderImages.find(p => p.id === 'compliance-products');
    const cloudImage = PlaceHolderImages.find(p => p.id === 'compliance-cloud');
    const datasheetImage = PlaceHolderImages.find(p => p.id === 'datasheet-cta');
    const blogImage = PlaceHolderImages.find(p => p.id === 'compliance-blog-1');

    const services = [
        { title: "Expert Guidance" },
        { title: "Tailored Assessment" },
        { title: "Ongoing Support" },
        { title: "vCISO Expertise" }
    ];

    const securityOfferings = [
        "System Security Plan",
        "Acceptable Use Policy",
        "Business Continuity Planning/Business Impact Analysis",
        "Disaster Recovery Planning",
        "Incident Response Plan",
        "Third Party Risk Assessments/Internal Risk Visual of Offerings"
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
                             <h1 className="font-headline text-4xl md:text-5xl font-bold">Compliance Management System</h1>
                            <p className="mt-4 text-lg text-muted-foreground">Maintain Optimal Compliance Standards with Virtual CISO (vCISO) Support Services.</p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">Get Started Today</Link>
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
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="grid grid-cols-2 gap-8">
                        {services.map(service => (
                            <Card key={service.title}>
                                <CardHeader>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                    <div>
                        {productsImage && (
                            <div className="relative h-64 w-full mb-8">
                                <Image src={productsImage.imageUrl} alt={productsImage.description} fill className="object-cover rounded-lg" data-ai-hint={productsImage.imageHint} />
                            </div>
                        )}
                        <p className="font-semibold">Ensure your organization is protected and prepared with our detailed security offerings:</p>
                        <ul className="mt-4 space-y-2 list-disc list-inside">
                            {securityOfferings.map(offering => <li key={offering}>{offering}</li>)}
                        </ul>
                         {cloudImage && (
                            <div className="relative h-64 w-full mt-8">
                                <Image src={cloudImage.imageUrl} alt={cloudImage.description} fill className="object-cover rounded-lg" data-ai-hint={cloudImage.imageHint} />
                            </div>
                        )}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Supporting Top Compliance Regulations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {complianceRegulations.map(reg => (
                            <Card key={reg.acronym}>
                                <CardHeader>
                                    <CardTitle className="font-headline">{reg.acronym}</CardTitle>
                                    <p className="text-sm text-muted-foreground pt-1">{reg.name}</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm">{reg.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button asChild variant="link" size="lg">
                            <Link href="#">Learn More About Our End-to-End Compliance Solution Today</Link>
                        </Button>
                        <div className="mt-4">
                            <Button asChild>
                                <Link href="#">View Datasheet</Link>
                            </Button>
                             {datasheetImage && (
                                <div className="relative h-64 w-full max-w-sm mx-auto mt-4">
                                <Image src={datasheetImage.imageUrl} alt={datasheetImage.description} fill className="object-contain" data-ai-hint={datasheetImage.imageHint} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container text-center">
                     <h2 className="font-headline text-3xl font-bold mb-12">What Our Customers Say</h2>
                     <div className="grid md:grid-cols-3 gap-8">
                        {complianceTestimonials.map((testimonial, index) => (
                             <Card key={index}>
                                <CardContent className="p-6 text-left">
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
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="font-headline text-3xl font-bold text-center mb-12">Additional Resources</h2>
                    <div className="max-w-md mx-auto">
                        <Card>
                             {blogImage && (
                                <div className="relative h-64 w-full">
                                    <Image src={blogImage.imageUrl} alt="Best practices for compliance management" fill className="object-cover" data-ai-hint={blogImage.imageHint} />
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle>What Are Some Best Practices for Compliance Management?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button asChild variant="link" className="p-0">
                                    <Link href="#">Read More</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
