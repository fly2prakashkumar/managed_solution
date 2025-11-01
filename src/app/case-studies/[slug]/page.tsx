
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((p) => p.slug === params.slug);

  if (!study) {
    notFound();
  }

  const studyImage = PlaceHolderImages.find(img => img.id === study.imageUrl);
  
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: study.title, href: `/case-studies/${study.slug}` }
  ];

  return (
    <article className="py-12 md:py-20">
       <div className="container max-w-4xl">
         <Breadcrumbs items={breadcrumbItems} />
       </div>
      <div className="container max-w-4xl mt-8">
        <header className="mb-8">
          <h1 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">
            {study.title}
          </h1>
          {study.clientName && (
            <p className="mt-3 text-lg text-muted-foreground">
              Client: {study.clientName}
            </p>
          )}
        </header>

        {studyImage && (
          <div className="relative mb-8 h-64 w-full md:h-96">
            <Image
              src={studyImage.imageUrl}
              alt={studyImage.description}
              fill
              className="rounded-lg object-cover"
              priority
              data-ai-hint={studyImage.imageHint}
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert mx-auto max-w-none prose-p:text-foreground/80 prose-headings:font-headline prose-headings:text-foreground">
          <p className="lead font-semibold">{study.description}</p>
          <p>Further details about the challenges, solutions, and results of this case study will be available soon. Check back later for the full story.</p>
        </div>

        <div className="mt-12">
            <ContactSection />
        </div>
      </div>
    </article>
  );
}
