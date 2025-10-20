"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
           <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-orange-500 text-white">
            <Menu className="h-5 w-5" />
          </div>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link href="/" className="mr-6 flex items-center" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <div className="flex h-full flex-col py-6">
          <nav className="flex flex-col">
            <Accordion type="multiple" className="w-full">
              {navItems.map((item) =>
                item.children ? (
                  <AccordionItem value={item.title} key={item.title}>
                    <AccordionTrigger className="py-4 text-lg font-medium text-foreground/70 transition-colors hover:text-foreground hover:no-underline">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <div className="flex flex-col gap-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
                            onClick={() => setOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center border-b py-4 text-lg font-medium text-foreground/70 transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </Accordion>
          </nav>
          <div className="mt-auto">
            <Button asChild className="w-full bg-orange-500 text-white hover:bg-orange-600" onClick={() => setOpen(false)}>
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
