
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import { team } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export default function LeadershipPage() {
    const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Leadership Team", href: "/leadership" }];

    return (
        <>
            <PageHeader
                title="Managed Solution Leadership Team"
                description="Visionary leaders and San Diego's premier provider of managed IT services, blending deep technical expertise with a passion for empowering businesses across California and nationwide across the U.S."
            />
            <section className="py-12 bg-secondary">
                <div className="container">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl font-bold">Meet the Managed Solution Leaders</h2>
                    </div>

                    <div className="mb-12">
                        <div className="aspect-video max-w-4xl mx-auto bg-muted flex items-center justify-center rounded-lg">
                           <div className="text-center text-muted-foreground p-4">
                                <p>Your browser can't play this video. <Link href="https://www.youtube.com" className="text-primary hover:underline">Learn more</Link></p>
                                <p className="mt-2">An error occurred. Try watching this video on <Link href="https://www.youtube.com" className="text-primary hover:underline">www.youtube.com</Link>, or enable JavaScript if it is disabled in your browser.</p>
                           </div>
                        </div>
                         <p className="text-center text-sm mt-2 text-muted-foreground">Tap to unmute</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member) => {
                            const memberImage = PlaceHolderImages.find(p => p.id === member.imageUrl);
                            return (
                                <Card key={member.name}>
                                    {memberImage && (
                                        <div className="relative h-64 w-full">
                                            <Image 
                                                src={memberImage.imageUrl} 
                                                alt={memberImage.description}
                                                fill
                                                className="object-cover rounded-t-lg"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                data-ai-hint={memberImage.imageHint}
                                            />
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle>{member.name}</CardTitle>
                                        <p className="text-sm font-semibold text-primary">{member.role}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm">{member.bio}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
