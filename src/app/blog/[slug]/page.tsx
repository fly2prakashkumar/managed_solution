
import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import SummaryClient from "./summary-client";
import { M365BusinessPremiumPost } from "@/components/blog/m365-business-premium";
import { SecurityToolkitPost } from "@/components/blog/security-toolkit";
import { ZeroTrustPost } from "@/components/blog/zero-trust";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Specific components for detailed posts
  if (params.slug === "microsoft-365-business-premium-new-offerings") {
    return <M365BusinessPremiumPost />;
  }
  if (params.slug === "security-toolkit-cybersecurity-awareness-month") {
    return <SecurityToolkitPost />;
  }
  if (params.slug === "harnessing-ai-for-zero-trust-architecture") {
    return <ZeroTrustPost />;
  }

  // Fallback for standard posts
  const postImage = PlaceHolderImages.find(img => img.id === post.imageUrl);

  return (
    <article className="py-12 md:py-20">
      <div className="container max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            By {post.author} on {post.date}
          </p>
        </header>

        {postImage && (
          <div className="relative mb-8 h-64 w-full md:h-96">
            <Image
              src={postImage.imageUrl}
              alt={postImage.description}
              fill
              className="rounded-lg object-cover"
              priority
              data-ai-hint={postImage.imageHint}
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert mx-auto max-w-none prose-p:text-foreground/80 prose-headings:font-headline prose-headings:text-foreground">
          <p>{post.content}</p>
        </div>

        <SummaryClient content={post.content} />

      </div>
    </article>
  );
}
