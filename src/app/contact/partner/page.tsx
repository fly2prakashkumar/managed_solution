
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { PartnerForm } from "@/components/forms/partner-form";

export default function PartnerPage() {
  const partnerImage = PlaceHolderImages.find(p => p.id === 'partner-program-hero');
  
  const supportAreas = [
    { title: "Support", description: "enterprise-class support at varying levels" },
    { title: "Resources", description: "Solutions engineers, marketing support & partner portal." },
    { title: "Education", description: "Webinars, battle cards, accelerators, trainings." },
    { title: "Customer Centric Commitment", description: "Our team, your team, our partner's teams – is at the core of our company." }
  ];

  const benefits = [
    "Empower your customer's teams",
    "Help your customers stay compliant and secure",
    "Optimize clinical and operational effectiveness",
    "Optimize operations and risk management"
  ];
  
  const services = ["Managed Services", "Professional Services", "Consulting Services", "Cloud Services"];

  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Partner with Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">Join Our Partner Program</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg">We are excited to have you join our partner program! By partnering with EternalMinds as a preferred Technology Partner, you can offer your customers security and support throughout their digital transformation journey.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportAreas.map(area => (
              <div key={area.title} className="text-center">
                <h3 className="font-headline text-xl font-bold">{area.title}</h3>
                <p className="mt-2 text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold">By Partnering With Us, We Can:</h2>
              <ul className="mt-6 space-y-3 list-disc list-inside">
                {benefits.map(benefit => <li key={benefit}>{benefit}</li>)}
              </ul>
            </div>
            {partnerImage && (
              <div className="relative h-80 w-full">
                <Image src={partnerImage.imageUrl} alt={partnerImage.description} fill className="object-cover rounded-lg" data-ai-hint={partnerImage.imageHint} />
              </div>
            )}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="font-headline text-3xl font-bold">What We Do To Help Customers, Why You Want To Partner With Us!</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {services.map(service => (
                <div key={service} className="bg-muted px-4 py-2 rounded-md font-semibold">{service}</div>
              ))}
            </div>
          </div>

          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="font-headline text-3xl font-bold text-center mb-8">Partner and Customer Information</h2>
            <PartnerForm />
          </div>
        </div>
      </section>
    </>
  );
}
