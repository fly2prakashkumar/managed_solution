
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SummaryClient from "@/app/blog/[slug]/summary-client";
import Breadcrumbs from "../shared/breadcrumbs";

const toc = [
    { title: "The New Era of Intelligent Security", href: "#new-era" },
    { title: "What Is Zero Trust? Definition and Foundational Pillars", href: "#what-is-zero-trust" },
    { title: "Why Zero Trust Is Reshaping Cybersecurity", href: "#why-reshaping" },
    { title: "Microsoft's Zero Trust Model: Architecture and Tools", href: "#ms-model" },
    { title: "Zero Trust Meets AI: The New Security Partnership", href: "#zt-ai" },
    { title: "Partnering with Experts for Zero Trust Success", href: "#partnering" },
    { title: "The Future of Secure AI and Zero Trust", href: "#future" }
];

const pillars = [
    "Verify explicitly",
    "Use least-privilege access",
    "Always assume breach"
];

const defenseAreas = [
    { title: "Identity", tools: "Microsoft Entra ID (formerly Azure AD)" },
    { title: "Devices and Endpoints", tools: "Microsoft Intune and Microsoft Defender XDR" },
    { title: "Applications", tools: "Microsoft Defender for Cloud Apps" },
    { title: "Network", tools: "Azure Firewall, DDoS Protection, and Defender with Azure Sentinel integration" },
    { title: "Infrastructure", tools: "Azure Security Center, Landing Zones, and Blueprint policies" },
    { title: "Data", tools: "Microsoft's Purview and Information Protection tools" },
    { title: "AI and Assistants", tools: "Copilot for Security, Copilot in Defender, and Copilot in Entra" },
    { title: "Visibility, Automation, and Orchestration", tools: "Microsoft Sentinel and Defender XDR" }
];

const partnerHelp = [
    "Assess their current posture",
    "Design and implement a tailored Microsoft Zero Trust model",
    "Integrate AI-driven Zero Trust solutions",
    "Prepare for the future of secure generative AI and responsible AI governance"
];

export const ZeroTrustPost = () => {
    const heroImage = PlaceHolderImages.find(p => p.id === 'blog-zerotrust-hero');
    const explainedImage = PlaceHolderImages.find(p => p.id === 'blog-zerotrust-explained');
    const graphImage = PlaceHolderImages.find(p => p.id === 'blog-zerotrust-graph');
    const blogPostContent = "Discover how Microsoft uses AI for Zero Trust strategy and how their Zero Trust AI solutions work together to safeguard data, empower secure AI adoption, and outpace evolving cyberthreats.";

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Blog", href: "/blog" },
        { label: "Harnessing AI for Zero Trust Architecture", href: "/blog/harnessing-ai-for-zero-trust-architecture" }
    ];

    return (
         <article className="py-12 md:py-20">
            <div className="container max-w-4xl">
                 <Breadcrumbs items={breadcrumbItems} />
                <header className="my-8">
                    <h1 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">
                        Harnessing AI for Zero Trust Architecture
                    </h1>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Last Updated: October 24, 2025
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
                    <h2 className="text-2xl font-bold font-headline">What You Need to Know About Zero Trust Security and AI</h2>
                    <p>{blogPostContent}</p>

                    <Card className="my-8">
                        <CardHeader><CardTitle>Table of Contents</CardTitle></CardHeader>
                        <CardContent>
                            <ul className="space-y-2 list-decimal list-inside">
                                {toc.map(item => (
                                    <li key={item.title}><Link href={item.href} className="text-primary hover:underline">{item.title}</Link></li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <section id="new-era" className="scroll-mt-20">
                        <h3 className="font-headline text-2xl font-bold">The New Era of Intelligent Security</h3>
                        <p>The defense strategy is to unite AI for Zero Trust into a single, cohesive defense strategy.</p>
                    </section>

                    <section id="what-is-zero-trust" className="scroll-mt-20">
                        <h3 className="font-headline text-2xl font-bold">What Is Zero Trust? Definition and Foundational Pillars</h3>
                        {explainedImage && (
                             <div className="relative my-8 h-64 w-full md:h-96">
                                <Image
                                src={explainedImage.imageUrl}
                                alt={explainedImage.description}
                                fill
                                className="rounded-lg object-contain"
                                data-ai-hint={explainedImage.imageHint}
                                />
                            </div>
                        )}
                        <p>The principle is to never trust, always verify. The three foundational pillars are:</p>
                        <ul className="list-disc space-y-2 pl-6">
                            {pillars.map(pillar => <li key={pillar}>{pillar}</li>)}
                        </ul>
                    </section>

                    <section id="why-reshaping" className="scroll-mt-20">
                        <h3 className="font-headline text-2xl font-bold">Why Zero Trust Is Reshaping Cybersecurity</h3>
                        <p>Zero Trust replaces the static, location-based security model with dynamic, data-centric verification.</p>
                    </section>

                    <section id="ms-model" className="scroll-mt-20">
                         <h3 className="font-headline text-2xl font-bold">Microsoft's Zero Trust Model: Architecture and Tools</h3>
                         <p>Microsoft integrates Zero Trust across Azure, Microsoft 365, and the broader Microsoft Security Stack. It lists eight key areas of defense:</p>
                         <div className="grid md:grid-cols-2 gap-4 mt-6">
                            {defenseAreas.map(area => (
                                <div key={area.title}>
                                    <h4 className="font-semibold">{area.title}</h4>
                                    <p className="text-sm text-muted-foreground">{area.tools}</p>
                                </div>
                            ))}
                         </div>
                    </section>

                    <section id="zt-ai" className="scroll-mt-20">
                        <h3 className="font-headline text-2xl font-bold">Zero Trust Meets AI: The New Security Partnership</h3>
                        <p>Zero Trust principles strengthen AI systems by enforcing controls, while AI enhances Zero Trust by improving detection and automation.</p>
                        {graphImage && (
                             <div className="relative my-8 h-64 w-full md:h-96">
                                <Image
                                src={graphImage.imageUrl}
                                alt={graphImage.description}
                                fill
                                className="rounded-lg object-contain"
                                data-ai-hint={graphImage.imageHint}
                                />
                                 <p className="text-xs text-center text-muted-foreground mt-2">credit: Microsoft</p>
                            </div>
                        )}
                    </section>

                    <section id="partnering" className="scroll-mt-20">
                        <h3 className="font-headline text-2xl font-bold">Partnering with Experts for Zero Trust Success</h3>
                        <p>As a Microsoft Cloud Partner with advanced specialization in Microsoft security, Managed Solution's experts help businesses:</p>
                        <ul className="list-disc space-y-2 pl-6 mt-4">
                            {partnerHelp.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </section>

                     <section id="future" className="scroll-mt-20 mt-12 text-center bg-secondary p-8 rounded-lg">
                        <h3 className="font-headline text-2xl font-bold">Ready to strengthen your security strategy?</h3>
                        <p className="mt-4">Contact Managed Solution today to explore our Zero Trust consulting and Microsoft Security services...</p>
                        <p className="mt-4">AI-driven Zero Trust architecture is not just a strategy, but a new cornerstone of zero trust security and the future of cyber defense.</p>
                        <p className="mt-4 text-sm text-muted-foreground">Originally created: October 20, 2025</p>
                        <Button asChild className="mt-6">
                            <Link href="/contact">Contact Managed Solution</Link>
                        </Button>
                    </section>

                </div>

                <SummaryClient content={blogPostContent} />
            </div>
        </article>
    )
}
