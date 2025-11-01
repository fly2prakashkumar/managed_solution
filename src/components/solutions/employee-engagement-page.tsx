import Image from "next/image";
import Link from "next/link";
import { awards, employeeEngagementFaqs } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export const EmployeeEngagementPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/solutions" },
        { label: "Employee Engagement", href: "/solutions/employee-engagement" },
    ];
    
    const vivaEngageImage = PlaceHolderImages.find(p => p.id === 'viva-employee-engagement');
    const vivaLogosImage = PlaceHolderImages.find(p => p.id === 'viva-suite-logos');
    const office365Image = PlaceHolderImages.find(p => p.id === 'g-suite-vs-office-365');
    const datasheetImage = PlaceHolderImages.find(p => p.id === 'datasheet-cta');

    const vivaSolves = [
        { title: "Improved Efficiency", description: "Viva centralizes tools and information, reducing time spent searching and increasing focus on impactful work." },
        { title: "Faster Onboarding", description: "New hires can quickly access training materials, company resources, and connect with colleagues, accelerating their time to productivity." },
        { title: "Reduced Attrition", description: "By fostering a supportive and connected culture, Viva helps improve job satisfaction. Microsoft's data shows a 20% lower attrition rate for engaged employees." },
        { title: "Increased Agility", description: "An engaged workforce is more adaptable and resilient, enabling your organization to respond more effectively to market changes." },
    ];

    return (
        <div>
            <section className="bg-secondary py-12">
                <div className="container">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
            </section>

            <section className="py-16 md:py-24 text-center">
                <div className="container">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold max-w-3xl mx-auto">Cultivating Efficiency with Viva—Microsoft's Ultimate Employee Engagement Tool</h1>
                    <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                        <Link href="/contact">Get Started Today</Link>
                    </Button>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <h2 className="font-headline text-3xl font-bold text-center">A Holistic Approach to Employee Engagement</h2>
                    <div className="mt-8 grid md:grid-cols-3 gap-8 items-center">
                         {vivaEngageImage && (
                            <div className="relative h-64 w-full">
                                <Image src={vivaEngageImage.imageUrl} alt={vivaEngageImage.description} fill className="object-cover rounded-lg" data-ai-hint={vivaEngageImage.imageHint} />
                            </div>
                        )}
                        {vivaLogosImage && (
                            <div className="relative h-64 w-full">
                                <Image src={vivaLogosImage.imageUrl} alt={vivaLogosImage.description} fill className="object-contain" data-ai-hint={vivaLogosImage.imageHint} />
                            </div>
                        )}
                        {office365Image && (
                            <div className="relative h-64 w-full">
                                <Image src={office365Image.imageUrl} alt={office365Image.description} fill className="object-contain" data-ai-hint={office365Image.imageHint} />
                            </div>
                        )}
                    </div>
                    <p className="mt-8 text-lg text-muted-foreground text-center max-w-4xl mx-auto">
                        Microsoft Viva is an employee experience platform that integrates communications, knowledge, learning, resources, and insights into a single, integrated experience right inside Microsoft Teams.
                    </p>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="font-headline text-3xl font-bold text-center mb-12">What Viva Solves For</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {vivaSolves.map(item => (
                            <Card key={item.title}>
                                <CardHeader><CardTitle>{item.title}</CardTitle></CardHeader>
                                <CardContent><p className="text-muted-foreground">{item.description}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary text-center">
                <div className="container">
                    <h2 className="font-headline text-3xl font-bold">What We Mean By Specialized</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        As a Microsoft Solution Partner, we have demonstrated expertise and access to advanced tools, training, and support.
                    </p>
                    <div className="mt-8 flex justify-center items-center flex-wrap gap-8">
                        {awards.map((award) => {
                            const awardImage = PlaceHolderImages.find(p => p.id === award.imageId);
                            return awardImage ? (
                                <Image
                                    key={award.title}
                                    src={awardImage.imageUrl}
                                    alt={award.title}
                                    width={140}
                                    height={70}
                                    className="object-contain"
                                    data-ai-hint={awardImage.imageHint}
                                />
                            ) : null;
                        })}
                    </div>
                    <div className="mt-12">
                        <h3 className="font-headline text-2xl font-bold">Maximize The Benefits of Microsoft Viva with Specialized Experts</h3>
                        <Button asChild variant="link" className="mt-4 text-lg">
                            <Link href="/contact">Contact Us Today</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                     {datasheetImage && (
                        <div className="relative h-96 w-full">
                            <Image src={datasheetImage.imageUrl} alt={datasheetImage.description} fill className="object-contain" data-ai-hint={datasheetImage.imageHint} />
                        </div>
                    )}
                    <div>
                        <h2 className="font-headline text-3xl font-bold">Additional Resources</h2>
                        <Card className="mt-8">
                            <CardHeader><CardTitle>Viva Connections: Building a More Engaged Work Environment</CardTitle></CardHeader>
                            <CardContent>
                                <Button asChild variant="link" className="p-0">
                                    <Link href="#">Read More</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
};
