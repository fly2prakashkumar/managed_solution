
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { careersData } from "@/lib/data";
import { CareersForm } from "@/components/forms/careers-form";
import Breadcrumbs from "@/components/shared/breadcrumbs";


export default function CareersPage() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Careers", href: "/careers" },
    ];
    const teamCultureImage = PlaceHolderImages.find(p => p.id === 'careers-team-culture');
    const workLifeBalanceImage = PlaceHolderImages.find(p => p.id === 'careers-work-life-balance');
    const bbbTorchAwardImage = PlaceHolderImages.find(p => p.id === 'careers-bbb-award');

    return (
        <>
            <section className="bg-secondary py-12">
                <div className="container">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
            </section>
            <PageHeader 
                title="Careers"
                description="Integrity, Innovation, Teamwork and Heart."
            />

            <section className="py-16 md:py-24">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold">Join Our Team</h2>
                        <p className="mt-4 text-muted-foreground">The care and dedication we show our team is the foundation of our success. At Managed Solution, we've cultivated an all-star team with a cutting-edge company culture.</p>
                    </div>
                     {teamCultureImage && (
                        <div className="relative h-80 w-full">
                            <Image src={teamCultureImage.imageUrl} alt={teamCultureImage.description} fill className="object-cover rounded-lg" data-ai-hint={teamCultureImage.imageHint} />
                        </div>
                    )}
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <h2 className="font-headline text-3xl font-bold text-center mb-12">What you'll get at Managed Solution</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {careersData.employeePerks.map(perk => (
                            <Card key={perk.title}>
                                <CardHeader>
                                    <CardTitle>{perk.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{perk.description}</p>
                                    {perk.link && (
                                        <Button asChild variant="link" className="p-0 mt-2">
                                            <Link href={perk.link}>Read our Code of Conduct</Link>
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    {workLifeBalanceImage && (
                        <div className="relative h-80 w-full">
                            <Image src={workLifeBalanceImage.imageUrl} alt={workLifeBalanceImage.description} fill className="object-cover rounded-lg" data-ai-hint={workLifeBalanceImage.imageHint} />
                        </div>
                    )}
                    <div>
                        <h2 className="font-headline text-3xl font-bold">Benefits For Your Best Life</h2>
                         <ul className="mt-6 space-y-4">
                            {careersData.benefits.map(benefit => (
                                <li key={benefit} className="flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <h2 className="font-headline text-3xl font-bold text-center mb-12">Currently Accepting Applications for:</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {careersData.openPositions.map(position => (
                            <Card key={position} className="p-4">
                                <p className="font-semibold">{position}</p>
                            </Card>
                        ))}
                    </div>

                    <Card className="max-w-2xl mx-auto mt-16 p-8">
                        <CardHeader>
                            <CardTitle className="text-center font-headline text-2xl">Ready for your next position?</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <CareersForm />
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold">Here's What Our Team Has to Say</h2>
                        <div className="mt-8 space-y-6">
                            {careersData.testimonials.map((testimonial, index) => (
                                <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                                    “{testimonial}”
                                </blockquote>
                            ))}
                        </div>
                    </div>
                     {bbbTorchAwardImage && (
                        <div className="relative h-80 w-full">
                            <Image src={bbbTorchAwardImage.imageUrl} alt={bbbTorchAwardImage.description} fill className="object-contain rounded-lg" data-ai-hint={bbbTorchAwardImage.imageHint} />
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
