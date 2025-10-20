import Link from "next/link";
import Logo from "@/components/shared/logo";
import { services } from "@/lib/data";
import { Github, Twitter, Linkedin } from "lucide-react";


export default function Footer() {
  const footerNav = [
      {
          title: "Solutions",
          links: [
              ...services.map(s => ({ title: s.title, href: `/services#${s.slug}`}))
          ]
      },
      {
          title: "Company",
          links: [
              { title: "About Us", href: "/about" },
              { title: "Blog", href: "/blog" },
              { title: "Careers", href: "#" },
          ]
      },
      {
          title: "Contact",
          links: [
                { title: "contact@optimalsolutions.com", href: "mailto:contact@optimalsolutions.com" },
                { title: "(123) 456-7890", href: "tel:+1234567890" },
          ]
      }
  ]


  return (
    <footer className="border-t bg-secondary">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Your Partner in Managed IT Services and Solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-3">
             <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {footerNav.map(section => (
                    <div key={section.title}>
                        <h3 className="font-headline text-sm font-semibold uppercase tracking-wider">{section.title}</h3>
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
                <div>
                     <h3 className="font-headline text-sm font-semibold uppercase tracking-wider">Location</h3>
                     <p className="mt-4 text-sm text-muted-foreground">123 Tech Avenue, Silicon Valley, CA</p>
                </div>
              </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Managed Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
