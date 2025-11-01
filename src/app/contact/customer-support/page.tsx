
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CustomerSupportForm } from "@/components/forms/customer-support-form";

export default function CustomerSupportPage() {
  const supportPortals = [
    {
      title: "Customer Support Portal",
      subtitle: "24/7 Support Portal",
      buttonText: "ConnectWise Client Login",
      href: "#",
    },
    {
      title: "Make A Payment",
      buttonText: "Make a Payment on ConnectBooster",
      href: "#",
    },
    {
      title: "Office 365 Billing",
      buttonText: "Login to Cloud Licensing",
      href: "#",
    },
  ];

  const contactInfo = [
    {
      department: "IT Support",
      phone1: "888.563.9132, option #2",
      phone2: "858.429.3000, option #2",
      email: "helpdesk@optimalsolutions.com",
    },
    {
      department: "Billing",
      phone1: "858.429.3062",
      email: "accounts_payable@optimalsolutions.com",
    },
  ];

  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Customer Support</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {supportPortals.map((portal) => (
              <Card key={portal.title}>
                <CardHeader>
                  <CardTitle>{portal.title}</CardTitle>
                  {portal.subtitle && <p className="text-muted-foreground">{portal.subtitle}</p>}
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <Link href={portal.href}>{portal.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-center font-headline text-3xl font-bold">Support Contact Information</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {contactInfo.map((contact) => (
                <Card key={contact.department}>
                  <CardHeader>
                    <CardTitle>{contact.department}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {contact.phone1 && <p><strong>Phone:</strong> <a href={`tel:${contact.phone1.split(',')[0]}`} className="hover:underline">{contact.phone1}</a></p>}
                    {contact.phone2 && <p><strong>Alt. Phone:</strong> <a href={`tel:${contact.phone2.split(',')[0]}`} className="hover:underline">{contact.phone2}</a></p>}
                    {contact.email && <p><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a></p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-4xl">
             <div className="text-center">
                <h2 className="font-headline text-4xl font-bold text-primary">Contact Us Today!</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Chat with an expert about your business's technology needs.
                </p>
            </div>
            <Card className="mt-8 p-8 shadow-2xl">
                <CustomerSupportForm />
            </Card>
        </div>
    </section>
    </>
  );
}
