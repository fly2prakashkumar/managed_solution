
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SummaryClient from "@/app/blog/[slug]/summary-client";
import Breadcrumbs from "../shared/breadcrumbs";

const tableOfContents = [
    { title: "Why This Matters for SMBs", href: "#why-it-matters" },
    { title: "Microsoft Defender Suite for Business Premium", href: "#defender-suite" },
    { title: "Microsoft Purview Suite for Business Premium", href: "#purview-suite" },
    { title: "Microsoft Defender + Purview Suite for Business Premium", href: "#defender-purview-suite" },
    { title: "Why Strong Security and Compliance Are Smart Investments for SMBs", href: "#why-invest" },
    { title: "Microsoft 365 E5 Benefits", href: "#e5-benefits" },
    { title: "Microsoft 365 Licensing Services", href: "#licensing-services" }
];

const M365E5Benefits = [
    "Protect sensitive data across clouds, apps, and devices.",
    "Build trust with customers through robust data governance.",
    "Simplify regulatory compliance with built-in tools.",
    "Scale securely with enterprise-grade threat protection.",
    "Stay proactive with automated risk detection and remediation."
];

const licensingServices = [
    "Expert Guidance",
    "Seamless Deployment",
    "Cost Optimization",
    "Ongoing Support"
];

export const M365BusinessPremiumPost = () => {
    const heroImage = PlaceHolderImages.find(p => p.id === 'blog-m365-hero');
    const solutionsPlaysImage = PlaceHolderImages.find(p => p.id === 'blog-m365-solutions-plays');
    const blogPostContent = "Microsoft is introducing new add-on suites for Microsoft 365 Business Premium that offer security and compliance capabilities from Microsoft E5, at a fraction of the traditional cost.";

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Blog", href: "/blog" },
        { label: "Microsoft 365 Business Premium New Offerings for SMBs", href: "/blog/microsoft-365-business-premium-new-offerings" }
    ];

    return (
        <article className="py-12 md:py-20">
            <div className="container max-w-4xl">
                 <Breadcrumbs items={breadcrumbItems} />
                <header className="my-8">
                    <h1 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">
                        Microsoft 365 Business Premium New Offerings for SMBs
                    </h1>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Last Updated: October 14, 2025 | Originally created: October 13, 2025
                    </p>
                </header>

                {heroImage && (
                    <div className="relative mb-8 h-64 w-full md:h-96">
                        <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="rounded-lg object-cover"
                        priority
                        data-ai-hint={heroImage.imageHint}
                        />
                    </div>
                )}
                
                <div className="prose prose-lg dark:prose-invert mx-auto max-w-none prose-p:text-foreground/80 prose-headings:font-headline prose-headings:text-foreground">
                    <h2 className="text-2xl font-bold font-headline">New Microsoft Offerings Open Up Enterprise-Grade Security to SMBs, for Less</h2>
                    <p>{blogPostContent}</p>

                    <Card className="my-8">
                        <CardHeader><CardTitle>Table of Contents</CardTitle></CardHeader>
                        <CardContent>
                            <ul className="space-y-2 list-decimal list-inside">
                                {tableOfContents.map(item => (
                                    <li key={item.title}><Link href={item.href} className="text-primary hover:underline">{item.title}</Link></li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <section id="why-it-matters">
                        <h3 className="font-headline text-2xl font-bold">Why This Matters for SMBs</h3>
                        <p>This initiative allows SMBs to access advanced security and compliance tools previously reserved for large enterprises, leveling the playing field and providing robust protection at an affordable price point.</p>
                    </section>
                    
                    {solutionsPlaysImage && (
                         <div className="relative my-8 h-64 w-full md:h-96">
                            <Image
                            src={solutionsPlaysImage.imageUrl}
                            alt={solutionsPlaysImage.description}
                            fill
                            className="rounded-lg object-contain"
                            data-ai-hint={solutionsPlaysImage.imageHint}
                            />
                        </div>
                    )}

                    <section id="defender-suite" className="scroll-mt-20">
                        <h3 className="font-headline text-2xl font-bold">Microsoft Defender Suite for Business Premium</h3>
                        <p>This suite includes Microsoft Defender for Endpoint Plan 2, Microsoft Defender for Office 365 Plan 2, Microsoft Defender for Cloud Apps, and Entra ID P2. Individually, these services would cost over $28.20 per user per month. The suite is priced at $10 per user per month, representing a 65% discount.</p>
                    </section>

                    <section id="purview-suite" className="scroll-mt-20">
                        <h3 className="font-headline text-2xl font-bold">Microsoft Purview Suite for Business Premium</h3>
                        <p>This suite bundles Information Protection & Data Loss Prevention (DLP), Insider Risk Management, Message Encryption & Customer Key, and eDiscovery & Audit. Previously costing $19 per user per month, the suite price is now $10 per user per month—a 47% price reduction.</p>
                    </section>
                    
                    <section id="defender-purview-suite" className="scroll-mt-20">
                        <h3 className="font-headline text-2xl font-bold">Microsoft Defender + Purview Suite for Business Premium</h3>
                        <p>This comprehensive package includes everything from both the Defender and Purview suites. Valued at over $47 per user per month, it is now available for a bundled price of $15 per user per month, offering a 68% pricing discount.</p>
                    </section>

                    <section id="why-invest" className="scroll-mt-20">
                        <h3 className="font-headline text-2xl font-bold">Why Strong Security and Compliance Are Smart Investments for SMBs</h3>
                        <p>Investing in robust security and compliance is not just a defensive measure; it's a strategic move that builds customer trust, enhances operational resilience, and provides a competitive advantage in an increasingly digital world.</p>
                    </section>

                    <section id="e5-benefits" className="scroll-mt-20">
                        <h3 className="font-headline text-2xl font-bold">Microsoft 365 E5 Benefits</h3>
                        <ul className="list-disc space-y-2 pl-6">
                            {M365E5Benefits.map(benefit => <li key={benefit}>{benefit}</li>)}
                        </ul>
                    </section>

                     <section id="licensing-services" className="scroll-mt-20">
                        <h3 className="font-headline text-2xl font-bold">How our Microsoft 365 Licensing Services Can Help</h3>
                        <ul className="list-disc space-y-2 pl-6">
                            {licensingServices.map(service => <li key={service}>{service}</li>)}
                        </ul>
                    </section>

                     <section className="mt-12 text-center bg-secondary p-8 rounded-lg">
                        <h3 className="font-headline text-2xl font-bold">Ready to Upgrade Your IT Security Without the Enterprise Price Tag?</h3>
                        <p className="mt-4">Let us help you make the switch. Contact our team today to explore your options and unlock smarter, more affordable protection for your business.</p>
                        <Button asChild className="mt-6">
                            <Link href="/contact">Contact our team today</Link>
                        </Button>
                    </section>

                </div>

                <SummaryClient content={blogPostContent} />
            </div>
        </article>
    );
};
