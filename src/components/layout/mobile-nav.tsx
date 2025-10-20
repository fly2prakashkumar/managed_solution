"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/data";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link href="/" className="mr-6 flex items-center" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <div className="flex h-full flex-col py-6">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-foreground/70 transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setOpen(false)}>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
