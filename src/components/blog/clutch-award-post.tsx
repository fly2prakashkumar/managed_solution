
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "../shared/breadcrumbs";
import { Star } from "lucide-react";

export const ClutchAwardPost = () => {
    const heroImage = PlaceHolderImages.find(p => p.id === 'clutch-award-hero');
    const blogPostContent = "We are thrilled to announce that Clutch, the leading global marketplace of B2B service providers, has named Managed Solution a Market Leader in Managed IT Services for 2025. This prestigious recognition is a testament to our unwavering commitment to client success and technical excellence.";

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Blog", href: "/blog" },
        { label: "Clutch Names Managed Solution Market Leader", href: "/blog/clutch-names-managed-solution-market-leader-2025" }
    ];

    return (
        <article className="py-12 md:py-20">
            <div className="container max-w-4xl">
                 <Breadcrumbs items={breadcrumbItems} />
                <header className="my-8">
                    <h1 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">
                        Clutch Names Managed Solution Market Leader in Managed IT for 2025
                    </h1>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Published on August 28, 2024
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
                    <p className="lead">{blogPostContent}</p>
                    
                    <h2 className="font-headline text-2xl font-bold">A Recognition Built on Client Trust</h2>
                    <p>Clutch's rankings are based on in-depth client reviews, market presence, and the quality of work delivered. This award is particularly meaningful because it directly reflects the positive feedback and success stories of our clients. We are honored to be recognized for our ability to deliver reliable, innovative, and results-driven IT solutions.</p>

                    <blockquote className="border-l-4 border-primary pl-6 italic">
                        <p>"This recognition from Clutch validates our team's hard work and dedication. We're not just an IT provider; we're a strategic partner invested in our clients' growth and security."</p>
                        <footer>- Dr. Evelyn Reed, CEO</footer>
                    </blockquote>

                    <h2 className="font-headline text-2xl font-bold">What This Means for Our Clients</h2>
                    <p>As a Clutch Market Leader, our clients can be even more confident in our ability to provide:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Proven Expertise:</strong> Verified experience in delivering high-quality managed IT, cybersecurity, and cloud services.</li>
                        <li><strong>Exceptional Service:</strong> A consistent track record of positive client reviews and high satisfaction ratings.</li>
                        <li><strong>Strategic Partnership:</strong> A commitment to understanding your business and aligning technology with your strategic goals.</li>
                    </ul>
                    
                    <div className="mt-12 text-center bg-secondary p-8 rounded-lg">
                        <h3 className="font-headline text-2xl font-bold">Experience the Difference of a Market Leader</h3>
                        <p className="mt-4">Ready to partner with an award-winning managed IT service provider? Contact us today to learn how we can help your business thrive.</p>
                        <Button asChild className="mt-6">
                            <Link href="/contact">Book a Consultation</Link>
                        </Button>
                    </div>
                </div>

            </div>
        </article>
    );
};
