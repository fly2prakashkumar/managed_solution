
import { notFound } from "next/navigation";
import Image from "next/image";
import { liveEvents } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { EventContactForm } from "@/components/forms/event-contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/shared/contact-section";

export async function generateStaticParams() {
  return liveEvents.map((event) => ({
    slug: event.slug,
  }));
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = liveEvents.find((e) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  const eventImage = PlaceHolderImages.find(img => img.id === event.imageUrl);

  return (
    <>
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container">
           <div className="text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">&raquo;</span>
            <Link href="/events" className="hover:text-primary">Events</Link>
            <span className="mx-2">&raquo;</span>
            <span className="text-foreground">{event.title}</span>
          </div>
          <h1 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">
            {event.title}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
                {eventImage && (
                <div className="relative mb-8 h-64 w-full md:h-96">
                    <Image
                    src={eventImage.imageUrl}
                    alt={eventImage.description}
                    fill
                    className="rounded-lg object-cover"
                    priority
                    data-ai-hint={eventImage.imageHint}
                    />
                </div>
                )}
                 <div className="prose prose-lg dark:prose-invert mx-auto max-w-none prose-p:text-foreground/80 prose-headings:font-headline prose-headings:text-foreground">
                    <p>{event.description}</p>
                </div>
            </div>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Event Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Calendar className="w-6 h-6 text-orange-500" />
                            <div>
                                <p className="font-semibold">Date</p>
                                <p className="text-muted-foreground">{event.date}</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-4">
                            <Clock className="w-6 h-6 text-orange-500" />
                            <div>
                                <p className="font-semibold">Time</p>
                                <p className="text-muted-foreground">10:00 AM - 11:00 AM PST</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-4">
                            <MapPin className="w-6 h-6 text-orange-500" />
                            <div>
                                <p className="font-semibold">Location</p>
                                <p className="text-muted-foreground">Virtual</p>
                            </div>
                        </div>
                        <Button asChild size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                            <Link href="#register">Register Now</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>
      
      <div id="register">
        <ContactSection />
      </div>
    </>
  );
}

