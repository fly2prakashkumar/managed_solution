
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import SummaryClient from "@/app/blog/[slug]/summary-client";
import Breadcrumbs from "../shared/breadcrumbs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export const SharePointZeroDayPost = () => {
    const heroImage = PlaceHolderImages.find(p => p.id === 'blog-12');
    const blogPostContent = "Microsoft has released an urgent security update to address two critical zero-day vulnerabilities in SharePoint Server, identified as CVE-2025-53770 and CVE-2025-53771. These vulnerabilities could allow for remote code execution (RCE) and privilege escalation. Immediate patching is strongly recommended.";

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Blog", href: "/blog" },
        { label: "SharePoint Zero-Day Fix", href: "/blog/sharepoint-zero-day-fix-cve-2025-53770" }
    ];

    return (
        <article className="py-12 md:py-20">
            <div className="container max-w-4xl">
                 <Breadcrumbs items={breadcrumbItems} />
                <header className="my-8">
                    <h1 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">
                        SharePoint Zero-Day Fix for CVE-2025-53770 & 53771
                    </h1>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Published on August 8, 2024
                    </p>
                </header>

                <Alert variant="destructive" className="mb-8">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Critical Security Alert</AlertTitle>
                    <AlertDescription>
                        Immediate action is required to patch these vulnerabilities and protect your SharePoint environment.
                    </AlertDescription>
                </Alert>

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
                    
                    <h2 className="font-headline text-2xl font-bold">What You Need to Know</h2>
                    <ul>
                        <li><strong>CVE-2025-53770:</strong> A remote code execution vulnerability that can be exploited by an authenticated user with page creation permissions.</li>
                        <li><strong>CVE-2025-53771:</strong> A privilege escalation vulnerability that could allow an attacker to gain higher-level permissions on the server.</li>
                    </ul>
                    <p>These vulnerabilities affect SharePoint Server 2016, 2019, and Subscription Edition. SharePoint Online is not affected.</p>
                    
                    <h2 className="font-headline text-2xl font-bold">Recommended Actions</h2>
                     <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>Apply Security Updates Immediately:</strong> Microsoft has released patches for all affected SharePoint versions. These should be deployed as soon as possible.</li>
                        <li><strong>Review User Permissions:</strong> As a precaution, review who has permissions to create new pages or sites within your SharePoint environment. Limit these permissions to trusted users only.</li>
                        <li><strong>Monitor for Suspicious Activity:</strong> Check server logs for any unusual activity, such as unexpected file uploads or changes in user privileges.</li>
                    </ol>
                    
                    <div className="mt-12 text-center bg-secondary p-8 rounded-lg">
                        <h3 className="font-headline text-2xl font-bold">Need Help Securing Your SharePoint Environment?</h3>
                        <p className="mt-4">Our security experts are on standby to assist with patch management, vulnerability assessment, and incident response. If you are concerned about these vulnerabilities, contact us immediately for support.</p>
                        <Button asChild className="mt-6" variant="destructive">
                            <Link href="/contact">Get Emergency Security Support</Link>
                        </Button>
                    </div>
                </div>

                <SummaryClient content={blogPostContent} />
            </div>
        </article>
    );
};
