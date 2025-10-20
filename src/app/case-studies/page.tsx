import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Our Success Stories"
        description="Discover how we've helped businesses transform their IT infrastructure, enhance security, and drive growth."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => {
              const studyImage = PlaceHolderImages.find(img => img.id === study.imageUrl);
              return (
                <Card key={study.slug} className="flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                   {studyImage && (
                    <div className="relative h-56 w-full">
                      <Image
                        src={studyImage.imageUrl}
                        alt={studyImage.description}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={studyImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{study.title}</CardTitle>
                    <CardDescription>{study.clientName}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{study.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" disabled>Full Story Coming Soon</Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
