"use client";

import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
  target?: "_blank";
};

export function NavBarItem({
  children,
  href,
  active,
  target,
  className,
}: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center rounded-lg px-4 py-2 text-sm leading-[110%] text-white transition duration-200 hover:bg-[var(--foreground)] hover:text-white/80 hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset]",
        (active || pathname?.includes(href)) && "bg-transparent text-white",
        className,
      )}
      target={target}
    >
      {children}
    </Link>
  );
}
