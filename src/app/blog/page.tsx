
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="IT Insights & Expertise"
        description="Stay informed with the latest trends, tips, and best practices in technology and cybersecurity from our team of experts."
      />
      <section className="py-16 md:py-24">
        <div className="container">
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
                  <CardDescription>{post.author} &bull; {post.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 text-orange-500">
                    <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            )})}
          </div>
        </div>
      </section>
    </>
  );
}

