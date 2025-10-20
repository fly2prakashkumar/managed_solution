
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
import { ChevronDown, Menu } from "lucide-react";
import { Hexagon } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 text-sm font-medium"
                  >
                    {item.title}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.title} asChild>
                      <Link href={child.href}>{child.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="link" asChild className="font-bold text-orange-500">
            <Link href="/contact">BOOK CONSULTATION</Link>
          </Button>
          <div className="relative h-10 w-10 cursor-pointer">
             <Hexagon className="h-full w-full fill-orange-500 text-orange-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Menu className="h-6 w-6 text-white" />
              </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
             <div className="relative h-10 w-10 cursor-pointer">
                 <Hexagon className="h-full w-full fill-orange-500 text-orange-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Menu className="h-6 w-6 text-white" />
                  </div>
              </div>
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
              <Button asChild className="font-bold">
                 <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>BOOK CONSULTATION</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
