"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/layout/mobile-nav";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <div className="h-1.5 bg-green-200" />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex md:flex-1 md:justify-center">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 outline-none transition-colors hover:text-foreground">
                    {item.title}
                    <ChevronDown className="h-4 w-4" />
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
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-4">
            <Button asChild variant="link" className="hidden md:flex text-orange-500 hover:text-orange-600">
                <Link href="/contact">BOOK CONSULTATION</Link>
            </Button>
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
