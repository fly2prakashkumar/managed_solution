
import { notFound } from "next/navigation";
import { industries } from "@/lib/data";

import { FinancialPage } from "@/components/industries/financial-page";
import { HealthcarePage } from "@/components/industries/healthcare-page";
import { LifeSciencesPage } from "@/components/industries/life-sciences-page";
import { NonProfitPage } from "@/components/industries/non-profit-page";

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug);

  if (!industry) {
    notFound();
  }

  if (params.slug === 'financial-technology-services') {
    return <FinancialPage />;
  }
  
  if (params.slug === 'healthcare-technology-services') {
    return <HealthcarePage />;
  }

  if (params.slug === 'life-sciences-technology-services') {
    return <LifeSciencesPage />;
  }

  if (params.slug === 'non-profit-technology-services') {
    return <NonProfitPage />;
  }

  return (
    <div className="container py-12">
        <h1 className="text-4xl font-bold">{industry.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{industry.description}</p>
    </div>
  )
}
