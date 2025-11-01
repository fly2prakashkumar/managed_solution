
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import SummaryClient from "@/app/blog/[slug]/summary-client";
import Breadcrumbs from "../shared/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, BrainCircuit, Eye } from "lucide-react";

export const CopilotGpt5Post = () => {
    const heroImage = PlaceHolderImages.find(p => p.id === 'blog-7');
    const blogPostContent = "The next generation of AI assistance has arrived. Microsoft has officially announced the integration of GPT-5 into its Copilot ecosystem, promising unprecedented levels of intelligence, speed, and capability for businesses and users worldwide.";

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Blog", href: "/blog" },
        { label: "Microsoft Copilot GPT-5 Available NOW", href: "/blog/microsoft-copilot-gpt-5-available-now" }
    ];

    const gpt5Features = [
        {
            title: "Advanced Reasoning",
            description: "GPT-5 demonstrates a significantly improved ability to understand complex queries, handle multi-step instructions, and solve problems that require deep contextual understanding.",
            icon: BrainCircuit,
        },
        {
            title: "Enhanced Speed and Efficiency",
            description: "Experience faster response times and more efficient processing, allowing for a smoother and more interactive user experience, even with complex tasks.",
            icon: Zap,
        },
        {
            title: "Superior Multimodal Capabilities",
            description: "Copilot can now seamlessly interpret and process a mix of text, images, and data inputs to generate more comprehensive and relevant outputs.",
            icon: Eye,
        }
    ];

    return (
        <article className="py-12 md:py-20">
            <div className="container max-w-4xl">
                 <Breadcrumbs items={breadcrumbItems} />
                <header className="my-8">
                    <h1 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">
                        Microsoft Copilot GPT-5 Available NOW
                    </h1>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Published on September 12, 2024
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
                    
                    <h2 className="font-headline text-2xl font-bold">What's New with GPT-5 in Copilot?</h2>
                    <p>This landmark update integrates the power of GPT-5 directly into the Microsoft 365 applications you use every day, including Word, Excel, PowerPoint, and Teams. This isn't just an incremental update; it's a leap forward in AI-powered productivity.</p>
                    
                    <div className="my-8 grid md:grid-cols-3 gap-6">
                        {gpt5Features.map(feature => (
                            <Card key={feature.title}>
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <h2 className="font-headline text-2xl font-bold">The Impact on Your Business</h2>
                    <p>The integration of GPT-5 will transform workflows across departments. Marketing teams can generate more sophisticated campaign ideas, finance departments can perform deeper data analysis in Excel, and developers can write and debug code with greater accuracy. The potential to boost creativity and efficiency is immense.</p>
                    
                    <div className="mt-12 text-center bg-secondary p-8 rounded-lg">
                        <h3 className="font-headline text-2xl font-bold">Ready to Harness the Power of GPT-5?</h3>
                        <p className="mt-4">Our experts are ready to help you explore the new capabilities of Microsoft Copilot with GPT-5. Contact us for a personalized demo and discover how this technology can revolutionize your business operations.</p>
                        <Button asChild className="mt-6">
                            <Link href="/solutions/ai-and-automation">Explore Our AI Solutions</Link>
                        </Button>
                    </div>
                </div>

                <SummaryClient content={blogPostContent} />
            </div>
        </article>
    );
};
