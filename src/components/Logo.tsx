import type { SVGProps } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Tekam Online Home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        className={cn(className)}
        {...props}
      >
        <path d="M3 3h18v3h-7.5v15h-3V6H3V3z" className="fill-primary" />
        <path d="M19.5 7h-5v2h5V7z" className="fill-accent"/>
      </svg>
      <span className="self-center text-xl font-bold whitespace-nowrap text-foreground font-headline">
        Tekam
      </span>
    </Link>
  );
}
