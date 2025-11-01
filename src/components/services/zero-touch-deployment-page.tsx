
import Image from "next/image";
import Link from "next/link";
import { awards } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export const ZeroTouchDeploymentPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/solutions" },
        { label: "Zero Touch Deployment Services", href: "/services/zero-touch-deployment" },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'ztd-hero');
    const datasheetImage = PlaceHolderImages.find(p => p.id === 'datasheet-cta');

    const features = [
        "Ready-To-Go Out of The Box Devices",
        "Hassle Free User Experience",
        "Automatic Enrollment for Security and Compliance",
        "Seamless Authentication and Cloud Service Access",
        "Customizable Deployment Profiles",
    ];

    const processSteps = [
        {
            step: 1,
            title: "Autopilot Workflow Configuration",
            description: "Our IT experts handle the configuration of Autopilot workflows and device registration in Intune, ensuring a seamless setup process."
        },
        {
            step: 2,
            title: "Device Identification",
            description: "IT retrieves the device ID from the hardware vendor, minimizing complexities."
        },
        {
            step: 3,
            title: "New Device Acquisition",
            description: "Your business acquires new devices, ready for deployment."
        },
        {
            step: 4,
            title: "User-Friendly Unboxing",
            description: "Users unbox the devices and sign in to their Microsoft account with an active network connection."
        },
        {
            step: 5,
            title: "Automated Sync and Configuration",
            description: "Intune efficiently synchronizes Autopilot with the devices, automatically pushing configurations and updates to ensure optimal performance."
        }
    ];

    return (
        <div>
            <section className="bg-secondary py-12">
                <div className="container">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Zero Touch Deployment</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Effortless, Secure, and Scalable IT Rollout</p>
                    <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                        <Link href="/contact">Get Started Today</Link>
                    </Button>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold">Zero Touch Deployment</h2>
                        {heroImage && (
                             <div className="relative h-64 w-full my-6">
                                <Image src={heroImage.imageUrl} alt={heroImage.description} fill className="object-cover rounded-lg" data-ai-hint={heroImage.imageHint} />
                            </div>
                        )}
                        <p className="mt-4 text-muted-foreground">
                            Experience streamlined IT operations and enhanced security with our zero touch deployment services, automating software setup and configurations to accelerate onboarding and eliminate manual errors.
                        </p>
                    </div>
                     <div>
                        <h3 className="font-headline text-2xl font-bold">Our Process</h3>
                        <p className="mt-4 text-muted-foreground">
                            Zero-touch deployment (ZTD), also known as zero-touch provisioning (ZTP), leverages cloud-based management, predefined policies, and secure authentication protocols to automate device setup.
                        </p>
                        <ul className="mt-6 space-y-4 list-disc list-inside">
                            {features.map(feature => <li key={feature}>{feature}</li>)}
                        </ul>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold">What We Mean By Specialized</h2>
                    <p className="mt-4 text-muted-foreground">As a Microsoft Solution Partner, we offer unparalleled expertise.</p>
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
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl font-bold">Our Proven Approach</h2>
                        <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">Leverage the Power of Windows Autopilot for Your Organization's Device Deployment</p>
                    </div>
                    <div className="grid md:grid-cols-5 gap-8">
                        {processSteps.map(step => (
                            <Card key={step.step}>
                                <CardHeader>
                                    <CardTitle>Step {step.step}: {step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                         <Button asChild>
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
    )
}
