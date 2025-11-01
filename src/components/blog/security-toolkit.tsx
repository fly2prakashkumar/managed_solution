
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SummaryClient from "@/app/blog/[slug]/summary-client";
import Breadcrumbs from "../shared/breadcrumbs";

const toc = [
    { title: "Why Cybersecurity Matters – 2025 Cybersecurity Stats", href: "#why-it-matters" },
    { title: "Your Business Security Toolkit", href: "#toolkit" },
    { title: "Security Services and Solutions", href: "#services-solutions" },
    { title: "Datasheets and Case Studies", href: "#datasheets-case-studies" },
    { title: "Informational Videos and Webinars", href: "#videos-webinars" },
    { title: "Security Blogs", href: "#blogs" },
    { title: "Are Cybersecurity Vendors & Consulting Services Worth It?", href: "#worth-it" },
    { title: "Conclusion", href: "#conclusion" }
];

const stats = [
    "93% of companies experienced at least one security incident in the past year.",
    "Ransomware attacks surged 149% in early 2025.",
    "AI-driven phishing is now three times more effective than traditional campaigns.",
    "Cybercrime is projected to cost the world over $10.5 trillion annually by the end of 2025."
];

const toolkitResources = {
    "Security Services & Solutions": [
        { title: "Microsoft Security Services", description: "Leveraging Microsoft's advanced security stack to protect identities, endpoints, and data.", href: "/services/microsoft-security" },
        { title: "Managed IT Security", description: "Comprehensive IT security, from threat detection to compliance support.", href: "/services/cybersecurity" },
        { title: "Backup and Disaster Recovery Services", description: "Ensuring business continuity.", href: "/services/data-backup" },
        { title: "Security Products Procurement", description: "Exploring security procurement services.", href: "/products/security-products" },
        { title: "Business Security", description: "Tailored security solutions for SMBs and enterprises alike.", href: "/services/cybersecurity" }
    ],
    "Data Sheets & Case Studies": [
        { title: "Financial Organization Compliance | Case Study", description: "How the company helped a financial firm stay compliant and secure.", href: "/case-studies" },
        { title: "Microsoft Intune | Data Sheet", description: "Securing endpoints and mobile devices.", href: "/solutions/entra-id-and-intune-migration" },
        { title: "Microsoft Entra | Data Sheet", description: "Enhancing identity management and access control.", href: "/solutions/entra-id-and-intune-migration" }
    ],
    "Videos & Webinars": [
        { title: "Staying Ahead of Cyberthreats with Zero-Trust | Webinar", description: "A deep dive into Microsoft's multi-layer defense capabilities.", href: "/events" },
        { title: "The Future of Cybersecurity | Webinar", description: "Insights into emerging threats and how to prepare.", href: "/events" },
        { title: "Microsoft's Best-Kept Security Secrets | Webinar", description: "Unlocking hidden security value the user may already own.", href: "/events" },
        { title: "Microsoft Security and AI | Webinar", description: "Learning how AI and Microsoft tools work together.", href: "/events" },
        { title: "Microsoft Zero Trust Model | Video", description: "Understanding the Zero Trust model using Entra ID, Intune, and Defender.", href: "/events" }
    ],
    "Security Blogs": [
        { title: "Identity Management and Endpoint Protection with Intune and Entra ID", description: "Best practices for securing identities and devices.", href: "/blog" },
        { title: "The CISOs Top 5 Worst Nightmares and How to Prevent Them", description: "Preventing the most feared cybersecurity incidents.", href: "/blog" },
        { title: "Cybersecurity Incidents | 8 Steps to Protect Your Business", description: "A practical guide to incident response and prevention.", href: "/blog" },
        { title: "A Comprehensive Guide to Microsoft Security", description: "Everything about Microsoft's security ecosystem.", href: "/blog" },
        { title: "6 Simple Steps to Keep Your Business Secure", description: "Quick wins for improving security posture.", href: "/blog" }
    ]
};

const vendorBenefits = [
    "Peace of Mind",
    "Deep Expertise (HIPAA, GDPR, and PCI-DSS)",
    "Scalability & Flexibility",
    "Operational Efficiency",
    "Strategic Guidance"
];

export const SecurityToolkitPost = () => {
    const heroImage = PlaceHolderImages.find(p => p.id === 'blog-security-toolkit-hero');
    const toolkitImage = PlaceHolderImages.find(p => p.id === 'blog-security-toolkit-graphic');
    const blogPostContent = "Cybersecurity Awareness Month, observed every October since 2004, was launched by the U.S. Department of Homeland Security and the National Cyber Security Alliance to educate the public on the importance of cybersecurity.";
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Blog", href: "/blog" },
        { label: "Security Toolkit: 18 Resources for Cybersecurity Awareness Month", href: "/blog/security-toolkit-cybersecurity-awareness-month" }
    ];
    
    return (
        <article className="py-12 md:py-20">
            <div className="container max-w-4xl">
                <Breadcrumbs items={breadcrumbItems} />
                <header className="my-8">
                    <h1 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">
                        Security Toolkit: 18 Resources for Cybersecurity Awareness Month
                    </h1>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Last Updated: October 29, 2025
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
                    
                    <section id="what-is">
                        <h2 className="font-headline text-2xl font-bold">What Is Cybersecurity Awareness Month?</h2>
                        <p>{blogPostContent}</p>
                    </section>

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

                     <section id="why-it-matters" className="scroll-mt-20">
                        <h2 className="font-headline text-2xl font-bold">Why Cybersecurity Matters More Than Ever in 2025</h2>
                        <ul className="list-disc space-y-2 pl-6">
                            {stats.map(stat => <li key={stat}>{stat}</li>)}
                        </ul>
                        <p className="mt-4">The solution is to adopt a proactive and comprehensive approach to cybersecurity.</p>
                    </section>

                    {toolkitImage && (
                        <div className="relative my-8 h-64 w-full md:h-96">
                            <Image
                                src={toolkitImage.imageUrl}
                                alt={toolkitImage.description}
                                fill
                                className="rounded-lg object-contain"
                                data-ai-hint={toolkitImage.imageHint}
                            />
                        </div>
                    )}
                    
                    <section id="toolkit" className="scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold">Your Business Security Toolkit</h2>
                        
                        <div id="services-solutions" className="scroll-mt-20 mt-8">
                            <h3 className="font-headline text-2xl font-bold">Security Services & Solutions</h3>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                {toolkitResources["Security Services & Solutions"].map(item => (
                                    <Card key={item.title}>
                                        <CardHeader><CardTitle className="text-xl">{item.title}</CardTitle></CardHeader>
                                        <CardContent>
                                            <p className="text-base text-muted-foreground">{item.description}</p>
                                            <Button asChild variant="link" className="p-0 mt-2"><Link href={item.href}>Learn More</Link></Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div id="datasheets-case-studies" className="scroll-mt-20 mt-8">
                            <h3 className="font-headline text-2xl font-bold">Data Sheets & Case Studies</h3>
                             <div className="grid md:grid-cols-2 gap-4 mt-4">
                                {toolkitResources["Data Sheets & Case Studies"].map(item => (
                                    <Card key={item.title}>
                                        <CardHeader><CardTitle className="text-xl">{item.title}</CardTitle></CardHeader>
                                        <CardContent>
                                            <p className="text-base text-muted-foreground">{item.description}</p>
                                            <Button asChild variant="link" className="p-0 mt-2"><Link href={item.href}>Learn More</Link></Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                         <div id="videos-webinars" className="scroll-mt-20 mt-8">
                            <h3 className="font-headline text-2xl font-bold">Videos & Webinars</h3>
                             <div className="grid md:grid-cols-2 gap-4 mt-4">
                                {toolkitResources["Videos & Webinars"].map(item => (
                                    <Card key={item.title}>
                                        <CardHeader><CardTitle className="text-xl">{item.title}</CardTitle></CardHeader>
                                        <CardContent>
                                            <p className="text-base text-muted-foreground">{item.description}</p>
                                            <Button asChild variant="link" className="p-0 mt-2"><Link href={item.href}>Watch Now</Link></Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div id="blogs" className="scroll-mt-20 mt-8">
                            <h3 className="font-headline text-2xl font-bold">Security Blogs</h3>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                {toolkitResources["Security Blogs"].map(item => (
                                    <Card key={item.title}>
                                        <CardHeader><CardTitle className="text-xl">{item.title}</CardTitle></CardHeader>
                                        <CardContent>
                                            <p className="text-base text-muted-foreground">{item.description}</p>
                                            <Button asChild variant="link" className="p-0 mt-2"><Link href={item.href}>Read More</Link></Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                    </section>

                    <section id="worth-it" className="scroll-mt-20 mt-12">
                        <h2 className="font-headline text-2xl font-bold">Are Cybersecurity Vendors & Consulting Services Worth It?</h2>
                         <ul className="list-disc space-y-2 pl-6 mt-4">
                            {vendorBenefits.map(benefit => <li key={benefit}>{benefit}</li>)}
                        </ul>
                    </section>

                    <section id="conclusion" className="scroll-mt-20 mt-12 text-center bg-secondary p-8 rounded-lg">
                        <h2 className="font-headline text-2xl font-bold">Let's Secure Your Business, Together</h2>
                        <p className="mt-4">Chat with one of our security experts to learn how we can help.</p>
                         <p className="mt-4 text-sm text-muted-foreground">
                           Originally created: October 29, 2025
                        </p>
                        <Button asChild className="mt-6">
                            <Link href="/contact">Chat with an expert</Link>
                        </Button>
                    </section>

                </div>

                <SummaryClient content={blogPostContent} />
            </div>
        </article>
    );
};
