import PageHeader from "@/components/shared/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        description="We're here to help. Whether you have a question about our services or want to discuss your IT needs, our team is ready to assist you."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-2">
                <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">
                    Reach out to us through any of the following channels.
                </p>
                <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 rounded-md bg-accent/10 p-3 text-accent">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Phone</h3>
                            <p className="text-muted-foreground">Our team is available from 9 AM to 5 PM, Monday to Friday.</p>
                            <a href="tel:+1234567890" className="mt-1 block text-accent hover:underline">(123) 456-7890</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 rounded-md bg-accent/10 p-3 text-accent">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p className="text-muted-foreground">For general inquiries and support questions.</p>
                            <a href="mailto:contact@optimalsolutions.com" className="mt-1 block text-accent hover:underline">contact@optimalsolutions.com</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 rounded-md bg-accent/10 p-3 text-accent">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Office</h3>
                            <p className="text-muted-foreground">123 Tech Avenue, Silicon Valley, CA, 94025</p>
                            <a href="#" className="mt-1 block text-accent hover:underline">Get Directions</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:col-span-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <ContactForm />
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
