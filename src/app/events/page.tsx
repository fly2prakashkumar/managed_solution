
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { liveEvents, onDemandVideos } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { EventContactForm } from "@/components/forms/event-contact-form";

export default function EventsPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'events-hero');

    return (
        <>
            <section className="relative h-80 bg-primary text-primary-foreground">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover opacity-30"
                        data-ai-hint={heroImage.imageHint}
                    />
                )}
                <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
                    <h1 className="font-headline text-5xl font-bold">Events</h1>
                    <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
                        Stay up to date with our virtual and in-person events to access expert and community intel, as well as resources for your business and technology needs.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="text-center font-headline text-3xl font-bold text-primary md:text-4xl">
                        Upcoming Live Events
                    </h2>
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {liveEvents.map((event) => {
                            const eventImage = PlaceHolderImages.find(img => img.id === event.imageUrl);
                            return (
                                <Card key={event.slug} className="flex flex-col overflow-hidden">
                                    <Link href={`/events/${event.slug}`} className="block">
                                        {eventImage && (
                                            <div className="relative h-56 w-full">
                                                <Image
                                                    src={eventImage.imageUrl}
                                                    alt={eventImage.description}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    data-ai-hint={eventImage.imageHint}
                                                />
                                            </div>
                                        )}
                                    </Link>
                                    <CardHeader>
                                        <CardDescription>{event.date}</CardDescription>
                                        <CardTitle className="font-headline text-xl">
                                            <Link href={`/events/${event.slug}`}>{event.title}</Link>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground">{event.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild className="w-full bg-orange-500 text-white hover:bg-orange-600">
                                            <Link href={`/events/${event.slug}`}>REGISTER</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
            
            <section className="bg-secondary py-16 md:py-24">
                <div className="container">
                    <h2 className="text-center font-headline text-3xl font-bold text-primary md:text-4xl">
                        On-Demand Videos
                    </h2>
                     <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {onDemandVideos.map((video) => {
                            const videoImage = PlaceHolderImages.find(img => img.id === video.imageUrl);
                            return (
                                <Card key={video.slug} className="flex flex-col overflow-hidden">
                                    <Link href={`/resources/${video.slug}`} className="block">
                                        {videoImage && (
                                            <div className="relative h-56 w-full">
                                                <Image
                                                    src={videoImage.imageUrl}
                                                    alt={videoImage.description}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    data-ai-hint={videoImage.imageHint}
                                                />
                                                {video.isNew && (
                                                     <Badge className="absolute top-3 right-3 bg-blue-500 text-white">NEW</Badge>
                                                )}
                                            </div>
                                        )}
                                    </Link>
                                    <CardHeader>
                                        <CardDescription>{video.series}</CardDescription>
                                        <CardTitle className="font-headline text-xl">
                                            <Link href={`/resources/${video.slug}`}>{video.title}</Link>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground line-clamp-4">{video.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild variant="outline" className="w-full">
                                            <Link href={`/resources/${video.slug}`}>WATCH NOW</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container max-w-4xl">
                     <div className="text-center">
                        <h2 className="font-headline text-4xl font-bold text-blue-600">Contact Us Today!</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Chat with an expert about your business's technology needs.
                        </p>
                    </div>
                    <Card className="mt-8 p-8 shadow-2xl">
                        <EventContactForm />
                    </Card>
                </div>
            </section>
        </>
    )
}
