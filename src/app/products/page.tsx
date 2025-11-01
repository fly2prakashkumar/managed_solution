
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import { products } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        description="Explore our curated selection of top-tier technology products to enhance your IT infrastructure."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const productImage = PlaceHolderImages.find(img => img.id === `product-${product.slug}-hero`);
              return (
                <Card key={product.slug} className="flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                  <Link href={`/products/${product.slug}`} className="block">
                    {productImage && (
                      <div className="relative h-56 w-full">
                        <Image
                          src={productImage.imageUrl}
                          alt={productImage.description}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          data-ai-hint={productImage.imageHint}
                        />
                      </div>
                    )}
                  </Link>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">
                      <Link href={`/products/${product.slug}`}>{product.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{product.description}</p>
                  </CardContent>
                  <CardContent>
                     <Button asChild variant="link" className="p-0 text-orange-500">
                        <Link href={`/products/${product.slug}`}>Learn more</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
