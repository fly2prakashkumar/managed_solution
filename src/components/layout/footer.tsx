import Link from "next/link";
import Logo from "@/components/shared/logo";
import { navItems } from "@/lib/data";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
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
                <div>
                  <h3 className="font-headline text-sm font-semibold uppercase tracking-wider">Solutions</h3>
                  <ul className="mt-4 space-y-2">
                    {navItems.map(item => (
                       <li key={item.href}>
                         <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                          {item.title}
                         </Link>
                       </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-headline text-sm font-semibold uppercase tracking-wider">Company</h3>
                  <ul className="mt-4 space-y-2">
                    <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
                     <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
                    <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-headline text-sm font-semibold uppercase tracking-wider">Contact</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li><a href="mailto:contact@optimalsolutions.com" className="hover:text-foreground">contact@optimalsolutions.com</a></li>
                    <li><a href="tel:+1234567890" className="hover:text-foreground">(123) 456-7890</a></li>
                    <li>123 Tech Avenue, Silicon Valley, CA</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Optimal Solutions Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
