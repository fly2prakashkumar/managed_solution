
import { EventContactForm } from "@/components/forms/event-contact-form";
import { Card } from "@/components/ui/card";

export default function ContactSection() {
    return (
        <section className="py-16 md:py-24 bg-secondary">
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
    )
}

    