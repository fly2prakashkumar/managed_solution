
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import { industries } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/shared/contact-section";

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        description="We provide specialized IT solutions for various industries, understanding the unique challenges and compliance requirements of each."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => {
              const industryImage = PlaceHolderImages.find(img => img.id === industry.imageUrl);
              return (
                <Card key={industry.slug} className="flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                  {industryImage && (
                    <Link href={`/industries/${industry.slug}`} className="block">
                      <div className="relative h-56 w-full">
                        <Image
                          src={industryImage.imageUrl}
                          alt={industryImage.description}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          data-ai-hint={industryImage.imageHint}
                        />
                      </div>
                    </Link>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">
                      <Link href={`/industries/${industry.slug}`}>{industry.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{industry.description}</p>
                  </CardContent>
                  <CardContent>
                     <Button asChild variant="link" className="p-0 text-orange-500">
                        <Link href={`/industries/${industry.slug}`}>Learn more</Link>
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
