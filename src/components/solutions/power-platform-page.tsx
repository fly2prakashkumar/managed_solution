import Image from "next/image";
import Link from "next/link";
import { awards } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export const PowerPlatformPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/solutions" },
        { label: "Business Process Automation", href: "/solutions/business-process-automation" },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'power-platform-asset');
    const datasheetImage = PlaceHolderImages.find(p => p.id === 'datasheet-cta');

    const functions = [
        { title: "Enhance Collaboration and Productivity", description: "Leverage Power Apps, Power Automate, Power BI, and Power Virtual Agents to improve teamwork." },
        { title: "Simplified App Development", description: "Utilize Power Apps for user-friendly, no-code/low-code application building." },
        { title: "Business Process Automation and Data Visualization", description: "Employ Power Automate and Power BI to streamline workflows and gain insights." }
    ];

    const components = ["Power Apps", "Power Automate", "Power BI", "Power Virtual Agents"];

    return (
        <div>
            <section className="bg-secondary py-12">
                <div className="container">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
            </section>

            <section className="py-16 md:py-24 text-center">
                <div className="container">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Streamline Business Processes with Microsoft Power Platform</h1>
                    <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                        <Link href="/contact">Get Started Today</Link>
                    </Button>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold">Power Platform</h2>
                        <p className="mt-4 text-muted-foreground">
                            Managed Solution helps organizations with app development, process automation, and data visualization through Microsoft Power Platform.
                        </p>
                        <div className="mt-8 space-y-6">
                            {functions.map(func => (
                                <div key={func.title}>
                                    <h4 className="font-semibold text-lg">{func.title}</h4>
                                    <p className="text-muted-foreground text-sm">{func.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                     {heroImage && (
                        <div className="relative h-80 w-full">
                            <Image src={heroImage.imageUrl} alt={heroImage.description} fill className="object-contain" data-ai-hint={heroImage.imageHint} />
                        </div>
                    )}
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid md:grid-cols-4 gap-8">
                        {components.map(comp => (
                            <div key={comp} className="text-center">
                                <h3 className="font-headline text-2xl font-bold">{comp}</h3>
                            </div>
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
                        <h3 className="font-headline text-2xl font-bold">Unlock the full potential of your business with Microsoft Power Platform</h3>
                        <Button asChild variant="link" className="mt-4 text-lg">
                            <Link href="/contact">Contact Us Today</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container text-center">
                     {datasheetImage && (
                        <div className="relative h-96 w-full max-w-2xl mx-auto">
                            <Image src={datasheetImage.imageUrl} alt={datasheetImage.description} fill className="object-contain" data-ai-hint={datasheetImage.imageHint} />
                        </div>
                    )}
                </div>
            </section>

            <ContactSection />
        </div>
    );
};
