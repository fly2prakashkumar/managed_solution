

import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import { solutions } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/shared/contact-section";

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        title="Our Solutions"
        description="Microsoft Technology Solutions to empower your business."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => {
              const solutionImage = PlaceHolderImages.find(img => img.id === solution.imageUrl);
              return (
                <Card key={solution.slug} className="flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                  {solutionImage && (
                    <Link href={solution.href} className="block">
                      <div className="relative h-56 w-full">
                        <Image
                          src={solutionImage.imageUrl}
                          alt={solutionImage.description}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          data-ai-hint={solutionImage.imageHint}
                        />
                      </div>
                    </Link>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">
                      <Link href={solution.href}>{solution.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                  <CardContent>
                     <Button asChild variant="link" className="p-0 text-orange-500">
                        <Link href={solution.href}>Learn more</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
