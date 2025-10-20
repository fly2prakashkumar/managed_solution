import Link from "next/link";
import { Hexagon } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative h-10 w-10">
        <Hexagon className="h-full w-full fill-orange-500 text-orange-500" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 rounded-full border-2 border-white bg-transparent"></div>
        </div>
         <div className="absolute inset-0 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
                {Array.from({ length: 12 }).map((_, i) => (
                <rect
                    key={i}
                    x="9.5"
                    y="1"
                    width="1"
                    height="3"
                    rx="0.5"
                    fill="white"
                    transform={`rotate(${i * 30}, 10, 10)`}
                />
                ))}
            </svg>
        </div>
      </div>
      <span className="hidden font-headline text-lg font-bold sm:inline-block">
        <span className="text-gray-500">MANAGED</span>
        <br />
        <span className="text-orange-500">SOLUTION</span>
      </span>
    </Link>
  );
}
