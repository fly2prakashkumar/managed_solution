import Link from "next/link";
import { Target } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
        <Target className="h-7 w-7 text-accent" />
        <span className="hidden font-headline text-lg font-bold sm:inline-block">
            Optimal Solutions Hub
        </span>
    </Link>
  );
}
