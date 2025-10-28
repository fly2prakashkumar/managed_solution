import Image from "next/image";
import PageHeader from "@/components/shared/page-header";
import { services } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";


export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="We offer a comprehensive suite of managed IT services designed to keep your business secure, productive, and innovative."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => {
              const serviceImage = PlaceHolderImages.find(img => img.id === service.imageUrl);
              const isReversed = index % 2 !== 0;
              return (
              <Link key={service.slug} href={`/services/${service.slug}`} id={service.slug} className="grid scroll-mt-20 items-center gap-8 md:grid-cols-2 md:gap-12 group">
                <div className={`relative h-80 w-full md:h-96 ${isReversed ? 'md:order-last' : ''}`}>
                    {serviceImage && (
                        <Image
                        src={serviceImage.imageUrl}
                        alt={serviceImage.description}
                        fill
                        className="rounded-lg object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        data-ai-hint={serviceImage.imageHint}
                        />
                    )}
                </div>
                <div>
                    <div className="mb-4 flex items-center gap-4">
                        <div className="rounded-md bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                            <service.icon className="h-8 w-8" />
                        </div>
                        <h2 className="font-headline text-3xl font-bold group-hover:text-primary transition-colors">{service.title}</h2>
                    </div>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                </div>
              </Link>
            )})}
          </div>
        </div>
      </section>
    </>
  );
}
