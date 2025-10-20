import Image from "next/image";
import PageHeader from "@/components/shared/page-header";
import { ResourceForm } from "@/components/forms/resource-form";
import { resources } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function ResourcesPage() {
    const resource = resources[0];
    const resourceImage = PlaceHolderImages.find(img => img.id === resource.imageUrl);

    return (
        <>
            <PageHeader 
                title="Free Resources"
                description="Gain valuable insights from our industry experts. Access our library of white papers, ebooks, and guides."
            />
            <section className="py-16 md:py-24">
                <div className="container">
                    <Card className="overflow-hidden md:grid md:grid-cols-2 md:items-start">
                        <div className="p-8 md:p-10">
                            <CardHeader className="p-0">
                                <CardTitle className="font-headline text-2xl md:text-3xl">{resource.title}</CardTitle>
                                <CardDescription className="pt-2 text-base">{resource.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="mt-6 p-0">
                                <h3 className="mb-4 text-lg font-semibold">Get your free copy now</h3>
                                <ResourceForm />
                            </CardContent>
                        </div>
                         {resourceImage && (
                            <div className="relative h-64 w-full md:h-full">
                                <Image 
                                    src={resourceImage.imageUrl}
                                    alt={resourceImage.description}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    data-ai-hint={resourceImage.imageHint}
                                />
                            </div>
                        )}
                    </Card>
                </div>
            </section>
        </>
    );
}
