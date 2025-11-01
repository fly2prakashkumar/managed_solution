
import Image from "next/image";
import Link from "next/link";
import { aiFaqs, aiResources, testimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Mail, Phone, MessageCircle, Star } from "lucide-react";
import ContactSection from "@/components/shared/contact-section";
import Breadcrumbs from "@/components/shared/breadcrumbs";

export const AiAutomationPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/solutions" },
        { label: "AI and Automation Implementation", href: "/services/ai-and-automation" },
    ];

    const azureOpenAiImage1 = PlaceHolderImages.find(p => p.id === 'azure-openai-1');
    const azureOpenAiImage2 = PlaceHolderImages.find(p => p.id === 'azure-openai-2');
    const rpaHelpdeskImage = PlaceHolderImages.find(p => p.id === 'rpa-helpdesk');
    const rpaHelpdeskImage2 = PlaceHolderImages.find(p => p.id === 'rpa-helpdesk-2');
    const copilotPowerpoint = PlaceHolderImages.find(p => p.id === 'copilot-powerpoint');
    const copilotWord = PlaceHolderImages.find(p => p.id === 'copilot-word');
    const copilotExcel = PlaceHolderImages.find(p => p.id === 'copilot-excel');
    const copilotTeams = PlaceHolderImages.find(p => p.id === 'copilot-teams');
    const copilotOutlook = PlaceHolderImages.find(p => p.id === 'copilot-outlook');
    const aiRoadmapEguide = PlaceHolderImages.find(p => p.id === 'ai-roadmap-eguide');
    const bestHelpdeskGraphic = PlaceHolderImages.find(p => p.id === 'datasheet-cta');

    const whyWorkWithUs = [
        { title: "Expert AI Consulting" },
        { title: "Cost Optimization", description: "Claims 10-20% cost savings on Azure AI services, noted as a Microsoft Tier 1 CSP" },
        { title: "Seamless Integration" },
    ];
    
    const rpaUseCases = [
        "Order Tracking", "Ticket Creation and Routing", "Password Reset", "User Provisioning/Deprovisioning",
        "Software Installation", "System Diagnostics", "Backup and Recovery", "Compliance Reporting",
        "Performance Monitoring", "Knowledge Base Queries"
    ];

    const copilotBenefits = [
        "Enhanced Productivity", "Improved Decision Making", "Cost Efficiency"
    ];

    const copilotUseCases = {
        "Human Resources": "Draft a job description for a Senior DevOps Engineer.",
        "Information Technology": "Create a step-by-step guide for setting up a new VPN connection.",
        "Finance": "Analyze the Q3 sales data and summarize key trends.",
        "Marketing": "Generate 5 taglines for our new cybersecurity service.",
        "Sales": "Draft a follow-up email to a potential client after a demo.",
        "Customer Service": "Summarize the customer's issue from the last three emails.",
    };

    const copilotIntegrations = [
        { name: "PowerPoint", image: copilotPowerpoint },
        { name: "Word", image: copilotWord },
        { name: "Excel", image: copilotExcel },
        { name: "Teams", image: copilotTeams },
        { name: "Outlook", image: copilotOutlook },
    ];

    const copilotSolutions = [
        { title: "Copilot Workshop", href: "#" },
        { title: "Copilot Adoption", description: "a three-week program", href: "#" },
        { title: "Copilot Security Assessment", href: "#" },
        { title: "Copilot Studio Chatbot", href: "#" },
    ];

    return (
        <div>
            <section className="bg-secondary py-12">
                <div className="container">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
            </section>
            
            {/* Hero */}
            <section className="py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">AI-Powered Managed Services</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">AI Managed Solutions: Secure, Cost-Effective, and Future-Ready Maintenance</p>
                    <Button asChild size="lg" className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                        <Link href="/contact">Free AI consultation</Link>
                    </Button>
                    <div className="mt-8">
                        <p className="font-semibold text-primary">Microsoft Copilot and Azure OpenAI</p>
                        <div className="flex justify-center flex-wrap gap-2 mt-2">
                           {["AZURE OPEN AI", "IT HELP DESK", "RPA", "MICROSOFT 365 COPILOT"].map(tag => (
                               <Badge key={tag} variant="outline">{tag}</Badge>
                           ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Azure OpenAI */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold">Azure OpenAI for Business Innovation</h2>
                        {azureOpenAiImage1 && (
                            <div className="relative h-64 w-full my-6">
                                <Image src={azureOpenAiImage1.imageUrl} alt={azureOpenAiImage1.description} fill className="object-contain" data-ai-hint={azureOpenAiImage1.imageHint} />
                            </div>
                        )}
                        <h3 className="font-headline text-2xl font-bold mt-8">Why Work with Managed Solution?</h3>
                        <ul className="mt-4 space-y-4">
                            {whyWorkWithUs.map(item => (
                                <li key={item.title}>
                                    <h4 className="font-semibold">{item.title}</h4>
                                    {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-headline text-2xl font-bold">Azure OpenAI Use Cases</h3>
                        {azureOpenAiImage2 && (
                            <div className="relative h-64 w-full my-6">
                                <Image src={azureOpenAiImage2.imageUrl} alt={azureOpenAiImage2.description} fill className="object-contain" data-ai-hint={azureOpenAiImage2.imageHint} />
                            </div>
                        )}
                        <div className="space-y-4">
                            <Card>
                                <CardContent className="p-4">
                                    <p><strong className="text-primary">Healthcare & Finance:</strong> Advanced data analysis and patient record summarization.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <p><strong className="text-primary">Retail & Manufacturing:</strong> Personalized customer experiences and predictive maintenance.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* RPA */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">What is RPA in IT Help Desk?</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                             {rpaHelpdeskImage && (
                                <div className="relative h-80 w-full mb-8">
                                    <Image src={rpaHelpdeskImage.imageUrl} alt={rpaHelpdeskImage.description} fill className="object-cover rounded-lg" data-ai-hint={rpaHelpdeskImage.imageHint} />
                                </div>
                            )}
                            <h3 className="font-headline text-2xl font-bold">Supercharge Your Business with RPA</h3>
                            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                                <div><p className="font-semibold">Enhanced User Experience</p></div>
                                <div><p className="font-semibold">Increased Ticket Resolution</p></div>
                                <div><p className="font-semibold">Reduced Resolution Times</p></div>
                            </div>
                             <div className="mt-8 flex justify-around">
                                <div className="text-center"><Mail className="mx-auto mb-2 w-8 h-8 text-orange-500" /><p>Email</p></div>
                                <div className="text-center"><Phone className="mx-auto mb-2 w-8 h-8 text-orange-500" /><p>Phone</p></div>
                                <div className="text-center"><MessageCircle className="mx-auto mb-2 w-8 h-8 text-orange-500" /><p>Message/Chatbot</p></div>
                            </div>
                        </div>
                        <div>
                             {rpaHelpdeskImage2 && (
                                <div className="relative h-80 w-full mb-8">
                                    <Image src={rpaHelpdeskImage2.imageUrl} alt={rpaHelpdeskImage2.description} fill className="object-cover rounded-lg" data-ai-hint={rpaHelpdeskImage2.imageHint} />
                                </div>
                            )}
                            <h3 className="font-headline text-2xl font-bold">Powerful Use Cases</h3>
                            <ul className="mt-4 columns-2 space-y-2 list-disc list-inside">
                                {rpaUseCases.map(useCase => <li key={useCase}>{useCase}.</li>)}
                            </ul>
                            <div className="mt-8 border-l-4 border-primary pl-4 italic">
                                <p>Artificial Intelligence and Robotic Process Automation (RPA) could contribute up to $15 trillion to global GDP by 2030.</p>
                                <footer className="text-sm not-italic mt-2">- McKinsey, A Future That Works: Automation, Employment & Productivity</footer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Microsoft Copilot */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Explore the Future of Work with Microsoft Copilot</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {copilotBenefits.map(benefit => (
                            <Card key={benefit}>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><CheckCircle className="text-green-500" /> {benefit}</CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 text-center max-w-3xl mx-auto">
                        <h3 className="font-headline text-2xl font-bold">Transforming How Teams Work</h3>
                        <p className="mt-4 text-muted-foreground">Copilot helps departments from HR to Customer Service work smarter.</p>
                    </div>

                    <div className="mt-12">
                        <h3 className="font-headline text-2xl font-bold text-center mb-8">Use cases for Microsoft Copilot</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {Object.entries(copilotUseCases).map(([dept, prompt]) => (
                                <Card key={dept}>
                                    <CardHeader>
                                        <CardTitle className="text-lg">{dept}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm italic text-muted-foreground">"{prompt}"</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                     <div className="mt-16 text-center">
                        <h3 className="font-headline text-2xl font-bold">Copilot Integration</h3>
                        <p className="mt-4 text-muted-foreground">Seamlessly integrated into Microsoft 365 apps.</p>
                        <div className="flex justify-center items-center gap-8 flex-wrap mt-8">
                            {copilotIntegrations.map(app => app.image && (
                                <Image key={app.name} src={app.image.imageUrl} alt={`${app.name} logo`} width={64} height={64} className="object-contain" data-ai-hint={app.image.imageHint} />
                            ))}
                        </div>
                    </div>

                    <div className="mt-16">
                        <h3 className="font-headline text-2xl font-bold text-center mb-8">What are your Copilot Studio use cases for IT?</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Update a user's details...</li>
                                <li>Set up mail forwarding...</li>
                                <li>Add a user to a group...</li>
                                <li>Remove a user from a group...</li>
                                <li>Enable or disable a user account...</li>
                                <li>List all groups a user is a member of...</li>
                                <li>Set a user's manager...</li>
                                <li>Set out-of-office replies...</li>
                                <li>List all users with a specific license...</li>
                                <li>Find a user's direct reports...</li>
                                <li>List inactive users...</li>
                                <li>Check a user's last login time...</li>
                            </ul>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Map a network drive for a user...</li>
                                <li>Install a printer shared...</li>
                                <li>Run a script on a computer...</li>
                                <li>Check for pending reboots...</li>
                                <li>Restart a service on a computer...</li>
                                <li>Get the uptime of a computer...</li>
                                <li>List all installed applications...</li>
                                <li>Check disk space...</li>
                            </ul>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Update a user's details in Office 365 / Active Directory</li>
                                <li>Add/remove a user from a security group</li>
                                <li>Enable/disable a user's account</li>
                                <li>Find all groups a user belongs to</li>
                                <li>Set a user's manager</li>
                                <li>List all users with a specific Microsoft 365 license</li>
                                <li>Find a user's direct reports</li>
                                <li>List all inactive users in Active Directory</li>
                                <li>Check a user's last logon time</li>
                                <li>List all disabled user accounts</li>
                                <li>Find users with passwords set to never expire</li>
                                <li>List all users in a specific department</li>
                            </ul>
                            <ul className="space-y-2 list-disc list-inside">
                                 <li>Log out a user from a Citrix session</li>
                                 <li>Enable or disable a user's remote access</li>
                                 <li>Check the status of a VPN connection</li>
                                 <li>Restart a virtual machine in Azure</li>
                                 <li>List all active remote desktop sessions on a server</li>
                                 <li>Get the external IP address of a computer</li>
                                 <li>Check if a specific port is open on a firewall</li>
                                 <li>Ping a remote host to check for connectivity</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="font-headline text-2xl font-bold mb-8">Our Microsoft Copilot Solutions</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {copilotSolutions.map(solution => (
                                <Card key={solution.title}>
                                    <CardHeader>
                                        <CardTitle>{solution.title}</CardTitle>
                                        {solution.description && <p className="text-sm text-muted-foreground">{solution.description}</p>}
                                    </CardHeader>
                                    <CardContent>
                                        <Button asChild variant="link" className="p-0 text-orange-500">
                                            <Link href={solution.href}>Learn More</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 md:py-24">
                <div className="container max-w-4xl">
                    <h2 className="text-center font-headline text-4xl font-bold mb-12">AI and Automation FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {aiFaqs.map(faq => (
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
            
            {/* CTA and Resources */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container text-center">
                    <Button size="lg">Begin Your AI and Automation Implementation Journey Today</Button>
                     <div className="mt-8">
                        <Link href="/resources" className="inline-block">
                             {aiRoadmapEguide && (
                                <Image src={aiRoadmapEguide.imageUrl} alt="Download your AI Roadmap" width={250} height={150} className="mx-auto object-contain" data-ai-hint={aiRoadmapEguide.imageHint} />
                            )}
                            <p className="text-orange-500 hover:underline font-semibold mt-2">download your ai roadmap</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">Additional Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {aiResources.map(resource => {
                             const resourceImage = PlaceHolderImages.find(img => img.id === resource.imageId);
                             return (
                                <Card key={resource.title} className="group">
                                    {resourceImage && (
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image src={resourceImage.imageUrl} alt={resource.title} fill className="object-cover group-hover:scale-105 transition-transform" data-ai-hint={resourceImage.imageHint}/>
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="text-lg font-headline">{resource.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Button asChild variant="link" className="p-0">
                                            <Link href={resource.href}>{resource.type === 'ebook' ? 'Download the eBook' : 'Read More'}</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                             )
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                         {bestHelpdeskGraphic && (
                            <div className="relative h-80 w-full">
                                <Image src={bestHelpdeskGraphic.imageUrl} alt="Best Helpdesk Graphic" fill className="object-contain" data-ai-hint={bestHelpdeskGraphic.imageHint} />
                            </div>
                        )}
                    </div>
                    <div className="space-y-6">
                        {testimonials.map((testimonial, index) => (
                             <Card key={index}>
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
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
