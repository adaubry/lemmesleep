import { cn } from "@/lib/utils";
import React from "react";

export const FeatureIconContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="mb-8 [perspective:400px] [transform-style:preserve-3d]">
      <div
        className={cn(
          "relative mx-auto h-14 w-14 rounded-md bg-gradient-to-b from-[var(--card-foreground)] to-neutral-950 p-[4px]",
        )}
        style={{
          transform: "rotateX(25deg)",
          transformOrigin: "center",
        }}
      >
        <div
          className={cn(
            "bg-charcoal relative z-20 h-full w-full rounded-[5px]",
            className,
          )}
        >
          {children}
        </div>
        <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-neutral-600 opacity-50 blur-lg"></div>
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 mx-auto h-[8px] w-[60%] bg-gradient-to-r from-transparent via-[var(--foreground)] to-transparent blur-sm"></div>
      </div>
    </div>
  );
};
