
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export default function BlogPage() {
  const categories = [
    "Uncategorized", "Office365", "Productivity Tools", "Security and Compliance", 
    "Finance", "Managed Services and Help Desk", "Professional Services", 
    "Business Outcomes", "Executive Insights", "Company News", "Press Releases", 
    "Education", "Windows10", "Events", "real estate", "Biotech", 
    "Healthcare", "Government", "IT Consulting", "Women in Tech", "Legal", 
    "Nonprofit", "Webinar", "Workshops", "Microsoft 365", "Microsoft Azure", 
    "Cloud", "Corporate Culture", "partnerships", "Copilot", 
    "Artificial Intelligence", "Microsoft Dynamics", "cybersecurity", "Power BI"
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" }
  ];

  return (
    <>
      <PageHeader
        title="Managed IT Services Blog"
        description="Industry News, Microsoft Insights, Executive Thoughts and More…"
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button key={category} variant="outline" size="sm" asChild>
                  <Link href="#">{category}</Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const postImage = PlaceHolderImages.find(img => img.id === post.imageUrl);
              return (
              <Card key={post.slug} className="flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                <Link href={`/blog/${post.slug}`} className="block">
                  {postImage && (
                    <div className="relative h-56 w-full">
                      <Image
                        src={postImage.imageUrl}
                        alt={postImage.description}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={postImage.imageHint}
                      />
                    </div>
                  )}
                </Link>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="uppercase">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            )})}
          </div>
           <div className="mt-12 flex justify-center gap-2">
              <Button variant="outline" size="icon">1</Button>
              <Button variant="ghost" size="icon">2</Button>
              <Button variant="ghost" size="icon">3</Button>
              <Button variant="ghost" asChild>
                <Link href="#">Next &raquo;</Link>
              </Button>
           </div>

            <div className="mt-24 text-center">
              <h2 className="font-headline text-3xl font-bold">See How We Make IT Easy for Businesses Like Yours</h2>
              <Button asChild className="mt-6">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
