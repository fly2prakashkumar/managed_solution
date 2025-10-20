
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
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { testimonials, awards, webinars } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ContactSection from '@/components/shared/contact-section';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');
const aiServicesImage = PlaceHolderImages.find(img => img.id === 'home-ai-services');
const nationalServicesImage = PlaceHolderImages.find(img => img.id === 'home-national-services');
const mapImage = PlaceHolderImages.find(img => img.id === 'home-map');
const smarterItImage = PlaceHolderImages.find(img => img.id === 'home-smarter-it');

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
       <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden bg-primary text-primary-foreground">
        <video
          src="https://videos.pexels.com/video-files/3251021/3251021-hd_1280_720_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-primary/60" />
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
              <Button asChild size="lg" variant="outline" className="border-transparent bg-transparent text-white hover:bg-white/10 hover:border-white">
                <Link href="/services">LEARN MORE</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-transparent bg-transparent text-white hover:bg-white/10 hover:border-white">
                <a href="tel:858-429-3000">858-429-3000</a>
              </Button>
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

      {/* AI-Powered Managed Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="font-headline text-3xl font-bold md:text-4xl">AI-Powered Managed Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We deliver AI-powered IT services that enhance productivity, automate support, and reduce downtime—providing intelligent help desk solutions for businesses of all sizes. Bring the transformative power of AI to your business!
              </p>
              <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                <Link href="/services#managed-it">VIEW SOLUTION</Link>
              </Button>
            </div>
            <div className="relative h-80 w-full md:h-96">
              {aiServicesImage && (
                <Image
                  src={aiServicesImage.imageUrl}
                  alt={aiServicesImage.description}
                  fill
                  className="rounded-lg object-cover shadow-lg"
                  data-ai-hint={aiServicesImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* National Managed Services Providers Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="relative h-80 w-full md:h-96 md:order-last">
              {nationalServicesImage && (
                <Image
                  src={nationalServicesImage.imageUrl}
                  alt={nationalServicesImage.description}
                  fill
                  className="rounded-lg object-cover shadow-lg"
                  data-ai-hint={nationalServicesImage.imageHint}
                />
              )}
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold md:text-4xl">National Managed Services Providers</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We provide nationwide managed IT services for businesses of all sizes—supporting growth from 100+ users in small and medium-sized businesses to enterprise-level outsourced IT services.
              </p>
              <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                <Link href="/services">OUR SERVICES</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Managed IT Services Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="container">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Remote Managed IT Services — Available in All 50 U.S. States.</h2>
          <h3 className="font-headline text-3xl font-bold md:text-4xl text-muted-foreground">Leading National Provider of Outsourced IT Solutions.</h3>
          <div className="mx-auto max-w-4xl">
            <p className="mt-4 text-lg text-muted-foreground">
              We deliver enterprise-grade Managed IT services to businesses across all 50 states. Whether you're in New York City, Chicago, or Los Angeles, our full-time nationwide teams provide reliable, remote IT support tailored to your region. Our U.S.-based helpdesk operates 24/7/365, ensuring fast response times and expert assistance—no matter where your business is located.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our interactive map below—click any state to view IT solutions tailored to major cities in that region.
            </p>
          </div>
          <div className="relative mt-12 h-auto w-full">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                width={1000}
                height={600}
                className="mx-auto"
                data-ai-hint={mapImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      {/* Empowering Every Role Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="font-headline text-3xl font-bold md:text-4xl">Empowering Every Role with Smarter IT</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Technology should be an advantage, not a burden. Our Managed Services Wheel illustrates how every role, from HR and Finance to IT and Compliance, benefits from integrated solutions designed to work together.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Whether it's automating processes, monitoring networks, or ensuring compliance, we deliver peace of mind and measurable results for your entire organization.
              </p>
            </div>
            <div className="relative h-96 w-full">
              {smarterItImage && (
                <Image
                  src={smarterItImage.imageUrl}
                  alt={smarterItImage.description}
                  fill
                  className="object-contain"
                  data-ai-hint={smarterItImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Feedback Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <h3 className="font-headline text-4xl font-bold text-orange-500 md:text-5xl">10,000+ Satisfied Customers</h3>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-headline text-5xl font-bold text-orange-500 md:text-6xl">4.95</p>
                <p className="mt-2 text-muted-foreground">Average satisfaction rating amongst all customers</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-headline text-5xl font-bold text-orange-500 md:text-6xl">A+</p>
                <p className="mt-2 text-muted-foreground">Cybersecurity Rating</p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h2 className="font-headline text-3xl font-bold">Worked With Us?</h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">Your feedback is appreciated, and so are you! Tell us about your IT Managed Services Provider experience:</p>
            <Button size="lg" className="mt-6 bg-orange-500 text-white hover:bg-orange-600">SUBMIT FEEDBACK</Button>
          </div>
        </div>
      </section>
      
      <ContactSection />

    </div>
  );
}
