
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { caseStudies, industries } from "@/lib/data";
import ContactSection from "@/components/shared/contact-section";

export default function CaseStudiesPage() {
  const businessNeeds = [
    { title: "Merger & Acquisitions", description: "Seamlessly handle technology integration and avoid increased costs or delays." },
    { title: "Migrations", description: "Leverage our expertise as one of Microsoft's Top 1% cloud services companies worldwide." },
    { title: "Compliance", description: "Meet industry-specific, regional, national, and international requirements." },
    { title: "Growth Support", description: "Ensure your IT infrastructure enables and supports your business growth." },
  ]
  return (
    <>
      <PageHeader
        title="Case Studies"
        description="Discover how we've helped businesses transform their IT infrastructure, enhance security, and drive growth."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
                <Card key={study.slug} className="flex flex-col overflow-hidden">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="font-semibold text-muted-foreground">How we helped:</p>
                    <p className="text-muted-foreground mt-2">{study.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="uppercase">
                        <Link href={`/case-studies/${study.slug}`}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold">We Specialize In Healthcare, Biotech and Financial Services</h2>
            <p className="mt-4 text-muted-foreground">Not in healthcare, biotech or finance? Not to worry. We work with other industries, too!</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Card key={industry.slug}>
                <CardHeader>
                  <CardTitle>{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                  <Button asChild variant="link" className="p-0 mt-4"><Link href={`/industries/${industry.slug}`}>Learn more</Link></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
           <div className="text-center">
            <h2 className="font-headline text-3xl font-bold">Outsourced IT Services By Business Need</h2>
          </div>
           <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {businessNeeds.map((need) => (
              <Card key={need.title}>
                <CardHeader><CardTitle>{need.title}</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{need.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
