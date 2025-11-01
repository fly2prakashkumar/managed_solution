import Image from "next/image";
import PageHeader from "@/components/shared/page-header";
import { services } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const managedITService = services.find(s => s.slug === 'managed-it');
  const consultingService = services.find(s => s.slug === 'it-consulting');

  const managedITImage = managedITService ? PlaceHolderImages.find(img => img.id === managedITService.imageUrl) : undefined;
  const consultingImage = consultingService ? PlaceHolderImages.find(img => img.id === consultingService.imageUrl) : undefined;

  return (
    <>
      <PageHeader
        title="Our Services"
        description="We offer a comprehensive suite of managed IT services designed to keep your business secure, productive, and innovative."
      >
        <div className="mt-4">
            <Button asChild>
                <Link href="/contact">Contact us</Link>
            </Button>
        </div>
      </PageHeader>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2">
            {managedITService && managedITImage && (
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg">
                    <Image
                    src={managedITImage.imageUrl}
                    alt={managedITImage.description}
                    fill
                    className="rounded-lg object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={managedITImage.imageHint}
                    />
                </div>
                <div className="mt-6">
                    <h2 className="font-headline text-3xl font-bold">{managedITService.title}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">{managedITService.description}</p>
                    <Button asChild variant="link" className="p-0 text-orange-500 mt-4">
                        <Link href={`/services/${managedITService.slug}`}>View services</Link>
                    </Button>
                </div>
              </div>
            )}
             {consultingService && consultingImage && (
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg">
                    <Image
                    src={consultingImage.imageUrl}
                    alt={consultingImage.description}
                    fill
                    className="rounded-lg object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={consultingImage.imageHint}
                    />
                </div>
                <div className="mt-6">
                    <h2 className="font-headline text-3xl font-bold">{consultingService.title}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">{consultingService.description}</p>
                    <Button asChild variant="link" className="p-0 text-orange-500 mt-4">
                        <Link href={`/services/${consultingService.slug}`}>View services</Link>
                    </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
