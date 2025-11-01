
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import SummaryClient from "@/app/blog/[slug]/summary-client";
import Breadcrumbs from "../shared/breadcrumbs";

export const Inc5000Post = () => {
    const heroImage = PlaceHolderImages.find(p => p.id === 'blog-11');
    const blogPostContent = "We are incredibly proud to announce that Managed Solution has been named to the Inc. 5000 list of America's fastest-growing private companies for the 10th time. This achievement places us in a rare group of companies to have made the list for a decade, highlighting our sustained growth and commitment to excellence.";

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Blog", href: "/blog" },
        { label: "Managed Solution Named to 2025 Inc. 5000 List", href: "/blog/managed-solution-inc-5000-list-2025" }
    ];

    return (
        <article className="py-12 md:py-20">
            <div className="container max-w-4xl">
                 <Breadcrumbs items={breadcrumbItems} />
                <header className="my-8">
                    <h1 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">
                        Managed Solution Named to the 2025 Inc. 5000 List of America's Fastest-Growing Private Companies
                    </h1>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Published on August 15, 2024
                    </p>
                </header>

                {heroImage && (
                    <div className="relative mb-8 h-64 w-full md:h-96">
                        <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="rounded-lg object-contain"
                        priority
                        data-ai-hint={heroImage.imageHint}
                        />
                    </div>
                )}
                
                <div className="prose prose-lg dark:prose-invert mx-auto max-w-none prose-p:text-foreground/80 prose-headings:font-headline prose-headings:text-foreground">
                    <p className="lead">{blogPostContent}</p>
                    
                    <h2 className="font-headline text-2xl font-bold">A Decade of Growth and Innovation</h2>
                    <p>Making the Inc. 5000 list once is a significant achievement. Making it ten times is a testament to the consistent dedication of our team and the enduring trust of our clients. This recognition reflects our passion for helping businesses leverage technology to solve challenges and drive success. Our growth is a direct result of our clients' growth, and we are grateful for the partnerships we have built.</p>

                    <blockquote className="border-l-4 border-primary pl-6 italic">
                        <p>"Being on the Inc. 5000 list for the 10th time is a remarkable milestone. It speaks to our team's resilience, our culture of innovation, and our unwavering focus on delivering value to our clients year after year."</p>
                        <footer>- Dr. Evelyn Reed, CEO</footer>
                    </blockquote>

                    <h2 className="font-headline text-2xl font-bold">Our Commitment to the Future</h2>
                    <p>As we celebrate this achievement, we are more focused than ever on the future. We will continue to invest in cutting-edge technologies like AI and automation, deepen our expertise in cybersecurity, and expand our cloud service offerings to ensure our clients stay ahead of the curve.</p>
                    
                    <div className="mt-12 text-center bg-secondary p-8 rounded-lg">
                        <h3 className="font-headline text-2xl font-bold">Join Us on Our Journey</h3>
                        <p className="mt-4">We thank our incredible team and loyal clients for making this achievement possible. If you're looking for a technology partner committed to long-term growth and success, we invite you to connect with us.</p>
                        <Button asChild className="mt-6">
                            <Link href="/contact">Partner with Us</Link>
                        </Button>
                    </div>
                </div>

                <SummaryClient content={blogPostContent} />
            </div>
        </article>
    );
};
