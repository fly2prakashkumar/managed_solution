
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, LandPlot } from "lucide-react";
import ContactSection from "@/components/shared/contact-section";

export const MicrosoftSecurityPage = () => {
    const msSecurityPartner = PlaceHolderImages.find(p => p.id === 'award-1');
    const msModernWorkPartner = PlaceHolderImages.find(p => p.id === 'award-2');
    const msAzurePartner = PlaceHolderImages.find(p => p.id === 'award-3');

    const whyChooseUs = [
        {
            title: "Unparalleled Expertise",
            description: "As a specialized Microsoft partner, our team offers extensive experience and in-depth knowledge of Microsoft's security ecosystem."
        },
        {
            title: "Comprehensive Platform",
            description: "We offer a suite of advanced Microsoft security tools and technologies to deliver a holistic approach to protecting your organization."
        },
        {
            title: "Customized Solutions",
            description: "Your business has unique security requirements. That's why our experts work closely with you to tailor solutions that align with your specific needs and goals."
        },
        {
            title: "Proactive Threat Detection",
            description: "With intelligent monitoring and threat detection capabilities, we identify and neutralize potential security breaches before they escalate."
        },
        {
            title: "24/7 Support",
            description: "Our dedicated support team is available round-the-clock to address any security concerns and keep your business operations running smoothly."
        },
    ];

    const securityOfferings = [
        { title: "Microsoft Defender", description: "Enhance device security and facilitate seamless hybrid work experiences.", href:"#" },
        { title: "Microsoft Intune", description: "Enhance device security and facilitate seamless hybrid work experiences." , href:"#"},
        { title: "Identity Management - Microsoft Entra", description: "Manage user accounts, access control, and security policies for all computers efficiently." , href:"#"},
        { title: "Microsoft Priva", description: "Gain control and visibility over cloud-based applications while ensuring compliance and protecting against cloud-native attacks." , href:"#"},
    ];

    return (
        <div>
            <section className="bg-secondary py-16 md:py-24">
                <div className="container">
                    <div className="text-sm text-muted-foreground mb-4">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <span className="mx-2">&raquo;</span>
                        <Link href="/services" className="hover:text-primary">Services</Link>
                        <span className="mx-2">&raquo;</span>
                        <span className="text-foreground">Microsoft Security Services</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge variant="default">Managed Secure</Badge>
                            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">Microsoft Security Services</h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Advanced security made easy with industry-leading tools and Microsoft expertise.
                            </p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">Secure Your Business Now</Link>
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <Search className="w-8 h-8 text-orange-500" />
                                        <CardTitle className="font-headline text-2xl">Assessment</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                        <li>Identify challenges</li>
                                        <li>Review security posture</li>
                                        <li>Get in-depth understanding of current stance</li>
                                    </ul>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <LandPlot className="w-8 h-8 text-orange-500" />
                                        <CardTitle className="font-headline text-2xl">Roadmap</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                     <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                        <li>Custom security roadmap</li>
                                        <li>Review detailed exposures & risks</li>
                                        <li>Educate team on recommended security options</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Managed Solution for your Security Needs</h2>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((item) => (
                            <Card key={item.title}>
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Security Offerings</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Explore the tools that will transform your security structure and keep your environment protected.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {securityOfferings.map((offering) => (
                            <Card key={offering.title}>
                                <CardHeader>
                                    <CardTitle>{offering.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{offering.description}</p>
                                    <Button asChild variant="link" className="p-0">
                                        <Link href={offering.href}>Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-background relative">
                <div className="container text-center max-w-4xl mx-auto z-10 relative">
                     <h2 className="font-headline text-4xl font-bold">What We Mean by Specialized</h2>
                     <p className="mt-4 text-muted-foreground text-lg">
                        Partner with a Premier Microsoft Service Provider. Maintain control and confidence over your IT operations by working with a Top 150 Microsoft Service Provider. Get Managed IT Services that are powered by experts on the market's leading technology.
                     </p>
                </div>
                <Card className="container mt-12">
                    <div className="flex justify-around items-center p-8 flex-wrap gap-8">
                         {msSecurityPartner && <Image src={msSecurityPartner.imageUrl} alt="Microsoft Security Partner" width={140} height={70} className="object-contain" data-ai-hint={msSecurityPartner.imageHint} />}
                        {msModernWorkPartner && <Image src={msModernWorkPartner.imageUrl} alt="Microsoft Modern Work Partner" width={140} height={70} className="object-contain" data-ai-hint={msModernWorkPartner.imageHint} />}
                        {msAzurePartner && <Image src={msAzurePartner.imageUrl} alt="Microsoft Azure Partner" width={140} height={70} className="object-contain" data-ai-hint={msAzurePartner.imageHint} />}
                    </div>
                </Card>
            </section>
            
            <ContactSection />
        </div>
    )
}
