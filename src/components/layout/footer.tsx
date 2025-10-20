import Link from "next/link";
import Logo from "@/components/shared/logo";
import { footerNav } from "@/lib/data";
import { Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import { Button } from "../ui/button";


export default function Footer() {
  
    const socialLinks = [
        {
            name: "LinkedIn",
            href: "#",
            icon: <Linkedin className="h-6 w-6" />
        },
        {
            name: "Facebook",
            href: "#",
            icon: <Facebook className="h-6 w-6" />
        },
        {
            name: "Twitter",
            href: "#",
            icon: <Twitter className="h-6 w-6" />
        },
        {
            name: "YouTube",
            href: "#",
            icon: <Youtube className="h-6 w-6" />
        }
    ]

  return (
    <footer className="border-t bg-secondary py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          
          <div className="md:col-span-3">
            <Logo />
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground">
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-8 space-y-4">
                <div>
                    <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-orange-500">Services</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        2150 W Washington St, Suite 402<br />
                        San Diego, CA 92110
                    </p>
                </div>
                 <div>
                    <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-orange-500">Main Line</h3>
                    <a href="tel:888-563-9132" className="mt-1 block text-sm text-muted-foreground hover:text-foreground">888-563-9132</a>
                </div>
            </div>
             <Button asChild variant="outline" className="mt-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/contact">BOOK CONSULTATION</Link>
             </Button>
          </div>
          
          <div className="md:col-span-9">
             <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                {footerNav.map(section => (
                    <div key={section.title}>
                        <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-orange-500">{section.title}</h3>
                        <ul className="mt-4 space-y-2">
                           {section.links.map(link => (
                               <li key={link.title}>
                                 <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                                  {link.title}
                                 </Link>
                               </li>
                           ))}
                        </ul>
                    </div>
                ))}
              </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Managed Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
