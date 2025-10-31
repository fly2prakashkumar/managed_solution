import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative h-12 w-12">
        <Image
          src="/logo.png"
          alt="EternalMinds Logo"
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>
      <div className="hidden sm:block">
        <p className="font-headline text-xl font-bold leading-none text-blue-400">
          ETERNAL MINDS
        </p>
        <p className="text-xs tracking-wider text-muted-foreground">
          SMART. SCALABLE. SUSTAINABLE
        </p>
      </div>
    </Link>
  );
}
