
import Image from "next/image";
import Link from "next/link";
import { caseStudies, coManagedFaqs, coManagedTestimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactSection from "@/components/shared/contact-section";

export const CoManagedITPage = () => {
    const heroImage = PlaceHolderImages.find(img => img.id === 'co-managed-it-hero');
    const eguideImage = PlaceHolderImages.find(img => img.id === 'eguide-cover');
    const collaborationImage = PlaceHolderImages.find(img => img.id === 'collaboration-image');

    return (
        <div>
            <section className="bg-secondary py-16 md:py-24">
                <div className="container">
                    <div className="text-sm text-muted-foreground mb-4">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <span className="mx-2">&raquo;</span>
                        <Link href="/services" className="hover:text-primary">Services</Link>
                        <span className="mx-2">&raquo;</span>
                        <span className="text-foreground">Co-Managed IT Services</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="font-headline text-4xl md:text-5xl font-bold">Co-Managed IT Services</h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Our collaborative approach combines the convenience of internal IT with the expertise of an MSP.
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
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Co-Managed IT vs Managed IT: What's the Difference?</h2>
                    </div>
                    <div className="mt-12 grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Co-Managed IT</CardTitle>
                                <p className="text-muted-foreground pt-2">A Collaborative Partnership: Your internal IT team works alongside the external provider.</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p><strong>Flexibility:</strong> You can choose which IT functions to outsource and which to keep in-house.</p>
                                <p><strong>Enhanced Support:</strong> Gain access to specialized skills and resources without fully outsourcing.</p>
                                <p><strong>Scalability:</strong> Easily scale IT services up or down based on your business needs.</p>
                                <p><strong>Cost Efficiency:</strong> Optimize costs by only outsourcing specific tasks or projects.</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Managed IT</CardTitle>
                                <p className="text-muted-foreground pt-2">Full Outsourcing: The external provider takes full responsibility for your IT operations.</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p><strong>Full Outsourcing:</strong> The external provider takes full responsibility for your IT operations.</p>
                                <p><strong>Proactive Management:</strong> Continuous monitoring and maintenance to prevent issues before they arise.</p>
                                <p><strong>Comprehensive Solutions:</strong> Access to a wide range of IT services, including cybersecurity, network management, and data backup.</p>
                                <p><strong>Predictable Costs:</strong> Fixed monthly fees for comprehensive IT support.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                             <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Choose a Co-Managed IT Service Model for Your Business</h2>
                             <p className="mt-4 text-lg text-muted-foreground">Empower your internal team to focus on strategic initiatives while we handle the day-to-day IT complexities. Our co-managed model is designed to drive growth, reduce risk, and control costs.</p>
                             <div className="mt-8 space-y-6">
                                 <div>
                                     <h3 className="font-semibold text-xl">Drive Growth</h3>
                                     <p className="text-muted-foreground">Freeing internal teams to pursue innovation.</p>
                                 </div>
                                 <div>
                                     <h3 className="font-semibold text-xl">Reduce Risk</h3>
                                     <p className="text-muted-foreground">Access to expert support in cybersecurity, compliance, and cloud.</p>
                                 </div>
                                  <div>
                                     <h3 className="font-semibold text-xl">Control Costs</h3>
                                     <p className="text-muted-foreground">Get exactly the services you need—nothing more, nothing less—so you can bridge skill gaps, and avoid the expense of full-time hires without compromising quality.</p>
                                 </div>
                             </div>
                             <Button asChild className="mt-8">
                                <Link href="/about">Meet Our Team</Link>
                             </Button>
                        </div>
                        <div className="relative h-96 w-full">
                            {collaborationImage && (
                                <Image src={collaborationImage.imageUrl} alt={collaborationImage.description} fill className="object-cover rounded-lg" data-ai-hint={collaborationImage.imageHint} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Unlock the Secrets to Efficient IT Management Services</h2>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Download our free eGuide to discover how Managed IT Services can transform your business with proactive monitoring, enhanced security, and strategic IT planning.
                        </p>
                        <Button asChild size="lg" variant="secondary" className="mt-8">
                            <Link href="/resources">GET YOUR FREE EGUIDE NOW</Link>
                        </Button>
                    </div>
                    <div className="relative h-80 w-full">
                        {eguideImage && (
                            <Image
                                src={eguideImage.imageUrl}
                                alt={eguideImage.description}
                                fill
                                className="object-contain"
                                data-ai-hint={eguideImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Co-Managed IT Services Case Study:</h2>
                        <blockquote className="mt-6 text-lg text-muted-foreground italic border-l-4 border-primary pl-6">
                            <p>“We'd worked with Managed Solution on a successful IT project in the past, so we had a good idea of their capabilities. Since they were at Microsoft Partner, in addition to projects they were able to support our software licensing. This was especially important to make sure that we have a compliant IT function error radar”.</p>
                            <footer className="mt-4 not-italic font-semibold">
                                – Dennis Gonzales, Sr. Principal, Information Systems and Technology.
                            </footer>
                        </blockquote>
                        <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                            <Link href="/contact">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-4xl">
                    <h2 className="text-center font-headline text-4xl font-bold mb-12">Co-Managed IT Services FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {coManagedFaqs.map(faq => (
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
    );
}
