"use client";

import { motion, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState } from "react";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { StickyScroll } from "./sticky-scroll-services";
import { useScroll } from "framer-motion";

interface ContentItem {
  title: string;
  description: string;
  content: React.ReactNode;
  src: React.ReactNode;
}

interface NosServicesProps {
  heading?: string;
  subheading?: string;
  content: ContentItem[];
}

export const CharacteristicService: React.FC<NosServicesProps> = ({
  heading = "Insert Heading",
  subheading = "Insert Subheading",
  content,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgrounds = [
    "var(--background)",
    "var(--background)",
    "var(--card-foreground)",
  ];

  const [gradient, setGradient] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / content.length);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setGradient(backgrounds[closestBreakpointIndex % backgrounds.length]);
  });

  return (
    <motion.div
      animate={{
        background: gradient,
      }}
      transition={{
        duration: 0.5,
      }}
      ref={ref}
      className="relative h-full w-full pt-20 md:pt-40"
    >
      <div className="px-6">
        <Heading className="mt-4">{heading}</Heading>
        <Subheading>{subheading}</Subheading>
      </div>
      <StickyScroll content={content} />
    </motion.div>
  );
};
