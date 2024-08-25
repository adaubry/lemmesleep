"use client";
import { motion, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState } from "react";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { StickyScroll } from "./sticky-scroll-services";
import { useScroll } from "framer-motion";
import LottieAnimation from "@/components/ui/lottie-animation";
import Link from "next/link";

export const NosServices = () => {
  const content = [
    {
      title: "Identification de votre audience",
      description:
        "Définissez, identifiez, localisez et faites vous connaitre auprès de vos prochain clients. Nous pouvons vous aider à personnaliser la meilleure approche",
      content: <LottieAnimation src="/lottie/bundle.json" />,
      src: (
        <Link
          href="/nos-services/audience-identification"
          className="text-[var(--button)] hover:text-[var(--button-hover)]"
        >
          En savoir plus
        </Link>
      ),
    },
    {
      title: "Generation de leads",
      description:
        "Un marketing complet pour engager des prospects sur le marché et développer votre pipeline sur tous les canaux. Nos données, nos solutions et notre assistance seront adaptées à tous vos besoins.",
      content: <LottieAnimation src="/lottie/leadgen.json" />,
      src: (
        <Link
          href="/nos-services/lead-generation"
          className="text-[var(--button)] hover:text-[var(--button-hover)]"
        >
          En savoir plus
        </Link>
      ),
    },
    {
      title: "BDR/SDR en qualité de service",
      description:
        "Boostez vos ventes avec des BDR et SDR experts. De la prospection jusqu'à la conclusion auprès des décideurs clés.",
      content: <LottieAnimation src="/lottie/srdservice.json" />,
      src: (
        <Link
          href="/nos-services/sdr-as-a-service"
          className="text-[var(--button)] hover:text-[var(--button-hover)]"
        >
          En savoir plus
        </Link>
      ),
    },
  ];
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
  const index = Math.round(scrollYProgress.get() * (backgrounds.length - 1));

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
        <Heading className="mt-4">Nos Services</Heading>
        <Subheading>
          Une sélection de services alliant savoir-faire et expérience, pour
          créer des opportunités, qualifier vos prospects et accélérer votre
          croissance.
        </Subheading>
      </div>
      <StickyScroll content={content} />
    </motion.div>
  );
};
