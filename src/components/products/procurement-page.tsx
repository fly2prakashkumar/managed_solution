
import Image from "next/image";
import Link from "next/link";
import { awards } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export const ProcurementPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Procurement", href: "/products/procurement-services" },
    ];
    
    const heroImage = PlaceHolderImages.find(p => p.id === 'procurement-hero');
    const meetingImage = PlaceHolderImages.find(p => p.id === 'procurement-meeting');
    const licensingLogos = PlaceHolderImages.find(p => p.id === 'licensing-logos');
    const networkLogos = PlaceHolderImages.find(p => p.id === 'network-logos');
    const hardwareLogos = PlaceHolderImages.find(p => p.id === 'hardware-logos');
    const firewallLogos = PlaceHolderImages.find(p => p.id === 'firewall-logos');
    const docGraphic = PlaceHolderImages.find(p => p.id === 'doc-graphic');
    const blog1Image = PlaceHolderImages.find(p => p.id === 'procurement-blog-1');
    const blog2Image = PlaceHolderImages.find(p => p.id === 'procurement-blog-2');

    const categories = [
        "Microsoft Licensing & Software Solutions",
        "Networking & Servers",
        "Firewalls & Switches",
        "Workstations"
    ];

    return (
        <div>
            <section className="bg-secondary py-12">
                <div className="container">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                             <h1 className="font-headline text-4xl md:text-5xl font-bold">Managed IT Procurement Services for Businesses</h1>
                            <p className="mt-4 text-lg text-muted-foreground">Buy, Deploy, and Scale Smarter.</p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">Get Started Today</Link>
                            </Button>
                        </div>
                         {heroImage && (
                            <div className="relative h-80 w-full">
                                <Image src={heroImage.imageUrl} alt={heroImage.description} fill className="object-cover rounded-lg" data-ai-hint={heroImage.imageHint} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold">Our Process</h2>
                        <p className="mt-4 text-muted-foreground">
                            Managed IT procurement services are essential for building a cost-effective and scalable technology environment. We provide expertise in Microsoft licensing, network hardware, servers, firewalls, and workstations.
                        </p>
                        <p className="mt-6 font-semibold text-primary">Discover unparalleled technology procurement solutions that go above and beyond.</p>
                    </div>
                    {meetingImage && (
                        <div className="relative h-80 w-full">
                            <Image src={meetingImage.imageUrl} alt={meetingImage.description} fill className="object-cover rounded-lg" data-ai-hint={meetingImage.imageHint} />
                        </div>
                    )}
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{cat}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {index === 0 && <p className="text-sm text-muted-foreground">As a top ranked Solutions Partner of Microsoft.</p>}
                                {index === 3 && <p className="text-sm text-muted-foreground">Benefit from discounted rates through our partnerships.</p>}
                            </CardContent>
                        </Card>
                    ))}
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
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="font-headline text-3xl font-bold text-center mb-12">Our World-Class Partners</h2>
                    <div className="space-y-12">
                        <div>
                            <h3 className="font-semibold text-lg mb-4 text-center">Licensing</h3>
                            {licensingLogos && <Image src={licensingLogos.imageUrl} alt={licensingLogos.description} width={800} height={100} className="mx-auto object-contain" data-ai-hint={licensingLogos.imageHint}/>}
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4 text-center">Networking and Servers</h3>
                             {networkLogos && <Image src={networkLogos.imageUrl} alt={networkLogos.description} width={800} height={100} className="mx-auto object-contain" data-ai-hint={networkLogos.imageHint}/>}
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4 text-center">Firewalls and Switches</h3>
                             {firewallLogos && <Image src={firewallLogos.imageUrl} alt={firewallLogos.description} width={800} height={100} className="mx-auto object-contain" data-ai-hint={firewallLogos.imageHint}/>}
                        </div>
                         <div>
                            <h3 className="font-semibold text-lg mb-4 text-center">Workstations</h3>
                             {hardwareLogos && <Image src={hardwareLogos.imageUrl} alt={hardwareLogos.description} width={800} height={100} className="mx-auto object-contain" data-ai-hint={hardwareLogos.imageHint}/>}
                        </div>
                    </div>
                     <div className="text-center mt-16">
                        <h3 className="font-headline text-2xl font-bold">Streamline Your Technology Procurement Experience</h3>
                        <Button asChild variant="link" size="lg" className="mt-2 text-lg">
                            <Link href="/contact">contact us today</Link>
                        </Button>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        {docGraphic && (
                            <div className="relative h-96 w-full">
                                <Image src={docGraphic.imageUrl} alt={docGraphic.description} fill className="object-contain" data-ai-hint={docGraphic.imageHint} />
                            </div>
                        )}
                    </div>
                     <div>
                        <h2 className="font-headline text-3xl font-bold mb-8">Additional Resources</h2>
                        <div className="space-y-8">
                            <Card>
                                 {blog1Image && <div className="relative h-48 w-full"><Image src={blog1Image.imageUrl} alt="Benefits of working with an MSP" fill className="object-cover rounded-t-lg" data-ai-hint={blog1Image.imageHint} /></div>}
                                <CardHeader>
                                    <CardTitle>6 Benefits of Working with a Managed Service Provider</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Button asChild variant="link" className="p-0"><Link href="#">Read More</Link></Button>
                                </CardContent>
                            </Card>
                             <Card>
                                 {blog2Image && <div className="relative h-48 w-full"><Image src={blog2Image.imageUrl} alt="How MSPs benefit businesses" fill className="object-cover rounded-t-lg" data-ai-hint={blog2Image.imageHint} /></div>}
                                <CardHeader>
                                    <CardTitle>Managed Service Providers: How Do They Benefit Businesses?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Button asChild variant="link" className="p-0"><Link href="#">Read More</Link></Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    )
}
