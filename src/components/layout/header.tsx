
"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/data";
import { ChevronDown, Menu, Search, User, CreditCard } from "lucide-react";
import { Phone } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
       <div className="bg-secondary/50">
        <div className="container flex h-10 items-center justify-end text-sm text-muted-foreground">
          <div className="flex items-center gap-6">
            <a href="tel:858.429.3055" className="hover:text-foreground">858.429.3055</a>
            <Link href="#" className="flex items-center gap-1.5 hover:text-foreground">
              <User className="h-4 w-4" />
              Customer Support
            </Link>
            <Link href="#" className="flex items-center gap-1.5 hover:text-foreground">
              <CreditCard className="h-4 w-4" />
              Make A Payment
            </Link>
             <Link href="#" className="flex items-center gap-1.5 hover:text-foreground">
              Partner Programs
            </Link>
            <button className="flex items-center gap-1.5 hover:text-foreground">
              <Search className="h-4 w-4" />
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu 
                key={item.title} 
                open={openMenu === item.title} 
                onOpenChange={(isOpen) => setOpenMenu(isOpen ? item.title : null)}
              >
                <div onMouseLeave={() => setOpenMenu(null)}>
                  <DropdownMenuTrigger asChild>
                     <Button
                      variant="ghost"
                      className="flex items-center gap-1 text-sm font-medium"
                      onMouseEnter={() => setOpenMenu(item.title)}
                    >
                      {item.title}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent onMouseLeave={() => setOpenMenu(null)}>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.title} asChild>
                        <Link href={child.href}>{child.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </div>
              </DropdownMenu>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground px-4 py-2"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="outline" asChild className="font-bold border-primary text-primary">
            <Link href="/contact">BOOK CONSULTATION</Link>
          </Button>
           <Button variant="default" asChild className="font-bold">
            <Link href="/contact">CONTACT SALES</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4">
              <Logo />
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <div key={item.title}>
                    {item.children ? (
                       <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                           <Button
                            variant="ghost"
                            className="flex w-full items-center justify-between gap-1 text-base font-medium"
                          >
                            {item.title}
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {item.children.map((child) => (
                            <DropdownMenuItem key={child.title} asChild>
                               <Link href={child.href} onClick={() => setIsMobileMenuOpen(false)}>{child.title}</Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
                <div className="flex flex-col gap-4">
                    <Button asChild className="font-bold">
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>BOOK CONSULTATION</Link>
                    </Button>
                </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
