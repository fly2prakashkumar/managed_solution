
import Image from "next/image";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import PageHeader from "@/components/shared/page-header";
import { awardTimeline, certifications, awards } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AwardsPage() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Awards & Certifications", href: "/about/awards" },
    ];

    return (
        <>
            <PageHeader 
                title="Awards & Certifications"
                description="Great Technical Service is in Our DNA and We Are Grateful for the Recognition."
            />
            <section className="bg-secondary py-12">
                <div className="container">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
            </section>
             <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="font-headline text-3xl font-bold text-center mb-12">Our Awards</h2>
                    <div className="flex justify-center items-center flex-wrap gap-8">
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
                    <h2 className="font-headline text-3xl font-bold text-center mb-12">Our Awards &amp; Certifications</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-headline text-2xl font-bold mb-6">A Timeline of Our Award History</h3>
                            {awardTimeline.map(item => (
                                <div key={item.year} className="mb-4">
                                    <h4 className="font-bold text-lg text-primary">{item.year}</h4>
                                    <ul className="list-disc list-inside text-muted-foreground mt-2">
                                        {item.awards.map(award => <li key={award}>{award}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="font-headline text-2xl font-bold mb-6">Certifications</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-lg">Microsoft Partner Network - Gold</h4>
                                    <ul className="list-disc list-inside text-muted-foreground mt-2">
                                        {certifications.gold.map(cert => <li key={cert}>{cert}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Microsoft Partner Network - Silver</h4>
                                    <ul className="list-disc list-inside text-muted-foreground mt-2">
                                        {certifications.silver.map(cert => <li key={cert}>{cert}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Other Key Partner Certifications</h4>
                                    <ul className="list-disc list-inside text-muted-foreground mt-2">
                                        {certifications.other.map(cert => (
                                            <li key={cert.name}><strong>{cert.name}</strong> {cert.description && `- ${cert.description}`}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Individual Microsoft Certifications</h4>
                                    <ul className="list-disc list-inside text-muted-foreground mt-2">
                                        {certifications.individual.map(cert => <li key={cert.code}><strong>{cert.code}:</strong> {cert.title}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Detailed Cisco Certifications</h4>
                                    <ul className="list-disc list-inside text-muted-foreground mt-2 columns-2">
                                        {certifications.cisco.map(cert => <li key={cert}>{cert}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Detailed Dell Certifications</h4>
                                    <ul className="list-disc list-inside text-muted-foreground mt-2">
                                        {certifications.dell.map(cert => <li key={cert}>{cert}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
