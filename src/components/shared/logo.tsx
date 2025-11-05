import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative h-12 w-15">
        <Image
          src="/logo.png"
          alt="EternalMinds Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="hidden sm:block">
        <p className="font-headline text-xl font-bold leading-none text-primary">
          EternalMinds
        </p>
        <p className="text-xs tracking-wider text-muted-foreground">
          Your Partner in Managed IT Services and Solutions.
        </p>
      </div>
    </Link>
  );
}
