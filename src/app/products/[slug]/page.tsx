
import { notFound } from "next/navigation";
import { products } from "@/lib/data";

import { ProcurementPage } from "@/components/products/procurement-page";
import { SecurityProductsPage } from "@/components/products/security-products-page";
import { MicrosoftLicensingPage } from "@/components/products/microsoft-licensing-page";


export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((s) => s.slug === params.slug);

  if (!product) {
    notFound();
  }

  if (params.slug === 'procurement-services') {
    return <ProcurementPage />;
  }

  if (params.slug === 'security-products') {
    return <SecurityProductsPage />;
  }
  
  if (params.slug === 'microsoft-licensing') {
    return <MicrosoftLicensingPage />;
  }

  return (
    <div className="container py-12">
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
    </div>
  )
}
