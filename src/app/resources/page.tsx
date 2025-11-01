
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import { resources } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/shared/contact-section";

export default function EGuidesPage() {
    return (
        <>
            <PageHeader 
                title="eGuides"
                description="Gain valuable insights from our industry experts. Access our library of white papers, ebooks, and guides."
            />
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                      {resources.map((resource) => {
                        const resourceImage = PlaceHolderImages.find(img => img.id === resource.imageUrl);
                        return (
                          <Card key={resource.title} className="flex flex-col">
                            {resourceImage && (
                              <div className="relative h-64 w-full">
                                <Image 
                                    src={resourceImage.imageUrl}
                                    alt={resourceImage.description}
                                    fill
                                    className="object-cover rounded-t-lg"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    data-ai-hint={resourceImage.imageHint}
                                />
                              </div>
                            )}
                            <CardHeader className="flex-grow">
                                <CardTitle className="font-headline text-xl">{resource.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button asChild className="w-full">
                                    <Link href="#">View eGuide</Link>
                                </Button>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                </div>
            </section>
            <ContactSection />
        </>
    );
}
