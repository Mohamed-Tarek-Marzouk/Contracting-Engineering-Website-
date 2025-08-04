import type { SVGProps } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Tekam Online Home">
       <svg
        width="110"
        height="120"
        viewBox="0 0 110 120"
        className={cn('w-8 h-auto', className)}
        {...props}
        >
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'rgb(0, 198, 255)', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: 'rgb(92, 82, 227)', stopOpacity: 1}} />
            </linearGradient>
        </defs>
        <path
            d="M 25,50 L 25,15 C 25,10 30,5 35,5 L 45,5 C 50,5 55,10 55,15 L 55,25 C 55,30 50,35 45,35 L 40,35 L 40,80 L 70,80 L 70,35 L 65,35 C 60,35 55,30 55,25 L 55,15 C 55,10 60,5 65,5 L 75,5 C 80,5 85,10 85,15 L 85,50"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <text
            x="55"
            y="110"
            fontFamily="Arial, sans-serif"
            fontSize="28"
            fontWeight="bold"
            fill="rgb(0, 198, 255)"
            textAnchor="middle"
            >
            TEKAM
        </text>
        </svg>
      <span className="self-center text-xl font-bold whitespace-nowrap text-foreground font-headline">
        Tekam
      </span>
    </Link>
  );
}
