import Image from "next/image";
import Link from "next/link";
import { awards, entraIdIntuneFaqs } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export const EntraIdIntunePage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/solutions" },
        { label: "Entra ID and Intune Migration", href: "/solutions/entra-id-and-intune-migration" },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'entra-id-employee-lifecycle');
    const teamImage = PlaceHolderImages.find(p => p.id === 'entra-id-webpage');
    const datasheetImage = PlaceHolderImages.find(p => p.id === 'entra-id-datasheet');
    const meetTeamImage = PlaceHolderImages.find(p => p.id === 'meet-our-team-section');
    const adMigrationImage = PlaceHolderImages.find(p => p.id === 'active-directory-migration-skyscraper');
    const riskAnalysisImage = PlaceHolderImages.find(p => p.id === 'risk-analysis-ad-degunking');

    const entraMigrations = [
        "Rebranding Transition.",
        "Identity System Modernization.",
        "Application Authentication Migration.",
        "Security Enhancements.",
        "Hybrid to Cloud-Only Identity."
    ];

    const intuneMigrations = [
        "Tenant-to-Tenant Migration.",
        "Migration from Other MDMs (e.g., AirWatch or MobileIron).",
        "Hybrid to Cloud Transition (e.g., from Configuration Manager (SCCM)).",
        "Policy & App Migration."
    ];

    const benefits = [
        "Secure Adaptive Access",
        "Seamless User Experiences",
        "Unified Identity Management",
        "Automated Identity Processes"
    ];

    const trustedExpertsPoints = [
        "Certified Microsoft Experts",
        "Proven Track Record",
        "Secure Delivery",
        "Cost Effective"
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
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Expert Entra ID and Intune Migration Services</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Seamlessly move identity and device management from legacy on-prem systems to modern, cloud-based solutions.</p>
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
                        <Link href="#" className="text-primary font-semibold hover:underline">Entra ID and Intune Migration Guide</Link>
                        <h2 className="font-headline text-3xl font-bold mt-4">Streamline Identity and Endpoint Management...</h2>
                        <p className="mt-4 text-muted-foreground">
                            ...by migrating to Microsoft Entra ID (formerly Azure Active Directory) and Microsoft Intune. We help you build a Zero Trust architecture, automate provisioning, and achieve scalable endpoint control.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-headline text-2xl font-bold">What Entra ID Migrations Involve</h3>
                        <ul className="mt-4 space-y-2 list-disc list-inside">
                            {entraMigrations.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-headline text-2xl font-bold">What Intune Migrations Involve</h3>
                        <ul className="mt-4 space-y-2 list-disc list-inside">
                            {intuneMigrations.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <div className="text-center">
                        <h2 className="font-headline text-3xl font-bold">Modernize with Intune & Entra ID</h2>
                        <p className="mt-2 text-muted-foreground">Boost Your Cybersecurity with Microsoft Entra ID Security</p>
                        <div className="mt-8 max-w-2xl mx-auto">
                            <div className="aspect-video bg-muted flex items-center justify-center rounded-lg">
                                <p className="text-muted-foreground">Video player for Entra ID Security Assessment</p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">Tap to unmute</p>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <h3 className="font-headline text-2xl font-bold">Our Process</h3>
                        <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">We provide a comprehensive migration plan, execute it with minimal disruption, and offer post-migration support to ensure your success.</p>
                        <Button asChild size="lg" className="mt-6">
                            <Link href="/contact">Get Migration Support Today</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                     {teamImage && (
                        <div className="relative h-96 w-full">
                            <Image src={teamImage.imageUrl} alt={teamImage.description} fill className="object-cover rounded-lg" data-ai-hint={teamImage.imageHint} />
                        </div>
                    )}
                    <div>
                        <h2 className="font-headline text-3xl font-bold">Managing the Employee Lifecycle with Microsoft Entra ID, Intune and AutoPilot- Business Automation</h2>
                        <div className="mt-8 grid grid-cols-2 gap-6">
                            {benefits.map(benefit => (
                                <div key={benefit}>
                                    <h4 className="font-semibold text-lg">{benefit}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold">What We Mean By Specialized</h2>
                    <p className="mt-4 text-muted-foreground">As a Microsoft Solution Partner, we offer unparalleled expertise.</p>
                     <div className="mt-8 flex justify-center items-center flex-wrap gap-8">
                        {awards.map((award) => {
                            const awardImage = PlaceHolderImages.find(p => p.id === award.imageId);
                            return awardImage ? (
                                <Image
                                    key={award.title}
                                    src={awardImage.imageUrl}
                                    alt={award.title}
                                    width={140}
                                    height={70}
                                    className="object-contain"
                                    data-ai-hint={awardImage.imageHint}
                                />
                            ) : null;
                        })}
                    </div>
                    {meetTeamImage && (
                         <div className="relative h-80 w-full max-w-4xl mx-auto mt-12">
                            <Image src={meetTeamImage.imageUrl} alt={meetTeamImage.description} fill className="object-cover rounded-lg" data-ai-hint={meetTeamImage.imageHint} />
                        </div>
                    )}
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="font-headline text-3xl font-bold text-center mb-12">Your Trusted Experts For Entra ID Delivery</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {trustedExpertsPoints.map(point => (
                            <Card key={point}>
                                <CardHeader>
                                    <CardTitle>{point}</CardTitle>
                                </CardHeader>
                                {point === "Cost Effective" && <CardContent><p className="text-sm text-muted-foreground">Includes Copilot in Intune for AI-powered insights and automation.</p></CardContent>}
                            </Card>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Button asChild variant="link">
                            <Link href="#">See what Entra ID can do for your business.</Link>
                        </Button>
                        <div className="mt-4">
                            <Button asChild>
                                <Link href="#">Download now</Link>
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
                <div className="container max-w-4xl">
                    <h2 className="text-center font-headline text-4xl font-bold mb-12">Microsoft Entra ID and Intune FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {entraIdIntuneFaqs.map(faq => (
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

            <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="text-center font-headline text-3xl font-bold mb-12">Additional Resources</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card>
                            {adMigrationImage && (
                                <div className="relative h-48 w-full"><Image src={adMigrationImage.imageUrl} alt="Active Directory Migration" fill className="object-cover" data-ai-hint={adMigrationImage.imageHint} /></div>
                            )}
                            <CardHeader><CardTitle>Everything You Need to Know About an Active Directory Migration</CardTitle></CardHeader>
                            <CardContent><Button variant="link" asChild className="p-0"><Link href="#">Read More</Link></Button></CardContent>
                        </Card>
                        <Card>
                             {riskAnalysisImage && (
                                <div className="relative h-48 w-full"><Image src={riskAnalysisImage.imageUrl} alt="Risk Analysis" fill className="object-cover" data-ai-hint={riskAnalysisImage.imageHint} /></div>
                            )}
                            <CardHeader><CardTitle>10 Things to Know Before “De-gunking” Your Active Directory</CardTitle></CardHeader>
                            <CardContent><Button variant="link" asChild className="p-0"><Link href="#">Read More</Link></Button></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>Watch</CardTitle></CardHeader>
                            <CardContent>
                                <div className="aspect-video bg-muted flex items-center justify-center rounded-lg">
                                    <p className="text-muted-foreground text-sm">Video unavailable</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
};
