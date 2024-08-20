"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

// Supposons que nous avons 16 SVG différents
const svgFiles = [
  "/svg/vercel.svg",
  "/svg/lenovo.svg",
  "/svg/anteriad.svg",
  "/svg/vercel.svg",
  "/svg/anteriad.svg",
  "/svg/cloudflare.svg",
  "/svg/hp.svg",
  "/svg/lenovo.svg",
  "/svg/hp.svg",
  "/svg/vercel.svg",
  "/svg/vercel.svg",
  "/svg/cloudflare.svg",
];

export const SVGGrid = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 justify-items-center gap-16 sm:grid-cols-4 md:grid-cols-4 md:gap-32">
        {svgFiles.map((svgPath, index) => (
          <div
            key={`svg-${index}`}
            className={cn(
              "flex w-full items-center justify-center",
              index < 4 ? "hidden sm:flex" : "",
            )}
          >
            <Image
              src={svgPath}
              alt={`SVG ${index + 1}`}
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("group", className)}>{children}</div>;
};
