
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowRight, CheckCircle, Star, MessageSquare } from 'lucide-react';
import { testimonials, awards, webinars } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full bg-primary text-primary-foreground">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-right opacity-30"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="container relative z-10 flex h-full flex-col items-start justify-center text-left">
          <div className="max-w-2xl">
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Your Award-Winning Nationwide IT Help Desk and IT Services
              Provider
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 md:text-xl">
              Say goodbye to IT headaches—24/7/365 support for U.S. businesses
              with 100+ users.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                <Link href="/contact">CONTACT US</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/services">LEARN MORE</Link>
              </Button>
              <a href="tel:858-429-3000" className='text-white font-semibold'>858-429-3000</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            <div className="text-center md:text-left">
                <p className='font-bold text-lg'>EXCELLENT</p>
                <div className='flex justify-center md:justify-start text-yellow-500 my-2'>
                    <Star fill='currentColor' className='w-5 h-5' />
                    <Star fill='currentColor' className='w-5 h-5' />
                    <Star fill='currentColor' className='w-5 h-5' />
                    <Star fill='currentColor' className='w-5 h-5' />
                    <Star fill='currentColor' className='w-5 h-5' />
                </div>
                <p className='text-muted-foreground text-sm'>Based on 66 reviews</p>
                <div className="flex items-center justify-center md:justify-start gap-1 mt-2 font-bold text-lg">
                    <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" width={60} height={20} />
                </div>
            </div>
            <div className='md:col-span-3'>
                 <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                    >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <Card>
                                <CardContent className="p-6">
                                    <div className='flex items-start justify-between mb-2'>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold">{testimonial.name}</p>
                                                <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                                            </div>
                                        </div>
                                        <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" width={20} height={20} className='w-5 h-5 opacity-50' />
                                    </div>
                                    <div className='flex text-yellow-500 my-3'>
                                        {[...Array(5)].map((_, i) => <Star key={i} fill='currentColor' className='w-4 h-4' />)}
                                    </div>
                                    <p className="text-sm text-muted-foreground">{testimonial.comment}</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='-left-4' />
                    <CarouselNext className='-right-4' />
                </Carousel>
                <div className='text-center md:text-right mt-4'>
                  <Link href="#" className='inline-flex items-center text-xs text-green-600 font-semibold bg-green-100/50 px-2 py-1 rounded-md'>
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" /> Verified by Trustindex
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Series Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">New Copilot Webinar Series!</h2>
            <Button asChild variant='secondary' className='shrink-0'>
                <Link href="/events">JOIN THE HUNDREDS WHO ALREADY SIGNED UP <ArrowRight className="ml-2"/></Link>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {webinars.map((webinar) => {
              const webinarImage = PlaceHolderImages.find(img => img.id === webinar.imageUrl);
              return (
              <Card key={webinar.title} className="bg-card text-card-foreground overflow-hidden">
                 {webinarImage && (
                    <div className="relative h-48 w-full bg-muted-foreground/20">
                        <Image
                            src={webinarImage.imageUrl}
                            alt={webinarImage.description}
                            fill
                            className="object-contain p-4"
                            data-ai-hint={webinarImage.imageHint}
                        />
                    </div>
                )}
                <CardContent className="p-6">
                  <h3 className="font-headline text-xl font-bold">{webinar.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{webinar.date}</p>
                  <Button asChild className="mt-4 bg-orange-500 text-white hover:bg-orange-600">
                    <Link href="#">REGISTER</Link>
                  </Button>
                </CardContent>
              </Card>
            )})}
          </div>
        </div>
      </section>
      
      {/* Microsoft Experts Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
            <Card className="p-8 md:p-12 shadow-2xl">
                <div className="text-center">
                    <div className="flex justify-center text-orange-400 mb-4">
                        <Star className="w-6 h-6" />
                        <Star className="w-8 h-8 mx-1" />
                        <Star className="w-6 h-6" />
                    </div>
                    <h2 className="font-headline text-3xl font-bold md:text-4xl">Microsoft Specialized Experts You Can Count On</h2>
                </div>
                
                <div className="mt-8">
                    <Carousel
                        opts={{ align: "start", loop: true }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {awards.map((award, index) => {
                                const awardImage = PlaceHolderImages.find(p => p.id === award.imageId);
                                return (
                                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-4">
                                    <div className="p-2 border rounded-lg h-28 flex items-center justify-center">
                                    {awardImage && (
                                        <Image
                                            src={awardImage.imageUrl}
                                            alt={award.title}
                                            width={120}
                                            height={60}
                                            className="object-contain"
                                            data-ai-hint={awardImage.imageHint}
                                        />
                                    )}
                                    </div>
                                </CarouselItem>
                            )})}
                        </CarouselContent>
                        <CarouselPrevious className=" -left-4 md:-left-10" />
                        <CarouselNext className=" -right-4 md:-right-10" />
                    </Carousel>
                </div>

                <div className="mt-8 text-center text-muted-foreground">
                    <p>
                        Accelerate your company's success with an award-winning team of Microsoft Managed Services experts that are constantly expanding their breadth of knowledge and capabilities. As a Top 150 Microsoft Service Provider in the US with a multitude of Microsoft Certifications under our belt — you can trust us to keep your system powered by the most current, top-of-the-line practices.
                    </p>
                </div>
                <div className="mt-8 text-center">
                    <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                        <Link href="#">SEE ALL AWARDS & CERTIFICATIONS</Link>
                    </Button>
                </div>
            </Card>
        </div>
      </section>
    </div>
  );
}
