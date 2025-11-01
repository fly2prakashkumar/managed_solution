
import Image from "next/image";
import Link from "next/link";
import { vcioFaqs, vcioTestimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ContactSection from "@/components/shared/contact-section";
import { Search, Target, Zap, Activity, Puzzle, DollarSign, ShieldAlert, BarChart, Star, HeartHandshake } from "lucide-react";


export const VCIOPage = () => {
    const heroImage = PlaceHolderImages.find(img => img.id === 'vcio-hero');
    const processImage = PlaceHolderImages.find(img => img.id === 'vcio-process');
    const datasheetImage = PlaceHolderImages.find(img => img.id === 'vcio-datasheet');

    const vcioRolePoints = [
        "IT recommendations formulated around business goals as it relates to sales, marketing, cash flow, and competitive landscape.",
        "Analyzing your current IT spend to see where you can be more cost-effective or eliminate spend.",
        "Asking you thought-provoking questions to discover opportunities & areas for improvements."
    ];

    const vcioProcessSteps = [
        {
            title: "Discover",
            description: "Open dialogue to learn about challenges and goals, assess systems, and look at overlap in technology product and spend... maximum ROI.",
            icon: Search
        },
        {
            title: "Strategize",
            description: "Formulate an IT plan that aligns with your business goals... in a cost-effective and timely manner.",
            icon: Target
        },
        {
            title: "Execute",
            description: "Our team of engineers is available to help support in executing upon the items outlined in the roadmap and delivering regular reports... key IT performance metrics.",
            icon: Zap
        },
        {
            title: "Optimize",
            description: "Provide mentoring services, vendor management, and more... optimize your IT performance and spend.",
            icon: Activity
        },
    ];

    const vcioBenefits = [
        { title: "Better Business & IT Alignment", icon: Puzzle },
        { title: "Enhanced Agility", icon: Zap },
        { title: "OpEx vs CapEx Cost Comparisons", icon: DollarSign },
        { title: "Reduced IT Costs & Better Profitability", icon: BarChart },
        { title: "Reduced Regulatory & Security Risks", icon: ShieldAlert },
        { title: "Improved Satisfaction with IT", icon: HeartHandshake },
    ];
    
    return(
        <div>
             <section className="bg-secondary py-16 md:py-24">
                <div className="container">
                    <div className="text-sm text-muted-foreground mb-4">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <span className="mx-2">&raquo;</span>
                        <Link href="/services" className="hover:text-primary">Services</Link>
                        <span className="mx-2">&raquo;</span>
                        <span className="text-foreground">Virtual CIO Consulting Services</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="font-headline text-4xl md:text-5xl font-bold">Virtual CIO Consulting Services</h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Maximize your IT strategy with vCIO leadership on board in days, not months. Immediate engagement to avoid leadership gaps.
                            </p>
                            <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/contact">Get Started Today</Link>
                            </Button>
                        </div>
                        <div className="relative h-80 w-full">
                            {heroImage && (
                                <Image
                                    src={heroImage.imageUrl}
                                    alt={heroImage.description}
                                    fill
                                    className="rounded-lg object-cover shadow-lg"
                                    data-ai-hint={heroImage.imageHint}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container max-w-5xl">
                    <div className="text-center">
                         <h2 className="font-headline text-3xl md:text-4xl font-bold">Turn your IT into a revenue-generating asset</h2>
                         <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">A vCIO is well equipped to have technical business discussions. This includes:</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {vcioRolePoints.map((point, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <p>{point}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                            <Link href="/contact">Get vCIO Support Now</Link>
                        </Button>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">The vCIO 4-Step Process</h2>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {vcioProcessSteps.map(step => (
                            <Card key={step.title} className="text-center">
                                <CardHeader>
                                     <div className="mx-auto w-fit rounded-full bg-primary/10 p-3 mb-4">
                                        <step.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <CardTitle>{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                 <div className="container grid md:grid-cols-2 gap-12 items-center">
                     <div>
                        <h2 className="font-headline text-3xl font-bold">Strategic Discussions Around Technology and Business with vCIO</h2>
                        <p className="mt-4 text-muted-foreground">Benefits you can expect from the fractional CIO as a service team:</p>
                        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                           {vcioBenefits.map(benefit => (
                             <li key={benefit.title} className="flex items-center gap-3">
                               <benefit.icon className="w-6 h-6 text-orange-500" />
                               <span className="font-semibold">{benefit.title}</span>
                             </li>
                           ))}
                        </ul>
                         <Button asChild size="lg" className="mt-8">
                            <Link href="/contact">Schedule a Free vCIO Call</Link>
                        </Button>
                     </div>
                     <div className="relative h-96 w-full">
                         {processImage && (
                            <Image
                                src={processImage.imageUrl}
                                alt={processImage.description}
                                fill
                                className="object-contain"
                                data-ai-hint={processImage.imageHint}
                            />
                        )}
                    </div>
                 </div>
            </section>
            
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Learn more about our Virtual CIO services today</h2>
                        <Button asChild size="lg" variant="secondary" className="mt-8">
                            <Link href="/resources">Download Datasheet</Link>
                        </Button>
                    </div>
                    <div className="relative h-80 w-full">
                        {datasheetImage && (
                            <Image
                                src={datasheetImage.imageUrl}
                                alt={datasheetImage.description}
                                fill
                                className="object-contain"
                                data-ai-hint={datasheetImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
                    </div>
                    <Carousel
                        opts={{ align: "start", loop: true }}
                        className="w-full max-w-4xl mx-auto mt-12"
                        >
                        <CarouselContent>
                            {vcioTestimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <Card className="h-full">
                                    <CardContent className="p-6">
                                        <div className='flex text-yellow-500 mb-4'>
                                            {[...Array(5)].map((_, i) => <Star key={i} fill='currentColor' className='w-4 h-4' />)}
                                        </div>
                                        <p className="text-sm text-muted-foreground italic">&quot;{testimonial.comment}&quot;</p>
                                        <footer className="mt-4 text-sm font-semibold not-italic">
                                            {testimonial.name}
                                            {testimonial.company && <span className="block font-normal text-muted-foreground">{testimonial.company}</span>}
                                        </footer>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='-left-4' />
                        <CarouselNext className='-right-4' />
                    </Carousel>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-4xl">
                    <h2 className="text-center font-headline text-4xl font-bold mb-12">vCIO (Virtual CIO) FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {vcioFaqs.map(faq => (
                            <AccordionItem key={faq.question} value={faq.question}>
                                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <ContactSection />
        </div>
    )
}
