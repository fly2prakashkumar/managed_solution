import PageHeader from "@/components/shared/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { Mail, Phone, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const sharepointImage = PlaceHolderImages.find(p => p.id === 'sharepoint-content-management');

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Say Goodbye to Your IT Headaches. Contact us to speak with our team of experts and enable ultimate employee efficiency and business productivity while remaining secure and compliant and accelerating business growth."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-headline text-3xl font-bold">Contact Information</h2>
              <div className="mt-8 space-y-8">
                <Card>
                    <CardHeader><CardTitle>Sales</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                         <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-primary"/>
                            <a href="tel:858-429-3000" className="font-semibold hover:underline">858.429.3000</a>
                        </div>
                        <Button asChild>
                            <a href="mailto:sales@optimalsolutions.com"><Mail className="mr-2"/> Email Sales</a>
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>Customer Support</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                         <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-primary"/>
                            <div>
                                <a href="tel:888-563-9132" className="font-semibold hover:underline">888.563.9132, option 2</a>
                            </div>
                        </div>
                        <Button asChild>
                            <a href="mailto:helpdesk@optimalsolutions.com"><Mail className="mr-2"/> Email Customer Support</a>
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Headquarters</CardTitle></CardHeader>
                    <CardContent>
                        <address className="not-italic">
                            2150 W Washington St, Suite #402, <br/>
                            San Diego, CA. 92110
                        </address>
                        <Button asChild variant="link" className="p-0 mt-2">
                           <Link href="#">Get Directions</Link>
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>Customer Portal</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Thanks for being our customer. Click to get in touch with our Help Desk.</p>
                        <Button asChild className="mt-4">
                           <Link href="#"><LogIn className="mr-2"/> Login now</Link>
                        </Button>
                    </CardContent>
                </Card>
              </div>
                {sharepointImage && (
                    <div className="mt-8 relative h-64 w-full">
                        <Image src={sharepointImage.imageUrl} alt={sharepointImage.description} fill className="object-cover rounded-lg" data-ai-hint={sharepointImage.imageHint} />
                    </div>
                )}
            </div>
            <div>
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">Get In Touch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-24 text-center border-t pt-16">
            <h2 className="font-headline text-3xl font-bold">Strategic IT Management Services Across the United States</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">Managed Solution delivers integrated IT solutions to organizations across the United States. We meet our clients where they are to provide seamless, integrated IT support.</p>
            <div className="mt-4">
                <h3 className="font-semibold text-primary">Top Managed Service Providers in the United States</h3>
                <h3 className="font-semibold text-primary mt-1">San Diego Managed IT Service Provider</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
