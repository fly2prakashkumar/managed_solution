
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "../shared/breadcrumbs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShieldCheck, Lock } from "lucide-react";

export const CopilotVsChatGptPost = () => {
    const heroImage = PlaceHolderImages.find(p => p.id === 'blog-8');
    const blogPostContent = "In the rapidly evolving landscape of generative AI, Microsoft Copilot and OpenAI's ChatGPT have emerged as two of the most powerful tools for business productivity. But when it comes to enterprise use, a critical question arises: which platform is safer and better equipped to handle sensitive company data?";

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Blog", href: "/blog" },
        { label: "Copilot vs ChatGPT: Which Is Safer for Work?", href: "/blog/copilot-vs-chatgpt-which-is-safer-for-work" }
    ];

    return (
        <article className="py-12 md:py-20">
            <div className="container max-w-4xl">
                 <Breadcrumbs items={breadcrumbItems} />
                <header className="my-8">
                    <h1 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">
                        Copilot vs ChatGPT: Which Is Safer for Work?
                    </h1>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Published on September 5, 2024
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
                    
                    <h2 className="font-headline text-2xl font-bold">The Core Difference: Data Handling and Privacy</h2>
                    <p>While both tools are built on OpenAI's powerful language models, their fundamental approach to data privacy and security sets them apart. ChatGPT, in its standard versions, may use your conversations to train its models. In contrast, Microsoft Copilot for Business is designed with enterprise-grade security from the ground up.</p>

                    <Table className="my-8">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Feature</TableHead>
                                <TableHead>Microsoft Copilot</TableHead>
                                <TableHead>ChatGPT (Standard/Plus)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Data Training</TableCell>
                                <TableCell>Your data is NOT used for training.</TableCell>
                                <TableCell>Your data MAY be used for training.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Authentication</TableCell>
                                <TableCell>Integrates with Microsoft Entra ID.</TableCell>
                                <TableCell>Standalone user accounts.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Data Residency</TableCell>
                                <TableCell>Data is processed within your Microsoft 365 tenant boundary.</TableCell>
                                <TableCell>Data is processed on OpenAI's servers.</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-medium">Compliance</TableCell>
                                <TableCell>Inherits your organization's M365 compliance policies.</TableCell>
                                <TableCell>Separate compliance considerations.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0">
                            <ShieldCheck className="w-16 h-16 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-headline text-xl font-bold mt-0">Why Copilot is the Safer Bet for Business</h3>
                            <p>For organizations handling proprietary information, customer data, or any sensitive content, Copilot's architecture provides a crucial layer of protection. By integrating with your existing Microsoft 365 security and compliance framework, it ensures that your data never leaves your control. Your prompts and the generated responses are not saved and are not used to train the public model.</p>
                        </div>
                    </div>
                    
                    <div className="mt-12 text-center bg-secondary p-8 rounded-lg">
                        <h3 className="font-headline text-2xl font-bold">Secure Your AI Implementation</h3>
                        <p className="mt-4">Choosing the right AI tool is a critical security decision. Our experts can help you assess your needs and implement Microsoft Copilot securely, ensuring your organization can innovate without compromising on data protection.</p>
                        <Button asChild className="mt-6">
                            <Link href="/contact">Get an AI Security Consultation</Link>
                        </Button>
                    </div>
                </div>

            </div>
        </article>
    );
};
